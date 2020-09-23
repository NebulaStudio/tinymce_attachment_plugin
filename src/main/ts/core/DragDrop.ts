import * as Utils from './Utils';
import * as Uploader from './Uploader';

const setup = (editor: any) => {
  editor.on('drop', (e) => {
    const dataTransfer = e.dataTransfer;
    if (dataTransfer == null) {
      return;
    }
    const files = dataTransfer.files;
    if (files == null) {
      return;
    }
    for (const file of files) {
      const isImangeFile = Utils.isImageFile(file.name);
      if (isImangeFile) {
        continue;
      }
      Uploader.uploadFile(editor, file, (entityKey, elm) => {
        const attachment = `span#${entityKey}`;
        const items = editor.dom.select(attachment);
        if (items.length > 0) {
          editor.dom.replace(elm, entityKey);
        } else {
          editor.selection.setContent(elm.outerHTML);
        }
      });
    }
  });
};

export { setup };
