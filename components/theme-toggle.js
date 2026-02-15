// Theme Toggle Component for Next.js
// Author: zhddoge-ai

'use client';

import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    const prefersDark = typeof window !== 'undefined' && window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)').matches : false;
    setIsDark(saved === 'dark' || (!saved && prefersDark));
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (isDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="theme-toggle"
      aria-label="Toggle theme"
      style={{
        padding: '8px 16px',
        borderRadius: '6px',
        border: '1px solid #30363d',
        background: isDark ? '#161b22' : '#ffffff',
        color: isDark ? '#c9d1d9' : '#24292f',
        cursor: 'pointer',
        fontSize: '14px'
      }}
    >
      {isDark ? '🌙' : '☀️'}
    </button>
  );
}
