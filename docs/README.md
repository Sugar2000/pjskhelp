# PJSK自助指北
Project Sekai 帮助文档(随缘更新)

还在更新中 所以比较乱 还没排满 想到啥写啥中()

本文档主要是给新入坑的萌新们 指条路 以及 ECHO 的使用指南

欢迎来群里玩! [704068376](https://qm.qq.com/cgi-bin/qm/qr?k=qkLGygmMTqu_5hj5d4NAXpCAncfB8HQc&jump_from=webapi)(答案是pjsk)

如果想把 ECHO 拉到别的群,请先加上面那个群,然后加 ECHO 好友即可拉群

![logo](http://q1.qlogo.cn/g?b=qq&nk=845064550&s=160)



## ECHO帮助

### PJSK命令

| 命令          | 备注                                                         |
| ------------- | ------------------------------------------------------------ |
| bind `游戏ID` | 绑定账号 游戏ID可以从游戏内个人资料页获取<br />例如bind 12345678987654 |
| echo          | 查询分数排名                                                 |
| rank `排名`   | 获取指定排名的分数<br />例如rank 100                         |
| target `排名` | 设置追赶排名<br />例如target 1000<br />追赶排名1000 设置完毕后使用echo会返回你的分数和目标的分数<br />并计算差距 以及分数上升速度 |
| 世界线        | 查询结活时各个分段的预期分数线 \| 中文命令                   |
| 收歌进度      | 查看当前绑定账号的歌曲完成情况(FC,AP数量) \| 中文命令        |
| ycm           | 获取群友发的车<br />如何发送车牌号?<br />直接发送`5位数字车牌` 或者 `5位车牌`+q+缺的人数+`备注(可选)`<br />例如 12345 或者 12345q2 花园 随后会被录入 |
| tc            | 获取推特上的车 数据来源http://59.110.175.37:5000/            |
| live          | 获取最近3场live的开始时间                                    |
| myid          | 查看自己绑定的游戏ID                                         |
| echo你免费了  | echo退群命令 需要用户有管理员权限 \| 请勿直接踢出            |



## 常用网站

查分 查歌曲完成进度:[Project Sekai Profile (pjsekai.moe)](https://profile.pjsekai.moe/#/)

查活动 卡面 角色信息 歌曲谱面等(也可以玩角色Live2D):[Sekai Viewer](https://sekai.best/)

解包数据:[pjsek.ai](https://pjsek.ai/)

官方推特:

wiki:



## 数据包

游戏内数据包,下载后解压到`Android/data`下即可

能免去漫长的数据包下载时间

蓝奏云:comming soon...

阿里云盘:comming soon...

正在测试数据包的可用性 以及后续更新的问题




## 关于Profile

上文提到的[Project Sekai Profile (pjsekai.moe)](https://profile.pjsekai.moe/#/)网站,有部分小伙伴会打不开

作者有提供站点源代码和部署方法,链接为[Project Sekai / Profile · GitLab](https://gitlab.com/pjsekai/profile)

有能力的可以将其部署到国内服务器上供那些打不开的玩家使用

不过该项目并未设置许可证 随意使用和修改或将面临知识产权诉讼的危险



## 数据源

游戏的大部分数据都在这里了(不包含玩家活动分数排名)[Database](https://gitlab.com/pjsekai/database)

这里列出了一些可能会用到的文件,还有很多文件可以自行探索

其中`Database\Music`中的`musics.json` `musicDifficulties.json`这两个文件包含更详细的歌曲信息和全服玩家完成情况

| 文件名                              | 备注           |
| ----------------------------------- | -------------- |
| musics.json\|musicDifficulties.json | 歌曲信息       |
| cheerfulCarnivalTeams.json          | 协力阵营队伍名 |
| gameCharacters.json                 | 角色信息       |
| limitedLoginBonuses.json            | 限时登录奖励   |
| penlightColors.json                 | 应援色         |
| virtualLives.json                   | live信息       |
| levels.json                         | 游戏版本信息   |

另外这个仓库中还有API 不过我们没有权限是看不到的()

profile 中的数据就是从这个api获取的[API](https://api.pjsekai.moe/api/user/)

调用方式

`https://api.pjsekai.moe/api/user/%7Buser_id%7D/event/活动id/ranking?targetUserId=游戏id`

或者

`...ranking?targetRank=200`

!!!请勿滥用!!!



## 萝卜们

### 彩彩萝卜

是开源的萝卜(应该是这只)

项目地址: [cc004/BandoriBot](https://github.com/cc004/BandoriBot)

### uni萝卜

官方文档: [一只多功能PJSK萝卜](https://bot.unijzlsx.com/)





## 怎么种萝卜(bushi)

怎么部署一个自己的机器人 给他人使用

这里只提供简单的思路

TIPS:需要有网络基础以及编程基础

1. 首先 需要有个自己的QQ机器人

   1. 选择机器人框架 下面列出了两个框架
      * [mirai](https://github.com/mamoe/mirai)
      * [go-cqhttp](https://github.com/Mrs4s/go-cqhttp)(ECHO用的这个 上手简单些)
   2. 部署上述框架到vps或者自己的电脑上也可以是手机上(go-cqhttp提供了linux_arm64的版本经过尝试可以部署到安卓手机上 mirai没有试过)
   3. 可以参考[使用go-cqhttp搭建一个简易的QQ机器人](https://blog.csdn.net/tagagi/article/details/121089116)这篇文章(如果有人愿意写个详细教程就好了(我是懒狗)) 使用python+flask来接收处理go-cqhttp发来的消息

   至此 一个简单的QQ机器人就部署好了

2. 如何获取PJSK相关的数据

   1. 这里简单的对pjsk日服客户端进行了抓包(截图是登陆流程的(使用token鉴权))
      
      ![image-20220524100127508](https://s2.loli.net/2022/05/24/bQvoWAOB9CqzMsI.png)
   
   2. 进入游戏内活动排行页面 可以在抓包软件中看到对应请求 但是被加密了
   
      ​	(你问我图图呢,忘备份没了!上面这张图还是云盘里找到的(有空补上))
   
   3. 数据包加解密可以参考[PackHelper.cs](https://github.com/cc004/BandoriBot/blob/master/SekaiClient/PackHelper.cs)彩彩萝卜的(看 这才是真大佬!)
   
      * AES加密模式为CBC
      * 填充采用PKCS7
      * 密码(key)以及偏移量(iv)参考代码17和18行
   
   4. 之后就可以愉快的写客户端与服务器通信了
   
   5. 如果觉得上面那些比较麻烦 可以参考[projectSekai](https://github.com/xhl6666/projectSekai)这个项目 是一个用python写的简易客户端
   
3. 如果上面的数据获取方式比较麻烦也可以试试从数据源获取
