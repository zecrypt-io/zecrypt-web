import React from 'react';

const Loader = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-labelBg bg-opacity-60 backdrop-blur z-50"
    >
      <div className="loader-container">
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default Loader;
