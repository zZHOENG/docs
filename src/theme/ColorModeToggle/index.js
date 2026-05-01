import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import clsx from 'clsx';

// 内置 SVG 图标，与 Docusaurus 默认图标视觉效果一致
function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.5 5.875l1.5-1.5 2.125 2.125-1.5 1.5L3.5 5.875zm13.75 0l2.125 2.125-1.5 1.5-2.125-2.125 1.5-1.5zM1 11h3v2H1v-2zm19 0h3v2h-3v-2zm-1.875 6.875l1.5-1.5 2.125 2.125-1.5 1.5-2.125-2.125zM5.875 20.375l2.125-2.125 1.5 1.5-2.125 2.125-1.5-1.5z" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M9.37 5.51c-.55.07-1.09.2-1.61.39a9 9 0 0010.35 10.35 7 7 0 01-8.74-10.74zM12 2a10 10 0 100 20 10 10 0 000-20z" />
    </svg>
  );
}

export default function ColorModeToggle(props) {
  const { colorMode, setColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const toggleColorMode = () => {
    setColorMode(isDark ? 'light' : 'dark');
  };

  return (
    <button
      className={clsx(
        'clean-btn',
        'navbar__item',
        'colorModeToggle',       // 自定义类名，用于 CSS 调整顺序
        props.className,
      )}
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
