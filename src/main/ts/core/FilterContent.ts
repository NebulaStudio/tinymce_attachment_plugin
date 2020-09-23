const isAttachmentElement = (node: any) => {
  if (node.parent) {
    return hasAttachmentClass(node.parent);
  }
  return false;
};

const hasAttachmentClass = (node: any) => {
  const className = node.attr('class');
  return className && /\battachment\b/.test(className);
};

const toogleParserStatus = (nodes: any) => {
  for (const node of nodes) {
    const isAttachment = isAttachmentElement(node);
    if (isAttachment) {
      node.parent.remove();
    }
  }
};

const setup = (editor: any) => {
  editor.on('PreInit', () => {
    editor.parser.addAttributeFilter('href', toogleParserStatus);
  });
};

export { setup };
