import React from 'react';

const FrameWrapper = ({ children }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 hover:shadow-xl transition transform hover:scale-105 overflow-hidden">
      {children}
    </div>
  );
};

export default FrameWrapper;
