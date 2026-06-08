import { visit } from 'unist-util-visit';

export default function remarkFold() {
  return (tree) => {
    visit(tree, 'containerDirective', (node) => {
      if (node.name !== 'fold') return;

      const title = node.children?.[0]?.type === 'paragraph' &&
                    node.children[0].children?.[0]?.value
                      ? node.children[0].children[0].value
                      : '';

      // 将容器替换为 fold 组件调用
      const foldNode = {
        type: 'mdxJsxFlowElement',
        name: 'fold',
        attributes: [
          {
            type: 'mdxJsxAttribute',
            name: 'title',
            value: title,
          },
        ],
        children: node.children.slice(1), // 移除标题段落
      };

      Object.assign(node, foldNode);
    });
  };
}
