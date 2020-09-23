const isImageFile = (name: string) => {
  const index = name.lastIndexOf('.');
  if (index === -1) {
    return false;
  }
  const ext = name.substr(index);
  return /.(gif|jpe?g|png)$/.test(ext);
};

const formatSize = (bytes: number, decimals: number = 2) => {
  if (bytes === 0) {
    return '0 B';
  }
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['B', 'K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

export { isImageFile, formatSize };
