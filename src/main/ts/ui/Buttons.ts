import * as Uploader from '../core/Uploader';
import * as Downloader from '../core/Downloader';

const setup = (editor: any) => {
  editor.ui.registry.addIcon(
    'attachment',
    '<svg width="20" height="20"><path d="M16.3 9.3a.8.8 0 00-1 0l-5.5 5.4a2.8 2.8 0 01-4.3-.4v-.1l-.2-.3-.1-.2a3 3 0 01-.2-.6V13c0-.9.2-1.7.8-2.2L11.7 5c.6-.7 1.6-.7 2.3 0a1.6 1.6 0 010 2.2L8 13a.4.4 0 01-.7-.3v-.3L12.2 8c.3-.3.3-.8 0-1a.8.8 0 00-1 0l-4.7 4.5a1.9 1.9 0 000 2.7c.8.7 2 .7 2.8 0L15 8.3a3 3 0 000-4.4 3.1 3.1 0 00-4.4 0L4.8 9.7a4.2 4.2 0 000 6 4.3 4.3 0 006 0l5.5-5.3.2-.6c0-.2 0-.4-.2-.5" fill-rule="evenodd"/></svg>'
  );
  editor.ui.registry.addButton('attachment', {
    icon: 'attachment',
    tooltip: '插入附件',
    onAction: () => Uploader.upload(editor),
  });
  editor.ui.registry.addMenuItem('attachment', {
    icon: 'attachment',
    text: '插入附件',
    onAction: () => Uploader.upload(editor),
  });
  editor.ui.registry.addButton('attachment-download', {
    text: '下载',
    onAction: () => Downloader.download(editor),
  });
  editor.ui.registry.addContextToolbar('attachment', {
    predicate: (node) => !!getAttachmentEelement(editor, node),
    items: 'attachment-download',
    position: 'node',
    scope: 'node',
  });
};

const getAttachmentEelement = (editor: any, selectedElement: any) => {
  selectedElement = selectedElement || editor.selection.getNode();
  return editor.dom.getParent(selectedElement, 'span[class="attachment"]');
};

export { setup };
