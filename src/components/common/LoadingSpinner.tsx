import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative h-12 w-12">
        <div className="absolute h-12 w-12 rounded-full border-4 border-gray-200"></div>
        <div className="border-primary absolute h-12 w-12 animate-spin rounded-full border-4 border-t-transparent"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
