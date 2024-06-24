import React, { useState, useEffect } from 'react';

const Toggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <label className="relative inline-block w-16 h-8">
      <input
        type="checkbox"
        className="opacity-0 w-0 h-0"
        checked={isDarkMode}
        onChange={handleToggle}
      />
      <span className="absolute bg-gray-400 dark:bg-blue-500 w-full h-full rounded-full cursor-pointer transition-colors duration-300"></span>
      <span className="absolute z-100 left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 transform dark:translate-x-8"></span>
    </label>
  );
};

export default Toggle;
