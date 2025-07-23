import React, { useEffect, useState } from 'react'
const getInitialTheme = () => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  return false;
};


const useDarkModeToggle = () => {
  const [isDark, setIsDark] = useState(getInitialTheme);
    useEffect(() => {
      const root = document.documentElement;
      if (isDark) {
        root.setAttribute('data-theme','dark');
        localStorage.theme = 'dark';
      } else {
        root.removeAttribute('data-theme');
        localStorage.theme = 'light';
      }
    }, [isDark]);
    return {
        setIsDark,
        isDark
    }
}

export default useDarkModeToggle