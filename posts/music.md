---
tags: 
  - JavaScript
  - DOM
---

## 音频可视化

准备在markdown 的编译中，加入组件的编译，让最终的html 可以包含更丰富的内容，例如音频视频等。以下是一段 权力游戏的背景音乐，加上一个第三方音频可视化的库，可以呈现有趣的效果。

<!-- <my-player source="https://music.163.com/song/media/outer/url?id=38392815" /> -->

<my-player :source="[{url:'/yzr.mp3',name:'忆中人'},{url:'/got.mp3',name:'Game of Throne'}]" />

以下插入的是一段 iframe 内容, 发现网易云的iframe 外链播放器，似乎对没有版权的条目没有任何错误提示，只是没响应。。所以以下展示的是本人平时收藏的，网易有免费版权的部分音乐，Wish you enjoy it~

<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=330 src="//music.163.com/outchain/player?type=0&id=2967353555&auto=0&height=300"></iframe>
