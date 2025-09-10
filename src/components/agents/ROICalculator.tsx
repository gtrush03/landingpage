import React, { useState, useEffect, useRef } from 'react';
import { Calculator, DollarSign, Clock, TrendingUp, Zap } from 'lucide-react';

const WORKFLOW_TYPES = {
  'customer-support': { label: 'Customer Support & Ticket Resolution', baseAutomation: 75 },
  'sales-outreach': { label: 'Sales Outreach & Lead Qualification', baseAutomation: 65 },
  'data-entry': { label: 'Data Entry & Processing', baseAutomation: 85 },
  'document-review': { label: 'Document Review & Analysis', baseAutomation: 70 },
  'content-creation': { label: 'Content Creation & Management', baseAutomation: 55 }
};

const REGIONS = {
  'us': { label: 'United States', overheadMultiplier: 1.4, officeCost: 12000 },
  'uk': { label: 'United Kingdom', overheadMultiplier: 1.35, officeCost: 10000 },
  'eu': { label: 'European Union', overheadMultiplier: 1.45, officeCost: 11000 },
  'canada': { label: 'Canada', overheadMultiplier: 1.35, officeCost: 9000 },
  'australia': { label: 'Australia', overheadMultiplier: 1.4, officeCost: 11000 },
  'india': { label: 'India', overheadMultiplier: 1.25, officeCost: 3000 },
  'other': { label: 'Other', overheadMultiplier: 1.3, officeCost: 8000 }
};

const COMPLEXITY_LEVELS = {
  'high': { label: 'High complexity (many exceptions, human judgment)', modifier: -10 },
  'medium': { label: 'Medium complexity (some exceptions)', modifier: 0 },
  'low': { label: 'Low complexity (mostly standardized)', modifier: 5 },
  'very-low': { label: 'Very low complexity (highly repetitive)', modifier: 10 }
};

const STANDARDIZATION_LEVELS = {
  'fully': { label: 'Fully Standardized', modifier: 10 },
  'mostly': { label: 'Mostly Standardized', modifier: 5 },
  'mixed': { label: 'Mixed', modifier: 0 },
  'custom': { label: 'Mostly Custom', modifier: -10 }
};

const PRICING_PLANS = {
  'small': { name: 'Digital Employees', setupFee: 5500, monthlyPrice: 1997, maxStaff: 5 },
  'medium': { name: 'Digital Team', setupFee: 10000, monthlyPrice: 2997, maxStaff: 15 },
  'enterprise': { name: 'SYNTHOS Enterprise', setupFee: 25000, monthlyPrice: 5000 }
};

const AnimatedNumber = ({ value, prefix = '', suffix = '', duration = 1500 }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const previousValue = useRef(0);
  const animationFrame = useRef(0);
  const startTime = useRef(0);

  useEffect(() => {
    previousValue.current = displayValue;
    startTime.current = Date.now();

    const animate = () => {
      const now = Date.now();
      const progress = Math.min(1, (now - startTime.current) / duration);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      const currentValue = previousValue.current + (value - previousValue.current) * easeOutQuart;
      setDisplayValue(currentValue);

      if (progress < 1) {
        animationFrame.current = requestAnimationFrame(animate);
      }
    };

    animationFrame.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame.current);
    };
  }, [value, duration]);

  return (
    <span>
      {prefix}{Math.round(displayValue).toLocaleString()}{suffix}
    </span>
  );
};

const Select = ({ label, value, onChange, options }) => (
  <div className="space-y-2 group">
    <label className="text-[#928466] text-sm tracking-wider flex items-center gap-2">
      {label}
    </label>
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        className="w-full bg-black/60 border border-[#928466]/30 rounded-lg px-4 py-3 text-white/80 
                 focus:border-[#928466] focus:outline-none transition-all duration-300
                 hover:border-[#928466]/60 appearance-none backdrop-blur-xl text-sm
                 group-hover:bg-[#928466]/10"
      >
        {Object.entries(options).map(([key, { label }]) => (
          <option key={key} value={key}>{label}</option>
        ))}
      </select>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-4 h-4 rounded-full bg-[#928466]/10 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-[#928466]/60 group-hover:bg-[#928466] transition-colors duration-300" />
        </div>
      </div>
    </div>
  </div>
);

const NumberInput = ({ label, value, onChange, prefix, error }) => (
  <div className="space-y-2 group">
    <label className="text-[#928466] text-sm tracking-wider">
      {label}
    </label>
    <div className="relative">
      {prefix && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#928466] font-light">
          {prefix}
        </div>
      )}
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e)}
        className={`
          w-full bg-black/60 border rounded-lg py-3
          text-white/80 focus:outline-none 
          transition-all duration-300 backdrop-blur-xl text-sm
          group-hover:bg-[#928466]/10
          ${prefix ? 'pl-8 pr-4' : 'px-4'}
          ${error 
            ? 'border-red-500/50 hover:border-red-500/70 focus:border-red-500' 
            : 'border-[#928466]/30 hover:border-[#928466]/60 focus:border-[#928466]'
          }
        `}
        placeholder="Enter value"
      />
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
        <div className={`w-4 h-4 rounded-full ${error ? 'bg-red-500/10' : 'bg-[#928466]/10'} flex items-center justify-center`}>
          <div className={`w-2 h-2 rounded-full ${
            error 
              ? 'bg-red-500/60 group-hover:bg-red-500' 
              : 'bg-[#928466]/60 group-hover:bg-[#928466]'
          } transition-colors duration-300`} />
        </div>
      </div>
      {error && (
        <div className="absolute -bottom-5 left-0 text-xs text-red-500">
          {error}
        </div>
      )}
    </div>
  </div>
);

const ResultCard = ({ label, value, subtext, prefix = '', suffix = '' }) => (
  <div className="group p-2">
    <div className="relative overflow-hidden rounded-lg">
      <div className="absolute inset-0 bg-[#928466]/5 blur-xl transform group-hover:scale-110 transition-transform duration-500" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#928466]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative bg-black/60 border border-[#928466]/20 rounded-lg p-4 md:p-6 backdrop-blur-xl
                    hover:border-[#928466] transition-all duration-500 hover:scale-[1.02] text-center">
        <div className="text-xs md:text-sm text-white/40 mb-2 uppercase tracking-wider">{label}</div>
        <div className="text-2xl md:text-3xl text-white mb-2 font-light tracking-wider">
          <AnimatedNumber value={value} prefix={prefix} suffix={suffix} />
        </div>
        {subtext && (
          <div className="text-xs text-[#928466] opacity-60 group-hover:opacity-100 transition-opacity duration-300">
            {subtext}
          </div>
        )}
      </div>
    </div>
  </div>
);

export default function ROICalculator() {
  const [workflowType, setWorkflowType] = useState('customer-support');
  const [staffCount, setStaffCount] = useState('5');
  const [salary, setSalary] = useState('50000');
  const [region, setRegion] = useState('us');
  const [complexity, setComplexity] = useState('medium');
  const [standardization, setStandardization] = useState('mixed');

  const [touchedFields, setTouchedFields] = useState({
    staffCount: false,
    salary: false
  });

  const [errors, setErrors] = useState({
    staffCount: '',
    salary: ''
  });

  const [results, setResults] = useState({
    automationPercent: 0,
    annualSavings: 0,
    hoursSaved: 0,
    roi: 0,
    recommendedPlan: ''
  });

  useEffect(() => {
    const newErrors = {
      staffCount: touchedFields.staffCount && !staffCount ? 'Please enter number of employees' : '',
      salary: touchedFields.salary && !salary ? 'Please enter average salary' : ''
    };
    setErrors(newErrors);

    if (staffCount && salary) {
      let baseAutomation = WORKFLOW_TYPES[workflowType].baseAutomation;
      baseAutomation += COMPLEXITY_LEVELS[complexity].modifier;
      baseAutomation += STANDARDIZATION_LEVELS[standardization].modifier;
      const automationPercent = Math.min(98, Math.max(0, baseAutomation));

      const { overheadMultiplier, officeCost } = REGIONS[region];
      const staffCountNum = parseInt(staffCount);
      const salaryNum = parseInt(salary);
      const totalCostPerEmployee = (salaryNum * overheadMultiplier) + officeCost;
      const annualSavings = totalCostPerEmployee * staffCountNum * (automationPercent / 100);
      const hoursSaved = 2080 * staffCountNum * (automationPercent / 100);

      let plan;
      if (staffCountNum <= 5) plan = PRICING_PLANS.small;
      else if (staffCountNum <= 15) plan = PRICING_PLANS.medium;
      else plan = PRICING_PLANS.enterprise;

      const annualCost = plan.setupFee + (plan.monthlyPrice * 12);
      const roi = (annualSavings / annualCost) * 100;

      setResults({
        automationPercent,
        annualSavings,
        hoursSaved,
        roi,
        recommendedPlan: plan.name
      });
    }
  }, [workflowType, staffCount, salary, region, complexity, standardization, touchedFields]);

  const handleStaffCountChange = (e) => {
    const value = e.target.value;
    setStaffCount(value);
    setTouchedFields(prev => ({ ...prev, staffCount: true }));
  };

  const handleSalaryChange = (e) => {
    const value = e.target.value;
    setSalary(value);
    setTouchedFields(prev => ({ ...prev, salary: true }));
  };

  return (
    <div className="relative space-y-8 md:space-y-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(146,132,102,0.1),transparent_70%)]" />

      <div className="relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-thin tracking-[0.3em] text-white mb-4">
            ROI
          </h2>
          <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-[#928466] to-transparent mb-4" />
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Calculate Your Business Transformation Potential
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-black/40 border border-[#928466]/30 rounded-xl overflow-hidden backdrop-blur-xl">
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#928466]/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#928466]/10 blur-3xl" />

            <div className="relative p-6 md:p-8 space-y-8">
              <div className="text-center">
                <h3 className="text-xl text-white tracking-[0.2em] uppercase">
                  BUSINESS PROFILE
                </h3>
                <div className="w-16 h-px mx-auto bg-[#928466]/30 mt-2" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Select
                  label="Workflow Type"
                  value={workflowType}
                  onChange={(e) => setWorkflowType(e.target.value)}
                  options={WORKFLOW_TYPES}
                />
                
                <Select
                  label="Region"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  options={REGIONS}
                />
                
                <NumberInput
                  label="Number of Employees"
                  value={staffCount}
                  onChange={handleStaffCountChange}
                  error={errors.staffCount}
                />
                
                <NumberInput
                  label="Average Annual Salary"
                  value={salary}
                  onChange={handleSalaryChange}
                  prefix="$"
                  error={errors.salary}
                />
                
                <Select
                  label="Process Complexity"
                  value={complexity}
                  onChange={(e) => setComplexity(e.target.value)}
                  options={COMPLEXITY_LEVELS}
                />
                
                <Select
                  label="Task Standardization"
                  value={standardization}
                  onChange={(e) => setStandardization(e.target.value)}
                  options={STANDARDIZATION_LEVELS}
                />
              </div>
            </div>

            <div className="relative border-t border-[#928466]/20 bg-black/60 p-6 md:p-8">
              <div className="text-center mb-8">
                <h3 className="text-xl text-white tracking-[0.2em] uppercase">
                  AUTOMATION IMPACT
                </h3>
                <div className="w-16 h-px mx-auto bg-[#928466]/30 mt-2" />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                <ResultCard
                  label="Workflow Automated"
                  value={results.automationPercent}
                  suffix="%"
                  subtext="Percentage of tasks that can be fully automated with AI agents"
                />
                
                <ResultCard
                  label="Annual Savings"
                  value={results.annualSavings}
                  prefix="$"
                  subtext="Total cost reduction including salaries, benefits, office space, equipment, and overhead expenses"
                />
                
                <ResultCard
                  label="Hours Reclaimed"
                  value={results.hoursSaved}
                  subtext="Productive hours freed up annually for strategic tasks and innovation"
                />
                
                <ResultCard
                  label="First Year ROI"
                  value={results.roi}
                  suffix="%"
                  subtext="Return on investment considering implementation costs and total savings"
                />
              </div>

              <div className="pt-6 border-t border-[#928466]/20">
                <div className="text-center transform hover:scale-105 transition-transform duration-500">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#928466]/10 rounded-full mb-4">
                    <Zap size={16} className="text-[#928466]" />
                    <span className="text-sm text-[#928466]">Recommended Plan</span>
                  </div>
                  <p className="text-3xl text-white font-light tracking-wider mb-2">{results.recommendedPlan}</p>
                  <div className="text-sm text-white/60">
                    Optimized for your business scale and requirements
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-6">
            <p className="text-[#928466]/60 text-xs italic tracking-wide">
              These projections are preliminary estimates based on industry averages and typical use cases. 
              For a comprehensive analysis tailored to your specific business requirements and operational context, 
              we recommend scheduling a consultation with our transformation specialists.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}