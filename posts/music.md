---
tags: 
  - JavaScript
  - DOM
---

## 音频可视化

准备在markdown 的编译中，加入组件的编译，让最终的html 可以包含更丰富的内容，例如音频视频等。以下是一段 权力游戏的背景音乐，加上一个第三方音频可视化的库，可以呈现有趣的效果。

<!-- <my-player source="https://music.163.com/song/media/outer/url?id=38392815" /> -->

<my-player :source="[{url:'https://music.163.com/song/media/outer/url?id=569214247'},{url:'https://music.163.com/song/media/outer/url?id=38392815'},{url:'/got.mp3'}]" />

<my-circle-bar />

以下插入的是一段 iframe 内容：

<iframe src="https://alex2wong.github.io/webgl_learning/webgl7/index.html"
  style="border:none; width: 400px; height:600px; overflow:auto;
  display:flex;align-items:center;margin-top:20px"
/>
