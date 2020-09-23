declare const document: any;

interface AttachmentData {
  id: string;
  src: string;
  icon: string;
  title: string;
  size: string;
}

const create = (editor: any, data: AttachmentData) => {
  const icon = document.createElement('img');
  icon.setAttribute('src', data.icon);
  const display = document.createElement('a');
  display.innerText = `${data.title} (${data.size})`;
  display.setAttribute('href', data.src);
  const container = editor.dom.create('span', {
    id: `attachment_${data.id}`,
    class: 'attachment',
  });
  container.appendChild(icon);
  container.appendChild(display);
  container.contentEditable = 'false';
  return container;
};

export { create };
