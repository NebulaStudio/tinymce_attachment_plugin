declare const window: any;
declare const document: any;

const getHref = (editor: any): string => {
  const elm = editor.selection.getNode();
  for (const item of elm.children) {
    if (item.hasAttribute('href')) {
      const href = item.getAttribute('href');
      return href;
    }
  }
  return '#';
};

const appendClickRemove = (link, evt) => {
  document.body.appendChild(link);
  link.dispatchEvent(evt);
  document.body.removeChild(link);
};

const openUri = (url: string) => {
  const link = document.createElement('a');
  link.target = '_blank';
  link.href = url;
  link.rel = 'noreferrer noopener';
  const evt = document.createEvent('MouseEvents');
  evt.initMouseEvent(
    'click',
    true,
    true,
    window,
    0,
    0,
    0,
    0,
    0,
    false,
    false,
    false,
    false,
    0,
    null
  );
  appendClickRemove(link, evt);
};

const download = (editor: any) => {
  const url = getHref(editor);
  openUri(url);
};

export { download };
