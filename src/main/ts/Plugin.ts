import * as Buttons from './ui/Buttons';
import * as Commands from './api/Commands';
import * as DragDrop from './core/DragDrop';

declare const tinymce: any;
export default () => {
  tinymce.PluginManager.add('attachment', (editor, url) => {
    Buttons.setup(editor);
    Commands.register(editor);
    DragDrop.setup(editor);
  });
};
