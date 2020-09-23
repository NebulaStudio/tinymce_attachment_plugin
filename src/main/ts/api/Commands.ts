import * as Uploader from '../core/Uploader';

const register = (editor: any) => {
  editor.addCommand('mceAttachment', () => {
    Uploader.upload(editor);
  });
};

export { register };
