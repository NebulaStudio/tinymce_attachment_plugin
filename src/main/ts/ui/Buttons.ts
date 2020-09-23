import * as Uploader from '../core/Uploader';
import * as Downloader from '../core/Downloader';

const setup = (editor: any) => {
  editor.ui.registry.addButton('attachment', {
    icon: 'browse',
    tooltip: '插入附件',
    onAction: () => Uploader.upload(editor),
  });
  editor.ui.registry.addMenuItem('attachment', {
    icon: 'browse',
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
