# PJSK自助指北
Project Sekai 帮助文档(随缘更新)

还在更新(所以很乱 还没排 想到啥写啥中)

给新入坑的萌新们 指条路!

欢迎来群里玩! [704068376](https://qm.qq.com/cgi-bin/qm/qr?k=qkLGygmMTqu_5hj5d4NAXpCAncfB8HQc&jump_from=webapi)

![logo](http://q1.qlogo.cn/g?b=qq&nk=845064550&s=160)

## 获取

## 常用网站

查分 查收歌进度:[Project Sekai Profile (pjsekai.moe)](https://profile.pjsekai.moe/#/)

查活动 卡面 角色信息 歌曲谱面等(也可以玩Live2D):[Sekai Viewer](https://sekai.best/)

解包数据:[pjsek.ai](https://pjsek.ai/)

解包教程:

非官方Discord (要魔法的)(群里常见的leaks偷跑截图都来自这):!!!请遵守频道规则!!!

官方推特:

国内wiki:



## 数据源

晚点写()

## 萝卜们

### 彩彩萝卜

是开源的萝卜(应该是这只)

项目地址: [cc004/BandoriBot](https://github.com/cc004/BandoriBot)

### uni萝卜

官方文档: [一只多功能PJSK萝卜](https://bot.unijzlsx.com/)

### ECHO

这是echo的帮助文档(还没写(等我写出满意的echo后在写帮助文档(预计10年后(屑(套括号真好玩(诶!()))))))



## 怎么种萝卜(bushi)

怎么部署一个自己的机器人 给他人使用

这里只提供简单的思路

TIPS:需要有网络基础以及编程基础

1. 首先 需要有个自己的QQ机器人

   1. 选择机器人框架 下面列出了两个框架
      * [mirai: 高效率 QQ 机器人支持库](https://github.com/mamoe/mirai)
      * [go-cqhttp: cqhttp](https://github.com/Mrs4s/go-cqhttp)(ECHO用的这个 上手简单些)
   2. 部署上述框架到vps或者自己的电脑上也可以是手机上(go-cqhttp提供了linux_arm64的版本经过尝试可以部署到安卓手机上 mirai没有试过)
   3. 可以参考[使用go-cqhttp搭建一个简易的QQ机器人](https://blog.csdn.net/tagagi/article/details/121089116)这篇文章(如果有人愿意写个详细教程就更好了(我是懒狗)) 使用python+flask来接收处理go-cqhttp发来的消息

   至此 一个简单的QQ机器人就部署好了

2. 如何获取PJSK相关的数据

   1. 这里简单的对pjsk日服客户端进行了抓包(截图是登陆流程的)
      
      ![image-20220524100127508](https://s2.loli.net/2022/05/24/bQvoWAOB9CqzMsI.png)
   
   2. 进入游戏内活动排行页面 可以在抓包软件中看到对应请求 但是被加密了
   
      ​	(你问我图图呢,忘备份没了!上面这张图还是云盘里找到的(有空补上))
   
   3. 加解密方式可以参考[PackHelper.cs](https://github.com/cc004/BandoriBot/blob/master/SekaiClient/PackHelper.cs)彩彩萝卜的(看 这才是真大佬!)
   
      * AES加密模式为CBC
      * 填充采用PKCS7
      * 密码(key)以及偏移量(iv)参考代码17和18行
   
   4. 之后就可以愉快的写客户端与服务器通信了(使用token鉴权)
   
   5. 如果觉得上面那些比较麻烦 可以参考[projectSekai: 一个简单的PJSK插件](https://github.com/xhl6666/projectSekai)这个项目 是一个用python写的简易客户端
   
3. 如果上面的数据获取方式比较麻烦也可以试试从数据源获取

