import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, MessageSquare, Clock } from 'lucide-react';

export default function DecisionLog() {
  const [logs] = useState([
    { type: 'success', message: 'Supply chain optimization complete', time: 'Now' },
    { type: 'info', message: 'Market analysis report generated', time: '2m ago' },
    { type: 'alert', message: 'Review needed: New market opportunity', time: '5m ago' }
  ]);

  const getIcon = (type) => {
    switch (type) {
      case 'success': return <CheckCircle2 size={16} className="text-green-500" />;
      case 'alert': return <AlertCircle size={16} className="text-[#928466]" />;
      case 'info': return <MessageSquare size={16} className="text-blue-500" />;
      default: return null;
    }
  };

  return (
    <div className="space-y-3">
      {logs.map((log, index) => (
        <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-black/20 hover:bg-black/30 transition-colors duration-300">
          {getIcon(log.type)}
          <div className="flex-1 min-w-0">
            <p className="text-sm text-white/80 truncate">{log.message}</p>
            <div className="flex items-center gap-2 mt-1">
              <Clock size={12} className="text-[#928466]/50" />
              <span className="text-xs text-[#928466]/50">{log.time}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}