# MongoDB安装及入门（一）

## 一、MongoDB简介

MongoDB（来自于英文单词“Humongous”，中文含义为“庞大”）是可以应用于各种规模的企业、各个 行业以及各类应用程序的开源数据库。基于分布式文件存储的数据库。由C++语言编写。旨在为WEB应 用提供可扩展的高性能数据存储解决方案。MongoDB是一个高性能，开源，无模式的**文档型数据库**，是当前NoSql数据库中比较热门的一种。

MongoDB 是专⻔为可扩展性、⾼性能和⾼可⽤性⽽设计的数据库，它可以从单服务器部署扩展到⼤型、复杂的多数据中⼼架构。利⽤内存计算的优势，MongoDB 能够提供⾼性能的数据读写操作。MongoDB 的本地复制和⾃动故障转移功能使应⽤程序具有企业级的可靠性和操作灵活性。



## 二、MongoDB安装（Windows）

> 官网地址：https://www.mongodb.com/zh-cn/docs/manual/tutorial/install-mongodb-on-windows/



## 三、MongoDB相关概念

MongoDB 是一个面向文档存储的数据库，看一下与关系型数据库相比，MongoDB的相关概念：

| SQL术语/概念 | MongoDB术语/概念 | 解释/说明                           |
| ------------ | ---------------- | ----------------------------------- |
| database     | database         | 数据库                              |
| table        | collection       | 数据库表/集合                       |
| row          | document         | 数据记录行/文档                     |
| column       | field            | 数据字段/域                         |
| index        | index            | 索引                                |
| table joins  |                  | 表连接,MongoDB不支持                |
| primary key  | primary key      | 主键,MongoDB自动将_id字段设置为主键 |

对比关系图：

![](imgs/1.png) 



```text
mongorestore.exe -h 134.175.107.183 --port 27017 -d swim  D:\Works\大学工作室\swim\mongo数据\swim_data_mongodb



mongorestore --host=134.175.107.183 --port=27017 --username=adminUser --password=adminPass  --authenticationDatabase=swim  /data/db/mongodb_3.4_container/swim_data_mongodb

mongorestore --host=134.175.107.183 --port=27017 --username=adminUser --password=adminPass  --authenticationDatabase=swim  /var/lib/mongodb/dump/swim

mongorestore  --username=adminUser --password=adminPass  --authenticationDatabase=swim  /var/lib/mongodb/dump/swim

mongorestore  --username=root --password=123456  --authenticationDatabase=swim  /var/lib/mongodb/dump/swim

db.grantRolesToUser ( "adminUser", [ { role: "__system", db: "admin" } ] )



db.createUser({user: "swimUser",pwd: "swimPass",roles: [ { role: "dbOwner", db: "swim" } ]})


mongo --port 27017

use swim
db.auth("adminUser", "adminPass")

db.createUser({user: "root",pwd: "123456",roles: [ { role: "dbOwner", db: "swim" } ]})
```text









