import React, { useState, useEffect } from 'react';
import { Users, Target, TrendingUp, Clock, DollarSign, MessageSquare } from 'lucide-react';
import { Frame } from './common';
import ROICalculator from './ROICalculator';

// Metric Card Component
const MetricCard = ({ metric, isIncreasing }) => (
  <div className="relative bg-black/60 backdrop-blur-xl rounded-lg border border-[#928466]/20 hover:border-[#928466]/40 transition-all duration-300 p-6">
    {/* Header */}
    <div className="flex items-center justify-between mb-4">
      <div className="w-10 h-10 rounded-lg bg-[#928466]/10 flex items-center justify-center">
        <metric.icon size={20} className="text-[#928466]" />
      </div>
      <div className={`flex items-center gap-1 text-sm ${
        isIncreasing ? 'text-emerald-500' : 'text-rose-500'
      }`}>
        <div className={`transform transition-transform ${
          isIncreasing ? 'rotate-0' : 'rotate-180'
        }`}>
          ▲
        </div>
        <span>{Math.abs(metric.change).toFixed(1)}%</span>
      </div>
    </div>

    {/* Value with Animation */}
    <div className="mb-2">
      <div className="text-2xl text-white font-light tracking-wider">
        {metric.prefix}{metric.value.toLocaleString()}{metric.suffix}
      </div>
    </div>

    {/* Label */}
    <div className="flex items-center justify-between">
      <span className="text-sm text-white/60">{metric.label}</span>
      <span className="text-xs text-white/40">{metric.period}</span>
    </div>

    {/* Progress Bar */}
    <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden rounded-b-lg">
      <div 
        className="h-full transition-all duration-500"
        style={{ 
          width: `${metric.progress}%`,
          background: `linear-gradient(to right, ${metric.color}40, ${metric.color})`
        }}
      />
    </div>
  </div>
);

export default function Examples() {
  const [metrics, setMetrics] = useState([
    {
      icon: Users,
      label: "Active Leads",
      value: 2847,
      change: 12.5,
      period: "This Month",
      prefix: "",
      suffix: "",
      progress: 85,
      color: '#10B981', // emerald
      target: 3000
    },
    {
      icon: Target,
      label: "Conversion Rate",
      value: 28.4,
      change: 5.2,
      period: "vs Last Month",
      prefix: "",
      suffix: "%",
      progress: 75,
      color: '#3B82F6', // blue
      target: 35
    },
    {
      icon: DollarSign,
      label: "Revenue Generated",
      value: 156420,
      change: 15.8,
      period: "This Quarter",
      prefix: "$",
      suffix: "",
      progress: 92,
      color: '#8B5CF6', // purple
      target: 180000
    },
    {
      icon: MessageSquare,
      label: "Response Rate",
      value: 94.8,
      change: -2.3,
      period: "Last 7 Days",
      prefix: "",
      suffix: "%",
      progress: 88,
      color: '#EC4899', // pink
      target: 98
    }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => prev.map(metric => {
        // Calculate new value with smooth transitions
        const variance = Math.random() * 0.02 - 0.01; // ±1%
        const newValue = metric.value * (1 + variance);
        const newChange = metric.change + (Math.random() * 2 - 1);
        
        return {
          ...metric,
          value: Number(newValue.toFixed(metric.suffix === '%' ? 1 : 0)),
          change: Number(newChange.toFixed(1)),
          progress: Math.min(100, Math.max(0, metric.progress + (Math.random() * 4 - 2)))
        };
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-4 md:px-6" id="examples">
      <div className="max-w-6xl mx-auto">
        <Frame title="BUSINESS IMPACT">
          <div className="text-center mb-12">
            <h3 className="text-2xl text-[#928466] tracking-wider mb-4">
              Real-Time Performance Metrics
            </h3>
            <p className="text-white/60 max-w-2xl mx-auto">
              Monitor your business transformation with our advanced analytics dashboard. 
              Watch as our AI agents drive growth across all key performance indicators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <MetricCard 
                key={index}
                metric={metric}
                isIncreasing={metric.change > 0}
              />
            ))}
          </div>

          {/* ROI Calculator */}
          <div className="mt-16">
            <ROICalculator />
          </div>
        </Frame>
      </div>
    </div>
  );
}