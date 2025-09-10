-- TRU SYNTH AI Strategy Form Database Schema
-- Run this SQL in your Supabase SQL editor

-- Create the ai_strategy_submissions table
CREATE TABLE IF NOT EXISTS ai_strategy_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    country_code VARCHAR(10) NOT NULL DEFAULT '+1',
    custom_country_code VARCHAR(10),
    email VARCHAR(255) NOT NULL,
    company VARCHAR(255),
    message TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'completed', 'cancelled')),
    source VARCHAR(50) DEFAULT 'ai_strategy_form',
    ip_address INET,
    user_agent TEXT,
    referrer TEXT
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_ai_strategy_submissions_email ON ai_strategy_submissions(email);
CREATE INDEX IF NOT EXISTS idx_ai_strategy_submissions_created_at ON ai_strategy_submissions(created_at);
CREATE INDEX IF NOT EXISTS idx_ai_strategy_submissions_status ON ai_strategy_submissions(status);
CREATE INDEX IF NOT EXISTS idx_ai_strategy_submissions_company ON ai_strategy_submissions(company);

-- Create a function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_ai_strategy_submissions_updated_at 
    BEFORE UPDATE ON ai_strategy_submissions 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE ai_strategy_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts (form submissions)
CREATE POLICY "Allow public form submissions" ON ai_strategy_submissions
    FOR INSERT WITH CHECK (true);

-- Create policy to allow authenticated users to read all submissions
CREATE POLICY "Allow authenticated read access" ON ai_strategy_submissions
    FOR SELECT USING (auth.role() = 'authenticated');

-- Create policy to allow authenticated users to update submissions
CREATE POLICY "Allow authenticated update access" ON ai_strategy_submissions
    FOR UPDATE USING (auth.role() = 'authenticated');

-- Create a view for admin dashboard (optional)
CREATE OR REPLACE VIEW ai_strategy_submissions_summary AS
SELECT 
    id,
    first_name,
    last_name,
    email,
    company,
    country_code,
    COALESCE(custom_country_code, country_code) as full_phone_code,
    phone,
    status,
    created_at,
    updated_at,
    CASE 
        WHEN created_at >= NOW() - INTERVAL '24 hours' THEN 'Today'
        WHEN created_at >= NOW() - INTERVAL '7 days' THEN 'This Week'
        WHEN created_at >= NOW() - INTERVAL '30 days' THEN 'This Month'
        ELSE 'Older'
    END as time_period
FROM ai_strategy_submissions
ORDER BY created_at DESC;

-- Grant permissions on the view
GRANT SELECT ON ai_strategy_submissions_summary TO authenticated;

-- Create a function to get submission statistics
CREATE OR REPLACE FUNCTION get_submission_stats()
RETURNS TABLE (
    total_submissions BIGINT,
    pending_count BIGINT,
    contacted_count BIGINT,
    completed_count BIGINT,
    today_submissions BIGINT,
    this_week_submissions BIGINT,
    this_month_submissions BIGINT
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        COUNT(*) as total_submissions,
        COUNT(*) FILTER (WHERE status = 'pending') as pending_count,
        COUNT(*) FILTER (WHERE status = 'contacted') as contacted_count,
        COUNT(*) FILTER (WHERE status = 'completed') as completed_count,
        COUNT(*) FILTER (WHERE created_at >= CURRENT_DATE) as today_submissions,
        COUNT(*) FILTER (WHERE created_at >= CURRENT_DATE - INTERVAL '7 days') as this_week_submissions,
        COUNT(*) FILTER (WHERE created_at >= CURRENT_DATE - INTERVAL '30 days') as this_month_submissions
    FROM ai_strategy_submissions;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant execute permission on the function
GRANT EXECUTE ON FUNCTION get_submission_stats() TO authenticated;

-- Insert some sample data (optional - remove in production)
INSERT INTO ai_strategy_submissions (first_name, last_name, phone, country_code, email, company, message, status) VALUES
('John', 'Doe', '555-0123', '+1', 'john.doe@example.com', 'Tech Corp', 'Looking for AI automation solutions', 'pending'),
('Jane', 'Smith', '555-0456', '+44', 'jane.smith@example.com', 'Innovation Ltd', 'Interested in digital employees', 'contacted'),
('Mike', 'Johnson', '555-0789', '+61', 'mike.johnson@example.com', 'Startup Inc', 'Need help with AI strategy', 'completed');

-- Create a function to validate email format
CREATE OR REPLACE FUNCTION is_valid_email(email TEXT)
RETURNS BOOLEAN AS $$
BEGIN
    RETURN email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$';
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- Add email validation constraint
ALTER TABLE ai_strategy_submissions 
ADD CONSTRAINT check_valid_email 
CHECK (is_valid_email(email));

-- Create a function to validate phone number format
CREATE OR REPLACE FUNCTION is_valid_phone(phone TEXT)
RETURNS BOOLEAN AS $$
BEGIN
    -- Allow digits, spaces, hyphens, parentheses, and plus signs
    RETURN phone ~* '^[\+]?[0-9\s\-\(\)]+$';
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- Add phone validation constraint
ALTER TABLE ai_strategy_submissions 
ADD CONSTRAINT check_valid_phone 
CHECK (is_valid_phone(phone));

-- Create a function to clean and format phone numbers
CREATE OR REPLACE FUNCTION format_phone_number(phone TEXT, country_code TEXT)
RETURNS TEXT AS $$
BEGIN
    -- Remove all non-digit characters except +
    phone := regexp_replace(phone, '[^0-9+]', '', 'g');
    
    -- If phone doesn't start with +, add the country code
    IF phone !~ '^\+' THEN
        phone := country_code || phone;
    END IF;
    
    RETURN phone;
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- Create a trigger to automatically format phone numbers
CREATE OR REPLACE FUNCTION format_phone_on_insert()
RETURNS TRIGGER AS $$
BEGIN
    NEW.phone := format_phone_number(NEW.phone, NEW.country_code);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER format_phone_trigger
    BEFORE INSERT OR UPDATE ON ai_strategy_submissions
    FOR EACH ROW
    EXECUTE FUNCTION format_phone_on_insert();

-- Create a function to get recent submissions for admin
CREATE OR REPLACE FUNCTION get_recent_submissions(limit_count INTEGER DEFAULT 10)
RETURNS TABLE (
    id UUID,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(255),
    company VARCHAR(255),
    phone VARCHAR(20),
    country_code VARCHAR(10),
    status VARCHAR(20),
    created_at TIMESTAMP WITH TIME ZONE,
    message TEXT
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        s.id,
        s.first_name,
        s.last_name,
        s.email,
        s.company,
        s.phone,
        s.country_code,
        s.status,
        s.created_at,
        s.message
    FROM ai_strategy_submissions s
    ORDER BY s.created_at DESC
    LIMIT limit_count;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant execute permission
GRANT EXECUTE ON FUNCTION get_recent_submissions(INTEGER) TO authenticated;

-- Create a function to search submissions
CREATE OR REPLACE FUNCTION search_submissions(search_term TEXT)
RETURNS TABLE (
    id UUID,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(255),
    company VARCHAR(255),
    phone VARCHAR(20),
    status VARCHAR(20),
    created_at TIMESTAMP WITH TIME ZONE
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        s.id,
        s.first_name,
        s.last_name,
        s.email,
        s.company,
        s.phone,
        s.status,
        s.created_at
    FROM ai_strategy_submissions s
    WHERE 
        s.first_name ILIKE '%' || search_term || '%' OR
        s.last_name ILIKE '%' || search_term || '%' OR
        s.email ILIKE '%' || search_term || '%' OR
        s.company ILIKE '%' || search_term || '%'
    ORDER BY s.created_at DESC;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant execute permission
GRANT EXECUTE ON FUNCTION search_submissions(TEXT) TO authenticated;

-- Add comments to the table and columns for documentation
COMMENT ON TABLE ai_strategy_submissions IS 'Stores AI strategy form submissions from the TRU SYNTH website';
COMMENT ON COLUMN ai_strategy_submissions.id IS 'Unique identifier for each submission';
COMMENT ON COLUMN ai_strategy_submissions.first_name IS 'First name of the person submitting the form';
COMMENT ON COLUMN ai_strategy_submissions.last_name IS 'Last name of the person submitting the form';
COMMENT ON COLUMN ai_strategy_submissions.phone IS 'Phone number (formatted with country code)';
COMMENT ON COLUMN ai_strategy_submissions.country_code IS 'Country code for the phone number';
COMMENT ON COLUMN ai_strategy_submissions.custom_country_code IS 'Custom country code if "Other" was selected';
COMMENT ON COLUMN ai_strategy_submissions.email IS 'Email address of the submitter';
COMMENT ON COLUMN ai_strategy_submissions.company IS 'Company name (optional)';
COMMENT ON COLUMN ai_strategy_submissions.message IS 'Additional message from the submitter';
COMMENT ON COLUMN ai_strategy_submissions.status IS 'Current status of the submission (pending, contacted, completed, cancelled)';
COMMENT ON COLUMN ai_strategy_submissions.source IS 'Source of the submission (default: ai_strategy_form)';
COMMENT ON COLUMN ai_strategy_submissions.ip_address IS 'IP address of the submitter';
COMMENT ON COLUMN ai_strategy_submissions.user_agent IS 'User agent string from the browser';
COMMENT ON COLUMN ai_strategy_submissions.referrer IS 'Referrer URL if available';
