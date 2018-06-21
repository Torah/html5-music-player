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


因为本人是一位日语学习者，目前使用过百度/酷狗/酷我等app和千千静听播放器，以及Listen1播放器，在日语标音方面它们都不让人满意。所以自己动手改造一下。
Listen1是一个很好的java音乐爬虫展示工具，基于chrome插件，强于获取链接方面。最近又被百度打压。
千千静听已被百度收购，但是它的lrc管理方面比较优秀，可以用来获取lrc文件，只是因为来源于百度，许多新歌的歌词更新严重滞后。另外因为被收购后疏于更新吧，连接网络云盘也不方便。
百度/酷狗/酷我长得都很像，以云盘为中介，长于app和pc间歌单共享，但是显示的细节还做的不让人满意。另外就是广告多，不适合长期作为一款佛系的工具。