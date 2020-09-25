declare const document: any;

interface ErrorData {
  icon: string;
  title: string;
  size: string;
  message: string;
}

const create = (editor: any, data: ErrorData) => {
  const icon = document.createElement('img');
  icon.setAttribute('src', data.icon);
  const display = document.createElement('span');
  display.innerText = `${data.message} - ${data.title} (${data.size})`;
  const container = editor.dom.create('span', {
    class: 'attachment upload_error',
  });
  container.appendChild(icon);
  container.appendChild(display);
  container.contentEditable = 'false';
  return container;
};

export { create };
