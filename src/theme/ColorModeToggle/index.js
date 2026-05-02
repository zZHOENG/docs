import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

// 对称太阳图标
function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <circle
        cx="12"
        cy="12"
        r="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        fill="currentColor"
        d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// 对称月牙图标
function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path
        fill="currentColor"
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
      />
    </svg>
  );
}

export default function ColorModeToggle() {
  const { colorMode, setColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const toggleColorMode = () => {
    setColorMode(isDark ? 'light' : 'dark');
  };

  return (
    <button
      className="clean-btn colorModeToggle"
      onClick={toggleColorMode}
      type="button"
      aria-label={
        isDark
          ? '切换为浅色模式（当前为暗黑模式）'
          : '切换为暗黑模式（当前为浅色模式）'
      }
      title={
        isDark
          ? '切换为浅色模式（当前为暗黑模式）'
          : '切换为暗黑模式（当前为浅色模式）'
      }
    >
      {isDark ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
