import React from 'react';
import AIStrategyForm from './AIStrategyForm';

const TuningForm: React.FC = () => {
  return (
    <AIStrategyForm
      title="Tune Your Models"
      subtitle="Optimize your AI models for peak performance. Get personalized tuning recommendations for your specific use case."
      description="Click 'START' to begin your model optimization journey."
    />
  );
};

export default TuningForm;
