# API

测试主机 `http://106.75.251.132:8450`

文档中使用大括号包裹的参数直接替换为对应值即可。

例如 `/api/query/profile/{userId}` 传入 `userID` 参数就是 `/api/query/profile/6581732593999887`

## 获取 Profile

请求路径: `/api/query/profile/{userId}`

### 参数

| 字段名    | 数据类型   | 说明      |
| ------ | ------ | ------- |
| userId | String | 用户游戏内ID |

### 响应结果

> 此接口响应数据过多，这里仅列举常用的几个。

| 路径                                  | 数据类型   | 说明     |
| ----------------------------------- | ------ | ------ |
| $['user']['userGamedata']['userId'] | String | 用户昵称   |
| $['user']['userGamedata']['rank']   | int    | 等级     |
| $['userMusics']                     | List   | 歌曲完成情况 |
| ...                                 |        |        |

## 查询当前活动信息

请求路径: `/api/query/event/current`

> 无参数

### 响应结果

| 路径                     | 数据类型   | 说明                                                 |
| ---------------------- | ------ | -------------------------------------------------- |
| $['id']                | int    | 活动 ID                                              |
| $['eventType']         | String | 当前活动类型<br/>marathon为普通类型<br/>cheerful_carnival为5v5 |
| $['name']              | String | 活动名                                                |
| $['startAt']           | long   | 活动开始时间戳                                            |
| $['aggregateAt']       | long   | 活动结束时间戳                                            |
| $['rankingAnnounceAt'] | long   | 排名宣布时间戳                                            |
| $['closedAt']          | long   | 活动页面关闭时间戳                                          |
| ...                    |        |                                                    |

>  如需往期活动信息请访问 /data/events.json 自行分析

## 活动成绩

### 根据用户 ID 查询

请求路径: `/api/query/event/{eventId}/user/{userId}`

#### 参数

| 字段名         | 数据类型   | 说明                          |
| ----------- | ------ | --------------------------- |
| eventId     | String | 活动 ID , 如果输入 current 则为当前活动 |
| userId      | String | 用户游戏内 ID                    |
| higherLimit | int    | 可选 额外获取目标排名之上的用户分数          |
| lowerLimit  | int    | 可选 额外获取目标排名之下的用户分数          |

示例: `/api/query/event/current/user/6581732593999887&higherLimit=3&lowerLimit=3`

获取当前玩家的成绩,以及该玩家排名上下3位的成绩。

`/api/query/event/39/user/6581732593999887`

获取当前玩家第`39`期活动的成绩。

### 根据排名查询

请求路径: `/api/query/event/{eventId}/rank/{rank}`

#### 参数

| 字段名         | 数据类型   | 说明                          |
| ----------- | ------ | --------------------------- |
| eventId     | String | 活动 ID , 如果输入 current 则为当前活动 |
| rank        | String | 排名                          |
| higherLimit | int    | 可选 额外获取目标排名之上的用户分数          |
| lowerLimit  | int    | 可选 额外获取目标排名之下的用户分数          |

示例: `/api/query/event/current/rank/1&lowerLimit=99`

获取当前活动前 100 名玩家的成绩

### 响应结果

返回当期活动成绩,如果为5v5则会额外返回队伍id，未查询到记录则返回为空。

```json
{"rankings":[{"userId":5140038942085128,"score":187000430,"rank":1,"isOwn":false,"name":"そーす","userCard":{"cardId":136,"level":60,"masterRank":0,"specialTrainingStatus":"done","defaultImage":"special_training"},"userProfile":{"userId":5140038942085128,"word":"2022年中にプロセカ音楽イベントほんとにやるかも？？！","twitterId":"sasisusesoosu01","profileImageType":"leader"},"userProfileHonors":[{"seq":1,"profileHonorType":"normal","honorId":2047,"honorLevel":1,"bondsHonorViewType":"none","bondsHonorWordId":0},{"seq":2,"profileHonorType":"normal","honorId":74,"honorLevel":7,"bondsHonorViewType":"none","bondsHonorWordId":0},{"seq":3,"profileHonorType":"normal","honorId":560,"honorLevel":1,"bondsHonorViewType":"none","bondsHonorWordId":0}],"userCheerfulCarnival":{}}]}
```

## 查询当前排位赛信息

请求路径: `/api/query/rankmatch/current`

> 无参数

### 响应结果

```json
{"id":3,"name":"2022 SUMMER","startAt":1656644400000,"aggregatedAt":1664420399000,"rankingPublishedAt":1664420999000,"batchExecutionAt":1664467199000,"distributionStartAt":1664503199000,"distributionEndAt":1665845999000,"closedAt":1664593199000,"assetbundleName":"2022_summer","isDisplayResult":true,"rankMatchSeasonPlayableTimes":[{"id":3,"rankMatchSeasonId":3,"startTime":"04:00:00","endTime":"03:59:59"}],"rankMatchSeasonTierMusicPlayLevels":[{"id":1,"rankMatchSeasonId":3,"rankMatchTierId":1,"fromPlayLevel":18,"toPlayLevel":25},{"id":2,"rankMatchSeasonId":3,"rankMatchTierId":2,"fromPlayLevel":18,"toPlayLevel":25},{"id":3,"rankMatchSeasonId":3,"rankMatchTierId":3,"fromPlayLevel":18,"toPlayLevel":25},{"id":4,"rankMatchSeasonId":3,"rankMatchTierId":4,"fromPlayLevel":18,"toPlayLevel":25},{"id":5,"rankMatchSeasonId":3,"rankMatchTierId":5,"fromPlayLevel":23,"toPlayLevel":27},{"id":6,"rankMatchSeasonId":3,"rankMatchTierId":6,"fromPlayLevel":23,"toPlayLevel":27},{"id":7,"rankMatchSeasonId":3,"rankMatchTierId":7,"fromPlayLevel":23,"toPlayLevel":27},{"id":8,"rankMatchSeasonId":3,"rankMatchTierId":8,"fromPlayLevel":23,"toPlayLevel":27},{"id":9,"rankMatchSeasonId":3,"rankMatchTierId":9,"fromPlayLevel":25,"toPlayLevel":28},{"id":10,"rankMatchSeasonId":3,"rankMatchTierId":10,"fromPlayLevel":25,"toPlayLevel":28},{"id":11,"rankMatchSeasonId":3,"rankMatchTierId":11,"fromPlayLevel":25,"toPlayLevel":28},{"id":12,"rankMatchSeasonId":3,"rankMatchTierId":12,"fromPlayLevel":25,"toPlayLevel":28},{"id":13,"rankMatchSeasonId":3,"rankMatchTierId":13,"fromPlayLevel":26,"toPlayLevel":30},{"id":14,"rankMatchSeasonId":3,"rankMatchTierId":14,"fromPlayLevel":26,"toPlayLevel":30},{"id":15,"rankMatchSeasonId":3,"rankMatchTierId":15,"fromPlayLevel":26,"toPlayLevel":30},{"id":16,"rankMatchSeasonId":3,"rankMatchTierId":16,"fromPlayLevel":26,"toPlayLevel":30},{"id":17,"rankMatchSeasonId":3,"rankMatchTierId":17,"fromPlayLevel":28,"toPlayLevel":31},{"id":18,"rankMatchSeasonId":3,"rankMatchTierId":18,"fromPlayLevel":28,"toPlayLevel":31},{"id":19,"rankMatchSeasonId":3,"rankMatchTierId":19,"fromPlayLevel":28,"toPlayLevel":31},{"id":20,"rankMatchSeasonId":3,"rankMatchTierId":20,"fromPlayLevel":28,"toPlayLevel":31},{"id":21,"rankMatchSeasonId":3,"rankMatchTierId":21,"fromPlayLevel":29,"toPlayLevel":33},{"id":22,"rankMatchSeasonId":3,"rankMatchTierId":22,"fromPlayLevel":29,"toPlayLevel":33},{"id":23,"rankMatchSeasonId":3,"rankMatchTierId":23,"fromPlayLevel":29,"toPlayLevel":33},{"id":24,"rankMatchSeasonId":3,"rankMatchTierId":24,"fromPlayLevel":29,"toPlayLevel":33},{"id":25,"rankMatchSeasonId":3,"rankMatchTierId":25,"fromPlayLevel":30,"toPlayLevel":36}],"rankMatchSeasonTierRewards":[{"id":51,"rankMatchSeasonId":3,"rankMatchTierId":25,"resourceBoxId":26},{"id":52,"rankMatchSeasonId":3,"rankMatchTierId":24,"resourceBoxId":27},{"id":53,"rankMatchSeasonId":3,"rankMatchTierId":23,"resourceBoxId":28},{"id":54,"rankMatchSeasonId":3,"rankMatchTierId":22,"resourceBoxId":29},{"id":55,"rankMatchSeasonId":3,"rankMatchTierId":21,"resourceBoxId":30},{"id":56,"rankMatchSeasonId":3,"rankMatchTierId":20,"resourceBoxId":31},{"id":57,"rankMatchSeasonId":3,"rankMatchTierId":19,"resourceBoxId":32},{"id":58,"rankMatchSeasonId":3,"rankMatchTierId":18,"resourceBoxId":33},{"id":59,"rankMatchSeasonId":3,"rankMatchTierId":17,"resourceBoxId":34},{"id":60,"rankMatchSeasonId":3,"rankMatchTierId":16,"resourceBoxId":35},{"id":61,"rankMatchSeasonId":3,"rankMatchTierId":15,"resourceBoxId":36},{"id":62,"rankMatchSeasonId":3,"rankMatchTierId":14,"resourceBoxId":37},{"id":63,"rankMatchSeasonId":3,"rankMatchTierId":13,"resourceBoxId":38},{"id":64,"rankMatchSeasonId":3,"rankMatchTierId":12,"resourceBoxId":39},{"id":65,"rankMatchSeasonId":3,"rankMatchTierId":11,"resourceBoxId":40},{"id":66,"rankMatchSeasonId":3,"rankMatchTierId":10,"resourceBoxId":41},{"id":67,"rankMatchSeasonId":3,"rankMatchTierId":9,"resourceBoxId":42},{"id":68,"rankMatchSeasonId":3,"rankMatchTierId":8,"resourceBoxId":43},{"id":69,"rankMatchSeasonId":3,"rankMatchTierId":7,"resourceBoxId":44},{"id":70,"rankMatchSeasonId":3,"rankMatchTierId":6,"resourceBoxId":45},{"id":71,"rankMatchSeasonId":3,"rankMatchTierId":5,"resourceBoxId":46},{"id":72,"rankMatchSeasonId":3,"rankMatchTierId":4,"resourceBoxId":47},{"id":73,"rankMatchSeasonId":3,"rankMatchTierId":3,"resourceBoxId":48},{"id":74,"rankMatchSeasonId":3,"rankMatchTierId":2,"resourceBoxId":49},{"id":75,"rankMatchSeasonId":3,"rankMatchTierId":1,"resourceBoxId":50}]}
```

> 如需往期活动信息请访问 /data/rankMatchSeasons.json 自行分析

## 当前排位赛成绩

### 根据用户 ID 查询

请求路径: `/api/query/rankmatch/{rankMatchId}/user/{userId}`

#### 参数

| 字段名         | 数据类型   | 说明                           |
| ----------- | ------ | ---------------------------- |
| rankMatchId | String | 排位赛 ID , 如果为 current 则为当前排位赛 |
| userId      | String | 用户游戏内 ID                     |
| higherLimit | int    | 可选 额外获取目标排名之上的用户分数           |
| lowerLimit  | int    | 可选 额外获取目标排名之下的用户分数           |

示例: `/api/query/rankmatch/current/user/123456&higherLimit=3&lowerLimit=3`

获取玩家排位赛的成绩,以及该玩家排名上下3位的成绩。

### 根据排名查询

请求路径: `/api/query/rankmatch/{rankMatchId}/rank/{rank}`

#### 参数

| 字段名         | 数据类型   | 说明                           |
| ----------- | ------ | ---------------------------- |
| rankMatchId | String | 排位赛 ID , 如果为 current 则为当前排位赛 |
| rank        | String | 排名                           |
| higherLimit | int    | 可选 额外获取目标排名之上的用户分数           |
| lowerLimit  | int    | 可选 额外获取目标排名之下的用户分数           |

示例: `/api/query/rankmatch/current/rank/1&lowerLimit=99`

获取当前排位赛前 100 名玩家的成绩

### 响应结果

返回当期活动成绩,如果为5v5则会额外返回队伍id，未查询到记录则返回为空。

```json
{"rankings":[{"userId":5119914780438534,"score":4894,"rank":1,"isOwn":false,"name":"かんぱり","userCard":{"cardId":505,"level":60,"masterRank":0,"specialTrainingStatus":"done","defaultImage":"special_training"},"userProfile":{"userId":5119914780438534,"word":"ミク誕めでたい！","twitterId":"kwang8e_jp","profileImageType":"leader"},"userProfileHonors":[{"seq":1,"profileHonorType":"normal","honorId":82,"honorLevel":8,"bondsHonorViewType":"none","bondsHonorWordId":0},{"seq":2,"profileHonorType":"normal","honorId":436,"honorLevel":1,"bondsHonorViewType":"none","bondsHonorWordId":0},{"seq":3,"profileHonorType":"normal","honorId":1568,"honorLevel":1,"bondsHonorViewType":"none","bondsHonorWordId":0}],"userCheerfulCarnival":{},"userRankMatchSeason":{"rankMatchSeasonId":3,"rankMatchTierId":25,"tierPoint":4750,"totalTierPoint":4894,"playCount":6097,"consecutiveWinCount":0,"maxConsecutiveWinCount":34,"winCount":4576,"loseCount":897,"drawCount":626,"penaltyCount":0}}]}
```
