import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';

export default {
  // 保留默认的 MDX 组件
  ...MDXComponents,
  // 自定义 fold 组件
  fold: ({ children, title }) => (
    <details className="fold-container">
      <summary>{title}</summary>
      <div className="fold-content">{children}</div>
    </details>
  ),
};
