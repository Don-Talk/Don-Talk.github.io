<template><div><h1 id="mongodb安装及入门-一" tabindex="-1"><a class="header-anchor" href="#mongodb安装及入门-一"><span>MongoDB安装及入门（一）</span></a></h1>
<h2 id="一、mongodb简介" tabindex="-1"><a class="header-anchor" href="#一、mongodb简介"><span>一、MongoDB简介</span></a></h2>
<p>MongoDB（来自于英文单词“Humongous”，中文含义为“庞大”）是可以应用于各种规模的企业、各个 行业以及各类应用程序的开源数据库。基于分布式文件存储的数据库。由C++语言编写。旨在为WEB应 用提供可扩展的高性能数据存储解决方案。MongoDB是一个高性能，开源，无模式的<strong>文档型数据库</strong>，是当前NoSql数据库中比较热门的一种。</p>
<p>MongoDB 是专⻔为可扩展性、⾼性能和⾼可⽤性⽽设计的数据库，它可以从单服务器部署扩展到⼤型、复杂的多数据中⼼架构。利⽤内存计算的优势，MongoDB 能够提供⾼性能的数据读写操作。MongoDB 的本地复制和⾃动故障转移功能使应⽤程序具有企业级的可靠性和操作灵活性。</p>
<h2 id="二、mongodb安装-windows" tabindex="-1"><a class="header-anchor" href="#二、mongodb安装-windows"><span>二、MongoDB安装（Windows）</span></a></h2>
<blockquote>
<p>官网地址：https://www.mongodb.com/zh-cn/docs/manual/tutorial/install-mongodb-on-windows/</p>
</blockquote>
<h2 id="三、mongodb相关概念" tabindex="-1"><a class="header-anchor" href="#三、mongodb相关概念"><span>三、MongoDB相关概念</span></a></h2>
<p>MongoDB 是一个面向文档存储的数据库，看一下与关系型数据库相比，MongoDB的相关概念：</p>
<table>
<thead>
<tr>
<th>SQL术语/概念</th>
<th>MongoDB术语/概念</th>
<th>解释/说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>database</td>
<td>database</td>
<td>数据库</td>
</tr>
<tr>
<td>table</td>
<td>collection</td>
<td>数据库表/集合</td>
</tr>
<tr>
<td>row</td>
<td>document</td>
<td>数据记录行/文档</td>
</tr>
<tr>
<td>column</td>
<td>field</td>
<td>数据字段/域</td>
</tr>
<tr>
<td>index</td>
<td>index</td>
<td>索引</td>
</tr>
<tr>
<td>table joins</td>
<td></td>
<td>表连接,MongoDB不支持</td>
</tr>
<tr>
<td>primary key</td>
<td>primary key</td>
<td>主键,MongoDB自动将_id字段设置为主键</td>
</tr>
</tbody>
</table>
<p>对比关系图：</p>
<p><img src="@source/02-数据库与持久化/02-NoSQL 数据库/MongoDB/01.MongoDB入门（一）/imgs/1.png" alt=""></p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>mongorestore.exe -h 134.175.107.183 --port 27017 -d swim  D:\Works\大学工作室\swim\mongo数据\swim_data_mongodb</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>mongorestore --host=134.175.107.183 --port=27017 --username=adminUser --password=adminPass  --authenticationDatabase=swim  /data/db/mongodb_3.4_container/swim_data_mongodb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mongorestore --host=134.175.107.183 --port=27017 --username=adminUser --password=adminPass  --authenticationDatabase=swim  /var/lib/mongodb/dump/swim</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mongorestore  --username=adminUser --password=adminPass  --authenticationDatabase=swim  /var/lib/mongodb/dump/swim</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mongorestore  --username=root --password=123456  --authenticationDatabase=swim  /var/lib/mongodb/dump/swim</span></span>
<span class="line"><span></span></span>
<span class="line"><span>db.grantRolesToUser ( "adminUser", [ { role: "__system", db: "admin" } ] )</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>db.createUser({user: "swimUser",pwd: "swimPass",roles: [ { role: "dbOwner", db: "swim" } ]})</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>mongo --port 27017</span></span>
<span class="line"><span></span></span>
<span class="line"><span>use swim</span></span>
<span class="line"><span>db.auth("adminUser", "adminPass")</span></span>
<span class="line"><span></span></span>
<span class="line"><span>db.createUser({user: "root",pwd: "123456",roles: [ { role: "dbOwner", db: "swim" } ]})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


