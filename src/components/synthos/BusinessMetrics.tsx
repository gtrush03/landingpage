import React, { useState, useEffect } from 'react';
import { LineChart, Activity, TrendingUp, BarChart3 } from 'lucide-react';

export default function BusinessMetrics() {
  const [metrics, setMetrics] = useState([
    { 
      label: "Revenue", 
      value: "$1.2M", 
      change: "+15%", 
      trend: [45, 52, 49, 55, 58, 53, 57],
      icon: LineChart,
      color: "#10B981" // green
    },
    { 
      label: "Users", 
      value: "45.8K", 
      change: "+8%", 
      trend: [32, 35, 34, 38, 37, 40, 41],
      icon: Activity,
      color: "#3B82F6" // blue
    },
    { 
      label: "Efficiency", 
      value: "92%", 
      change: "+5%", 
      trend: [88, 89, 90, 89, 91, 92, 92],
      icon: TrendingUp,
      color: "#928466" // gold
    },
    { 
      label: "Operations", 
      value: "2.4K", 
      change: "+12%", 
      trend: [28, 32, 30, 35, 34, 38, 40],
      icon: BarChart3,
      color: "#8B5CF6" // purple
    }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => prev.map(metric => {
        const newValue = parseFloat(metric.change) + (Math.random() * 2 - 1);
        const newTrend = [...metric.trend.slice(1), metric.trend[6] + (Math.random() * 4 - 2)];
        return {
          ...metric,
          change: `${newValue > 0 ? '+' : ''}${newValue.toFixed(1)}%`,
          trend: newTrend
        };
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const Sparkline = ({ data, color }) => {
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min;
    const points = data
      .map((value, i) => `${(i * 100) / (data.length - 1)},${100 - ((value - min) * 100) / range}`)
      .join(' ');

    return (
      <svg className="w-16 h-8" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polyline
          points={points}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-50"
        />
      </svg>
    );
  };

  return (
    <div className="space-y-6">
      <div className="bg-[#928466]/5 p-4 rounded-lg border-l-2 border-[#928466]/30">
        <p className="text-white/70 text-sm leading-relaxed">
          <span className="text-[#928466] font-medium">Advanced AI-powered analytics</span> provide real-time insights 
          into your business performance. Our autonomous agents continuously monitor and optimize key 
          performance indicators across all operational domains.
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="p-4 border border-[#928466]/20 rounded-lg bg-black/20 backdrop-blur-sm hover:border-[#928466]/30 transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <Icon size={16} style={{ color: metric.color }} />
                <span className="text-[#928466]/60 text-xs">{metric.label}</span>
              </div>
              <div className="text-lg font-light tracking-wider mb-2">{metric.value}</div>
              <div className="flex items-center justify-between">
                <span className={`text-xs ${parseFloat(metric.change) >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {metric.change}
                </span>
                <Sparkline data={metric.trend} color={metric.color} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}