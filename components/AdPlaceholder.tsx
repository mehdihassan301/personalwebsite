import React from 'react';

const AdPlaceholder: React.FC = () => {
  return (
    <div className="my-8 flex h-48 w-full items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-100 text-gray-500 dark:border-gray-700 dark:bg-gray-800">
      <div className="text-center">
        <p className="font-semibold">Advertisement</p>
        <p className="text-sm">Ad placeholder for monetization</p>
      </div>
    </div>
  );
};

export default AdPlaceholder;
