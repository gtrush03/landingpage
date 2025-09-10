# Supabase Setup for TRU SYNTH AI Strategy Form

## 🚀 Quick Setup Guide

### 1. Database Schema Setup

1. **Go to your Supabase Dashboard**: https://supabase.com/dashboard
2. **Select your project**: `eismgkescnhccbxmvvch`
3. **Navigate to SQL Editor**
4. **Copy and paste the entire contents** of `supabase-schema.sql` into the SQL editor
5. **Click "Run"** to execute the schema

### 2. Environment Variables

The Supabase credentials are already configured in the codebase at `src/config/supabase.ts`:

```typescript
export const supabaseConfig = {
  url: 'https://eismgkescnhccbxmvvch.supabase.co',
  anonKey: 'sb_publishable_WUsg3HPl0g77JoG_kwBNvg_CEXJPDB4',
  serviceRoleKey: 'sb_secret_M9nATlcDzRjjumZXwAccaQ_5_RXGEFg'
};
```

### 3. Test the Form

1. **Start the development server**: `npm run dev`
2. **Navigate to**: http://localhost:5173/ai-strategy-form
3. **Fill out and submit the form**
4. **Check your Supabase dashboard** → Table Editor → `ai_strategy_submissions` to see the data

## 📊 Database Schema Overview

### Table: `ai_strategy_submissions`

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Primary key (auto-generated) |
| `first_name` | VARCHAR(100) | User's first name |
| `last_name` | VARCHAR(100) | User's last name |
| `phone` | VARCHAR(20) | Phone number (formatted) |
| `country_code` | VARCHAR(10) | Country code (e.g., +1, +44) |
| `custom_country_code` | VARCHAR(10) | Custom country code if "Other" selected |
| `email` | VARCHAR(255) | User's email address |
| `company` | VARCHAR(255) | Company name (optional) |
| `message` | TEXT | Additional message (optional) |
| `status` | VARCHAR(20) | Submission status (pending, contacted, completed, cancelled) |
| `source` | VARCHAR(50) | Source of submission (default: ai_strategy_form) |
| `ip_address` | INET | User's IP address |
| `user_agent` | TEXT | Browser user agent |
| `referrer` | TEXT | Referrer URL |
| `created_at` | TIMESTAMP | When the submission was created |
| `updated_at` | TIMESTAMP | When the submission was last updated |

### Key Features

- ✅ **Automatic timestamps** with triggers
- ✅ **Email validation** with constraints
- ✅ **Phone number formatting** and validation
- ✅ **Row Level Security (RLS)** enabled
- ✅ **Indexes** for performance optimization
- ✅ **Admin functions** for data management

## 🔧 Available Functions

### For Form Submissions
- `submitAIStrategyForm()` - Submit new form data
- `getSubmissionStats()` - Get submission statistics
- `getRecentSubmissions()` - Get recent submissions
- `searchSubmissions()` - Search submissions
- `updateSubmissionStatus()` - Update submission status

### Database Functions
- `get_submission_stats()` - Returns submission statistics
- `get_recent_submissions(limit)` - Returns recent submissions
- `search_submissions(search_term)` - Search submissions by name, email, or company
- `format_phone_number()` - Automatically formats phone numbers
- `is_valid_email()` - Validates email format
- `is_valid_phone()` - Validates phone format

## 🔒 Security Features

- **Row Level Security (RLS)** enabled
- **Public insert policy** for form submissions
- **Authenticated read/update policies** for admin access
- **Input validation** with database constraints
- **Automatic phone formatting** and validation

## 📈 Admin Dashboard (Future)

The schema includes functions for building an admin dashboard:

```sql
-- Get submission statistics
SELECT * FROM get_submission_stats();

-- Get recent submissions
SELECT * FROM get_recent_submissions(10);

-- Search submissions
SELECT * FROM search_submissions('john');
```

## 🚨 Troubleshooting

### Common Issues

1. **"Failed to submit form" error**
   - Check if the database schema has been created
   - Verify Supabase credentials are correct
   - Check browser console for detailed error messages

2. **Database connection issues**
   - Ensure Supabase project is active
   - Check if RLS policies are properly configured
   - Verify API keys are correct

3. **Form validation errors**
   - Check email format (must be valid email)
   - Check phone format (digits, spaces, hyphens, parentheses allowed)
   - Ensure required fields are filled

### Testing the Connection

You can test the Supabase connection by opening the browser console on the form page and checking for any error messages when submitting.

## 📝 Next Steps

1. **Set up email notifications** (optional)
2. **Create admin dashboard** for managing submissions
3. **Add analytics tracking** for form interactions
4. **Set up automated follow-up emails**

## 🔗 Useful Links

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Dashboard](https://supabase.com/dashboard)
- [Row Level Security Guide](https://supabase.com/docs/guides/auth/row-level-security)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript)
