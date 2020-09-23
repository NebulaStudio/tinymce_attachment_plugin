const getFileIcon = (name) => {
  const exts = [
    {
      ext: 'txt',
      icon: 'file_type_text',
    },
    {
      ext: 'doc',
      icon: 'file_type_word2',
    },
    {
      ext: 'docx',
      icon: 'file_type_word2',
    },
    {
      ext: 'pdf',
      icon: 'file_type_pdf2',
    },
    {
      ext: 'xls',
      icon: 'file_type_excel2',
    },
    {
      ext: 'xlsx',
      icon: 'file_type_excel2',
    },
    {
      ext: 'ppt',
      icon: 'file_type_powerpoint2',
    },
    {
      ext: 'pptx',
      icon: 'file_type_powerpoint2',
    },
    {
      ext: 'ai',
      icon: 'file_type_ai2',
    },
    {
      ext: 'psd',
      icon: 'file_type_photoshop2',
    },
    {
      ext: 'zip',
      icon: 'file_type_zip',
    },
    {
      ext: 'rar',
      icon: 'file_type_zip',
    },
    {
      ext: 'jpg',
      icon: 'file_type_image',
    },
    {
      ext: 'jpeg',
      icon: 'file_type_image',
    },
    {
      ext: 'png',
      icon: 'file_type_image',
    },
    {
      ext: 'gif',
      icon: 'file_type_image',
    },
    {
      ext: 'js',
      icon: 'file_type_js',
    },
    {
      ext: 'xml',
      icon: 'file_type_xml',
    },
    {
      ext: 'htm',
      icon: 'file_type_html',
    },
    {
      ext: 'html',
      icon: 'file_type_html',
    },
    {
      ext: 'json',
      icon: 'file_type_light_json',
    },
    {
      ext: 'fon',
      icon: 'file_type_light_font',
    },
    {
      ext: 'font',
      icon: 'file_type_light_font',
    },
    {
      ext: 'svg',
      icon: 'file_type_image',
    },
    {
      ext: 'exe',
      icon: 'file_type_binary',
    },
    {
      ext: 'bin',
      icon: 'file_type_binary',
    },
    {
      ext: 'dll',
      icon: 'file_type_binary',
    },
    {
      ext: 'pkg',
      icon: 'file_type_package',
    },
    {
      ext: 'wav',
      icon: 'file_type_audio',
    },
    {
      ext: 'mp3',
      icon: 'file_type_audio',
    },
    {
      ext: 'mp4',
      icon: 'file_type_video',
    },
    {
      ext: 'mov',
      icon: 'file_type_video',
    },
    {
      ext: 'avi',
      icon: 'file_type_video',
    },
    {
      ext: 'java',
      icon: 'file_type_java',
    },
    {
      ext: 'cs',
      icon: 'file_type_csharp',
    },
    {
      ext: 'css',
      icon: 'file_type_css',
    },
    {
      ext: 'py',
      icon: 'file_type_python',
    },
    {
      ext: 'sln',
      icon: 'file_type_vscode3',
    },
    {
      ext: 'go',
      icon: 'file_type_go',
    },
    {
      ext: '7z',
      icon: 'file_type_zip',
    },
    {
      ext: 'sketch',
      icon: 'file_type_sketch',
    },
    {
      ext: 'patch',
      icon: 'file_type_patch',
    },
    {
      ext: 'org',
      icon: 'file_type_org',
    },
    {
      ext: 'md',
      icon: 'file_type_markdown',
    },
    {
      ext: 'jar',
      icon: 'file_type_jar',
    },
    {
      ext: 'dmg',
      icon: 'file_type_dmg',
    },
    {
      ext: 'accdb',
      icon: 'file_type_access',
    },
    {
      ext: 'apk',
      icon: 'file_type_apk',
    },
    {
      ext: 'eps',
      icon: 'file_type_eps',
    },
    {
      ext: 'ico',
      icon: 'file_type_ico',
    },
    {
      ext: 'iso',
      icon: 'file_type_iso',
    },
    {
      ext: 'key',
      icon: 'file_type_keynote',
    },
    {
      ext: 'numbers',
      icon: 'file_type_number',
    },
    {
      ext: 'reg',
      icon: 'file_type_reg',
    },
    {
      ext: 'rp',
      icon: 'file_type_rp',
    },
    {
      ext: 'rtf',
      icon: 'file_type_rtf',
    },
    {
      ext: 'sketch',
      icon: 'file_type_sketch',
    },
    {
      ext: 'swf',
      icon: 'file_type_swf',
    },
    {
      ext: 'url',
      icon: 'file_type_url',
    },
    {
      ext: 'wma',
      icon: 'file_type_wma',
    },
    {
      ext: 'xmind',
      icon: 'file_type_xmind',
    },
    {
      ext: 'cat',
      icon: 'file_type_cat',
    },
  ];
  if (name) {
    const index = name.lastIndexOf('.');
    if (index === -1) {
      return 'default_file.svg';
    }
    const ext = name.substr(index + 1).toLowerCase();
    for (const item of exts) {
      if (item.ext !== ext) {
        continue;
      }
      return `${item.icon}.svg`;
    }
  }
  return 'default_file.svg';
};
export { getFileIcon };
