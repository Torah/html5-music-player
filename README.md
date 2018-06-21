html5-music-player
==================

[在线演示DEMO](http://tivonjj.github.io/html5-music-player/)

> 只实现了移动端touch事件，请使用移动端或chrome打开调试器模拟移动设备，界面左右滑动切换列表、歌词、封面界面

html5 music player demo

HTML5 音乐播放器演示应用，

- 在线歌曲列表
- 歌词滚动显示
- 封面旋转显示
- 曲目控制
- 进度条拖动



项目来自https://github.com/TivonJJ/html5-music-player(缺少zepto.js文件)，
针对Listen1等平台的音乐播放器不能显示日语注音的歌词，做了ruby标签的改进。
以html为基础，还可以通过HBuilder打包成app。改进主要包括： 
1、在lrc文件中添加ruby标签，html的歌词播放能显示日语注音。(已完成) 
2、python文件遍历目录，生成music.json索引。（已完成） 
3、js文件通过music.json实现音乐单曲的分类排序。（未完成）
4、适应app端的播放列表。（未完成）
5、apk文件通过HBuilder生成。