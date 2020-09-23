import * as Icons from './Icons';
import * as Utils from './Utils';
import * as ErrorData from './ErrorData';
import * as ProgressData from './ProgressData';
import * as AttachmentData from './AttachmentData';

declare const document: any;

const upload = (editor: any) => {
  createFileInput((files: any) => {
    for (const file of files) {
      uploadFile(editor, file, (entityKey, elm) => {
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

const createFileInput = (fn: Function) => {
  const input = document.createElement('input');
  input.setAttribute('type', 'file');
  input.setAttribute('accept', '*/*');
  input.setAttribute('multiple', 'multiple');
  input.onchange = (e) => {
    const files = e.target.files;
    if (fn == null) {
      return;
    }
    fn(files);
  };
  input.click();
  input.remove();
};

const uploadFile = (editor: any, file: any, fn: Function) => {
  const uploadCallback = editor.getParam('attachment_upload_handler');
  const id = editor.dom.uniqueId();
  const entityKey = `attachment_${id}`;
  const size = Utils.formatSize(file.size);
  const iconName = Icons.getFileIcon(file.name);
  const iconPath = `icons/${iconName}`;
  const loadingIconPath = 'icons/loading.gif';
  const errorIconPath = 'icons/error.png';
  let elm = ProgressData.create(editor, {
    id,
    icon: loadingIconPath,
    title: file.name,
    size,
  });
  fn(entityKey, elm);
  const successCallback = (url: string) => {
    elm = AttachmentData.create(editor, {
      id,
      icon: iconPath,
      title: file.name,
      size,
      src: url,
    });
    fn(entityKey, elm);
  };
  const failureCallback = (message: string) => {
    elm = ErrorData.create(editor, {
      icon: errorIconPath,
      title: file.name,
      size,
    });
    fn(entityKey, elm);
  };
  const progressCallback = (percent: string) => {
    ProgressData.update(editor, id, percent);
  };
  uploadCallback(file, successCallback, failureCallback, progressCallback);
};

export { upload, uploadFile };
