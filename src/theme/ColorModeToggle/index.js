import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import IconLight from '@theme/IconLight';
import IconDark from '@theme/IconDark';
import clsx from 'clsx';

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
        'colorModeToggle',       // 自定义类名，用于CSS调整顺序
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
      {isDark ? <IconDark /> : <IconLight />}
    </button>
  );
}
