# 基于 tinymce 的附件上传插件

### 插件特点

1. 简单，没有那么多花里胡哨的 UI
2. 支持上传的进度
3. 支持拖拽上传，不影响原图片插件的拖拽

### 如何使用

使用此插件，需要关注 3 个参数配置

1. attachment_max_size: 可选参数，单个文件上传最大限制，单位 byte，默认 200 M

示例： 限制上传大小为 100M

```
tinymce.init({
    attachment_max_size: 100 * 1024 * 1024
});
```

2. attachment_assets_path: 静态资源的路径，用于文件 icon 以及上传等待动画，上传错误的信息提示图标。PS: 静态资源位于项目的 /assets/icons 下。

示例:

```
tinymce.init({
    attachment_assets_path: 'assets/icons/'
});
```

3. attachment_upload_handler: 上传的回调函数。

| 参数名           | 类型     | 说明                                       |
| ---------------- | -------- | ------------------------------------------ |
| file             | object   | 上传的文件对象                             |
| successCallback  | Function | 上传成功的回调函数, 参数为该文件下载地址。 |
| failureCallback  | Function | 上传失败的回调函数，参数为错误信息。       |
| progressCallback | Function | 上传进度回调函数，参数为进度的百分比。     |

以使用 axios 为例：

```
const axios = require('axios');
tinymce.init({
    attachment_upload_handler: upload(file, successCallback, failureCallback, progressCallback) {
        axios.post('/upload_hander', {
            data: file,
            onUploadProgress: function(e) {
                const progress = (e.loaded / e.total * 100 | 0) + '%';
                progressCallback(progress);
            }
        }).then((response) => {
            successCallback(response.data.url);
        }).catch((error) => {
            failureCallback(`上传失败:${error.message}`)
        });
    }
});
```

### 已知 BUG

选择文件上传后，会往编辑区插入一段不可编辑的文本。

```
contenteditable = 'false'
```

此时按 Backspace 可能会出现不能删除或者光标跳到首行的情况，
该问题是编辑器的 BUG，与本插件无关。

https://github.com/tinymce/tinymce/issues/3559

https://github.com/tinymce/tinymce/issues/5039

https://github.com/tinymce/tinymce/issues/5679

# License

MIT
