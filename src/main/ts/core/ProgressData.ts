declare const tinymce: any;
declare const document: any;

interface ProgressData {
  id: string;
  icon: string;
  title: string;
  size: string;
}

const create = (editor: any, data: ProgressData) => {
  const loading = document.createElement('img');
  loading.setAttribute('src', data.icon);
  const percent = document.createElement('span');
  percent.setAttribute('id', `progress_${data.id}`);
  percent.innerText = '0%';
  const display = document.createElement('span');
  display.innerText = `${data.title} (${data.size})`;
  const container = editor.dom.create('span', {
    id: `attachment_${data.id}`,
    class: 'attachment upload_progress',
  });
  container.appendChild(loading);
  container.appendChild(percent);
  container.appendChild(display);
  container.contentEditable = 'false';
  return container;
};

const update = (editor: any, id: string, value: string) => {
  const elm = editor.dom.select(`span#progress_${id}`);
  editor.dom.setHTML(elm, value);
};

export { create, update };
