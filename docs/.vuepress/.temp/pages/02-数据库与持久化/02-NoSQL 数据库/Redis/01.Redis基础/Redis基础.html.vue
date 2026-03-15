<template><div><h1 id="redis" tabindex="-1"><a class="header-anchor" href="#redis"><span>Redis</span></a></h1>
<h2 id="基础" tabindex="-1"><a class="header-anchor" href="#基础"><span>基础</span></a></h2>
<h3 id="redis版本" tabindex="-1"><a class="header-anchor" href="#redis版本"><span>Redis版本</span></a></h3>
<table>
<thead>
<tr>
<th>版本</th>
<th>发布时间</th>
<th>关键特性</th>
</tr>
</thead>
<tbody>
<tr>
<td>1.0</td>
<td>2009-02</td>
<td>初始发布，作为内存键值存储，支持基本数据类型（字符串、列表、集合、哈希），通过RDB快照持久化，以及复制支持。</td>
</tr>
<tr>
<td>2.0</td>
<td>2010-09</td>
<td>引入虚拟内存（后来弃用），改进复制，以及非阻塞主从复制。</td>
</tr>
<tr>
<td>2.2</td>
<td>2011-03</td>
<td>添加有序集合的词典范围，改进哈希命令，以及虚拟内存增强。</td>
</tr>
<tr>
<td>2.4</td>
<td>2011-09</td>
<td>Pub/Sub 增强，更好的内存效率，以及脚本支持的前身。</td>
</tr>
<tr>
<td>2.6</td>
<td>2012-08</td>
<td>服务端 Lua 脚本，毫秒精度过期，以及改进的 AOF 持久化。</td>
</tr>
<tr>
<td>2.8</td>
<td>2013-11</td>
<td>复制的部分重新同步，键空间通知，以及改进的内存报告。</td>
</tr>
<tr>
<td>3.0</td>
<td>2015-04</td>
<td>Redis Cluster 用于自动分片和高可用性，改进的 AOF 重写，以及无盘复制。</td>
</tr>
<tr>
<td>3.2</td>
<td>2015-12</td>
<td>GEO 命令用于地理空间数据，集群改进，以及更好的 Lua 调试。</td>
</tr>
<tr>
<td>4.0</td>
<td>2017-07</td>
<td>模块系统用于可扩展性（例如 RedisBloom、RediSearch），延迟释放，以及 PSYNC2 用于更好的复制。</td>
</tr>
<tr>
<td>5.0</td>
<td>2018-10</td>
<td>引入 Streams 数据类型用于追加日志，改进模块，定时命令，以及集群管理。</td>
</tr>
<tr>
<td>6.0</td>
<td>2020-05</td>
<td>ACL 和 RBAC 支持，RESP3 协议，线程化 I/O，TLS 支持，以及其他企业级特性。</td>
</tr>
<tr>
<td>6.2</td>
<td>2021-08</td>
<td>增强了 6.0 的功能，包括更好的模块支持和性能优化。</td>
</tr>
<tr>
<td>7.0</td>
<td>2022-04</td>
<td>函数支持，ACL v2，共享 Pub/Sub，多部分 AOF，以及性能和安全改进。</td>
</tr>
<tr>
<td>7.2</td>
<td>2023-08</td>
<td>自动分层，矢量搜索支持，以及其他现代 ML 和 AI 应用的功能。</td>
</tr>
<tr>
<td>7.4</td>
<td>2024-07</td>
<td>哈希字段过期，客户端缓存支持，指标流引擎预览，以及 API 增强。</td>
</tr>
<tr>
<td>8.0</td>
<td>2025-05</td>
<td>三重许可模型，新的数据结构和能力，如 JSON、搜索和时间序列的默认支持。</td>
</tr>
<tr>
<td>8.2</td>
<td>2025-08</td>
<td>性能优化，安全增强，以及与先前版本的重大更改。</td>
</tr>
<tr>
<td>8.4</td>
<td>2025-11</td>
<td>最强劲、最安全、功能最丰富的版本，针对现代 ML 和 AI 应用的性能、规模和可靠性。</td>
</tr>
<tr>
<td>8.6</td>
<td>2026-01</td>
<td>功能完整的预发布候选版，引入新特性并修复问题。</td>
</tr>
</tbody>
</table>
<h3 id="什么是redis" tabindex="-1"><a class="header-anchor" href="#什么是redis"><span>什么是Redis？</span></a></h3>
<p>Redis是一种基于内存的、键值对类型的NoSQL数据库。</p>
<h3 id="redis的数据类型" tabindex="-1"><a class="header-anchor" href="#redis的数据类型"><span>Redis的数据类型？</span></a></h3>
<h4 id="一、基础数据类型" tabindex="-1"><a class="header-anchor" href="#一、基础数据类型"><span>一、基础数据类型</span></a></h4>
<table>
<thead>
<tr>
<th>数据类型</th>
<th>图示</th>
<th>特点</th>
<th>核心用途</th>
<th>常用命令</th>
</tr>
</thead>
<tbody>
<tr>
<td>String（字符串）</td>
<td><img src="@source/02-数据库与持久化/02-NoSQL 数据库/Redis/01.Redis基础/imgs/data-structure-string.png" alt=""></td>
<td>二进制安全的字节序列（可存文本、图片、序列化对象等），最大容量512MB</td>
<td>缓存简单值（如用户信息、计数器）、分布式锁（SET key value NX EX）、Session存储</td>
<td>SET<code v-pre>/</code>GET<code v-pre>、</code>INCR<code v-pre>/</code>DECR<code v-pre>（原子计数）、</code>APPEND<code v-pre>、</code>STRLEN</td>
</tr>
<tr>
<td>List（列表）</td>
<td><img src="@source/02-数据库与持久化/02-NoSQL 数据库/Redis/01.Redis基础/imgs/data-structure-list.png" alt=""></td>
<td>双向链表结构（底层优化为quicklist），支持两端高效插入/删除，但随机访问慢</td>
<td>消息队列、最新列表、栈/队列模拟</td>
<td><code v-pre>LPUSH</code>/<code v-pre>RPUSH</code>（左/右插入）、<code v-pre>LPOP</code>/<code v-pre>RPOP</code>（左/右弹出）、<code v-pre>LRANGE</code>（范围查询）、<code v-pre>LLEN</code>（长度）</td>
</tr>
<tr>
<td>Hash（哈希）</td>
<td><img src="@source/02-数据库与持久化/02-NoSQL 数据库/Redis/01.Redis基础/imgs/data-structure-hash.png" alt=""></td>
<td>键值对的集合（类似JSON对象），适合存储结构化数据（如用户属性）。底层用ziplist或hashtable编码，小数据量时内存紧凑。</td>
<td>存储对象属性、字段级更新</td>
<td><code v-pre>HSET</code>/<code v-pre>HGET</code>（设置/获取字段）、<code v-pre>HMSET</code>/<code v-pre>HMGET</code>（批量操作）、<code v-pre>HGETALL</code>（获取所有字段）、<code v-pre>HDEL</code>（删除字段）</td>
</tr>
<tr>
<td>Set（集合）</td>
<td><img src="@source/02-数据库与持久化/02-NoSQL 数据库/Redis/01.Redis基础/imgs/data-structure-set.png" alt=""></td>
<td>无序、唯一的字符串集合，支持交集、并集、差集等数学运算。底层用intset(整数集合)或hashtable编码</td>
<td>去重（如用户标签）、共同好友、抽奖（SRANDMEMBER随机取元素）</td>
<td><code v-pre>SADD</code>（添加元素）、<code v-pre>SMEMBERS</code>（获取所有元素）、<code v-pre>SISMEMBER</code>（判断存在）、<code v-pre>SINTER</code>（交集）、<code v-pre>SUNION</code>（并集）</td>
</tr>
<tr>
<td>ZSet(Sorted Set) 有序集合</td>
<td><img src="@source/02-数据库与持久化/02-NoSQL 数据库/Redis/01.Redis基础/imgs/data-structure-zset.png" alt=""></td>
<td>每个元素关联一个浮点型分数（score），按分数排序，元素唯一但分数可重复。底层用ziplist或skiplist+hashtable编码，支持高效范围查询</td>
<td>排行榜（如游戏积分排名）、带权重的任务队列、范围筛选（如分数80-90的用户）</td>
<td><code v-pre>ZADD</code>（添加元素+分数）、<code v-pre>ZRANGE</code>（按分数升序取范围）、<code v-pre>ZREVRANGE</code>（降序取范围）、<code v-pre>ZSCORE</code>（获取分数）、<code v-pre>ZRANK</code>（获取排名）</td>
</tr>
</tbody>
</table>
<h4 id="二、高级-扩展数据类型" tabindex="-1"><a class="header-anchor" href="#二、高级-扩展数据类型"><span>二、<strong>高级/扩展数据类型</strong></span></a></h4>
<table>
<thead>
<tr>
<th>数据类型</th>
<th>说明</th>
<th>特点</th>
<th>核心用途</th>
<th>常用命令</th>
</tr>
</thead>
<tbody>
<tr>
<td>Stream（流）</td>
<td>5.0+引入</td>
<td>日志型数据结构（类似Kafka），支持消息持久化、消费者组、消息确认（ACK），适合高可用消息队列</td>
<td>事件溯源（如订单状态变更记录）、实时数据流处理（如日志收集）</td>
<td><code v-pre>XADD</code>（添加消息）、<code v-pre>XREAD</code>（读取消息）、<code v-pre>XGROUP</code>（创建消费者组）、<code v-pre>XACK</code>（确认消息）</td>
</tr>
<tr>
<td>Bitmap(位图)</td>
<td>基于String的位操作扩展，通过位（bit）存储布尔值（0/1）</td>
<td>极致节省空间（1MB可存800万+位），适合高频、低基数的状态统计</td>
<td>用户签到（每天1位）、活跃用户统计（按天标记是否登录）、布隆过滤器（近似去重）</td>
<td><code v-pre>SETBIT</code>（设置位）、<code v-pre>GETBIT</code>（获取位）、<code v-pre>BITCOUNT</code>（统计 1 的数量）、<code v-pre>BITOP</code>（位运算）</td>
</tr>
<tr>
<td>HyperLogLog（基数统计）</td>
<td></td>
<td>用于估算集合中不重复元素的个数（基数），误差率约为0.81%，但仅需12KB内存，无论数据量多大</td>
<td>UV统计（独立访客数）、搜索关键词去重计数</td>
<td><code v-pre>PFADD</code>（添加元素）、<code v-pre>PFCOUNT</code>（估算基数）、<code v-pre>PFMERGE</code>（合并多个 HyperLogLog）</td>
</tr>
<tr>
<td>Geospatial（GEO，地理位置）</td>
<td>3.2+引入</td>
<td>基于ZSet的扩展，通过经纬度计算距离、范围</td>
<td>附近的人、地点搜索（如“3公里内的餐厅”）</td>
<td><code v-pre>GEOADD</code>（添加位置）、<code v-pre>GEODIST</code>（计算距离）、<code v-pre>GEORADIUS</code>（按半径查询）、<code v-pre>GEOPOS</code>（获取坐标）</td>
</tr>
<tr>
<td>Vector(向量)</td>
<td>8.0+引入</td>
<td>存储高维向量数据，支持向量相似性搜索（如余弦相似性、欧氏距离），专为AI/机器学习场景设计</td>
<td>图像/文本检索（如“找相似的图片”）、推荐系统（用户/物品向量匹配）</td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="三、模块扩展类型-依赖redis-modules" tabindex="-1"><a class="header-anchor" href="#三、模块扩展类型-依赖redis-modules"><span>三、模块扩展类型（依赖Redis Modules）</span></a></h4>
<p>Redis 4.0+支持通过模块扩展数据类型，常见模块包括：</p>
<ul>
<li>RedisJSON：原生支持JSON文档存储和查询（类似MongoDB）</li>
<li>RedisSearch：全文搜索引擎，支持复杂条件过滤、聚合分析</li>
<li>RedisGraph：图数据库，支持结点、关系的高效遍历(如社交网络关系)</li>
<li>RedisTimeSeries：时序数据库，优化时间序列数据的存储和聚合（如监控指标）</li>
</ul>
<h4 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h4>
<p><strong>详细介绍下Bitmap(位图)</strong></p>
<p>Redis 的 Bitmap 并非独立的数据类型，而是基于 String 类型实现的一组位操作命令。它将字符串视为一个由 0 和 1 组成的位数组，其中每个 bit 代表一个状态的开关</p>
<ul>
<li>底层结构：Bitmap 的底层是二进制安全的 String，最大长度为 512MB。因此，一个 Bitmap 最多可表示 <code v-pre>512 * 1024 * 1024 * 8 = 2^32</code> 位（约 43 亿），偏移量（offset）范围为 <code v-pre>[0, 2^32-1]</code>。</li>
<li>自动扩展：当使用 <code v-pre>SETBIT</code> 设置一个超出当前字符串长度的偏移量时，Redis 会自动用 0 填充中间的空白位，以扩展字符串。</li>
<li>空间效率：相比使用 <code v-pre>Set</code> 或 <code v-pre>Hash</code> 存储大量布尔值，Bitmap 的空间占用极小。例如，存储 1 亿用户的登录状态，Bitmap 仅需约 12.5MB，而 <code v-pre>Set</code> 方案则需要数百MB。</li>
</ul>
<p>常用命令</p>
<table>
<thead>
<tr>
<th style="text-align:left">命令</th>
<th style="text-align:left">语法</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><strong><code v-pre>SETBIT</code></strong></td>
<td style="text-align:left"><code v-pre>SETBIT key offset value</code></td>
<td style="text-align:left">设置指定偏移量 <code v-pre>offset</code> 的位为 <code v-pre>value</code> (0或1)。若 <code v-pre>key</code> 不存在则自动创建。时间复杂度 <strong>O(1)</strong>。</td>
</tr>
<tr>
<td style="text-align:left"><strong><code v-pre>GETBIT</code></strong></td>
<td style="text-align:left"><code v-pre>GETBIT key offset</code></td>
<td style="text-align:left">获取指定偏移量 <code v-pre>offset</code> 的位值。若 <code v-pre>offset</code> 超出范围或 <code v-pre>key</code> 不存在，返回 0。时间复杂度 <strong>O(1)</strong>。</td>
</tr>
<tr>
<td style="text-align:left"><strong><code v-pre>BITCOUNT</code></strong></td>
<td style="text-align:left"><code v-pre>BITCOUNT key [start end]</code></td>
<td style="text-align:left">统计指定字节范围 <code v-pre>[start, end]</code> 内值为 1 的位数。<code v-pre>start</code> 和 <code v-pre>end</code> 以<strong>字节</strong>为单位。时间复杂度 <strong>O(N)</strong>。</td>
</tr>
<tr>
<td style="text-align:left"><strong><code v-pre>BITPOS</code></strong></td>
<td style="text-align:left"><code v-pre>BITPOS key bit [start end]</code></td>
<td style="text-align:left">查找指定字节范围 <code v-pre>[start, end]</code> 内第一个值为 <code v-pre>bit</code> (0或1) 的<strong>位偏移量</strong>。时间复杂度 <strong>O(N)</strong>。</td>
</tr>
<tr>
<td style="text-align:left"><strong><code v-pre>BITOP</code></strong></td>
<td style="text-align:left"><code v-pre>BITOP op destkey key [key ...]</code></td>
<td style="text-align:left">对一个或多个 Bitmap 执行位运算（<code v-pre>AND</code>/<code v-pre>OR</code>/<code v-pre>XOR</code>/<code v-pre>NOT</code>），结果存入 <code v-pre>destkey</code>。时间复杂度 <strong>O(N)</strong>。</td>
</tr>
<tr>
<td style="text-align:left"><strong><code v-pre>BITFIELD</code></strong></td>
<td style="text-align:left"><code v-pre>BITFIELD key [GET type offset] [SET type offset value] ...</code></td>
<td style="text-align:left">在单个命令中对多个位域执行 <code v-pre>get</code>/<code v-pre>set</code>/<code v-pre>incrby</code> 操作，支持指定数据类型（如 <code v-pre>u8</code>, <code v-pre>i32</code>）和溢出策略。每个子命令时间复杂度 <strong>O(1)</strong>。</td>
</tr>
</tbody>
</table>
<p>详细介绍下HyperLogLog</p>
<p>HyperLogLog是一种概率数据结构，用于高效估算一个集合中不重复元素的数量（基数）。</p>
<p>特点：</p>
<ul>
<li>空间占用极小：无论数据量多大，内存占用基本固定（Redis中约为12KB）</li>
<li>结果近似：估算结果存在一定误差（标准误差约为0.81%），但足以满足绝大多数业务需求</li>
</ul>
<p>非常适合统计网站UV、App日活、广告独立曝光等大规模去重计数场景。</p>
<table>
<thead>
<tr>
<th style="text-align:left">特性</th>
<th style="text-align:left">HyperLogLog</th>
<th style="text-align:left">Set</th>
<th style="text-align:left">Bitmap</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><strong>内存占用</strong></td>
<td style="text-align:left"><strong>固定 (~12KB)</strong>，与数据量无关</td>
<td style="text-align:left">随数据量线性增长，巨大</td>
<td style="text-align:left">取决于 ID 范围，可能很大</td>
</tr>
<tr>
<td style="text-align:left"><strong>结果精度</strong></td>
<td style="text-align:left"><strong>近似值</strong> (误差 ~0.81%)</td>
<td style="text-align:left"><strong>精确值</strong></td>
<td style="text-align:left"><strong>精确值</strong></td>
</tr>
<tr>
<td style="text-align:left"><strong>核心功能</strong></td>
<td style="text-align:left">估算基数</td>
<td style="text-align:left">精确去重、查询、删除</td>
<td style="text-align:left">精确去重、按位操作</td>
</tr>
<tr>
<td style="text-align:left"><strong>适用场景</strong></td>
<td style="text-align:left">大规模、允许误差的计数</td>
<td style="text-align:left">小规模、需精确操作的场景</td>
<td style="text-align:left">ID 范围不大的精确去重</td>
</tr>
</tbody>
</table>
<p>详细介绍下GEO</p>
<p>GEO是3.2版本引入的功能，专门用于存储和查询地理位置（经纬度）信息。它基于有序集合ZSet实现，通过GeoHash编码将二维坐标映射为一维分数，从而高效支持“附近的人/店”、“两点距离”等LBS场景。</p>
<p><strong>核心概念与原理</strong></p>
<ul>
<li>本质：GEO并非独立的数据结构，其底层是Sorted Set
<ul>
<li>member：成员，即地点名称（如“Beijing”）</li>
<li>score：分数，是该地点经纬度GeoHash编码后得到的52位整数</li>
</ul>
</li>
<li>坐标系统：使用WGS84坐标系
<ul>
<li>经度（longitude）：-180°到180°</li>
<li>纬度（latitude）：-85.05112878° 到 85.05112878°</li>
</ul>
</li>
<li>GeoHash编码：一种将二维经纬度编码为一堆字符串的算法
<ul>
<li>原理：通过二分法交替划分经度和纬度区间，生成二进制串，再转为Base32字符串</li>
<li>特性：字符串前缀相同，地理位置越接近。Redis利用此特性，通过查询目标区域及周围8个区域的ZSet分数范围，实现高效的范围查询</li>
</ul>
</li>
</ul>
<p><strong>常用命令速查</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">命令</th>
<th style="text-align:left">作用</th>
<th style="text-align:left">示例</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>GEOADD</code></td>
<td style="text-align:left">添加一个或多个地点的经纬度。</td>
<td style="text-align:left"><code v-pre>GEOADD cities 116.404269 39.91582 &quot;Beijing&quot;</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>GEOPOS</code></td>
<td style="text-align:left">获取一个或多个地点的经纬度。</td>
<td style="text-align:left"><code v-pre>GEOPOS cities &quot;Beijing&quot;</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>GEODIST</code></td>
<td style="text-align:left">计算两个地点间的直线距离。</td>
<td style="text-align:left"><code v-pre>GEODIST cities &quot;Beijing&quot; &quot;Shanghai&quot; km</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>GEOHASH</code></td>
<td style="text-align:left">获取一个或多个地点的 GeoHash 字符串。</td>
<td style="text-align:left"><code v-pre>GEOHASH cities &quot;Beijing&quot;</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>GEORADIUS</code></td>
<td style="text-align:left">以给定经纬度为中心，查询指定半径内的地点。</td>
<td style="text-align:left"><code v-pre>GEORADIUS cities 116.404269 39.91582 500 km WITHDIST</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>GEORADIUSBYMEMBER</code></td>
<td style="text-align:left">以指定地点为中心，查询其指定半径内的地点。</td>
<td style="text-align:left"><code v-pre>GEORADIUSBYMEMBER cities &quot;Beijing&quot; 500 km</code></td>
</tr>
</tbody>
</table>
<p>Redis为什么使⽤ hash 类型⽽不使⽤ string 类型序列化存储？</p>
<p><strong>核心思想：结构化 vs. 扁平化</strong></p>
<ul>
<li>
<p>String + 序列化：</p>
<p>将一个对象的所有字段“拍平”，用一个序列化工具（如 JSON, MessagePack, Java Serializable）打包成一个大的字符串，然后整体存到一个 Key 下。</p>
<p><strong>例如</strong>：<code v-pre>user:1000</code> -&gt; <code v-pre>&quot;{&quot;id&quot;:1000,&quot;name&quot;:&quot;Alice&quot;,&quot;age&quot;:30,&quot;city&quot;:&quot;Beijing&quot;}&quot;</code></p>
</li>
<li>
<p>Hash：</p>
<p>将一个对象的每个字段作为 Hash 中的一个独立的 Field-Value 对，存储在一个 Key 下。</p>
<p><strong>例如</strong>：<code v-pre>user:1000</code> -&gt; <code v-pre>{ &quot;id&quot;: &quot;1000&quot;, &quot;name&quot;: &quot;Alice&quot;, &quot;age&quot;: &quot;30&quot;, &quot;city&quot;: &quot;Beijing&quot; }</code></p>
</li>
</ul>
<p><strong>详细对比分析</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">特性</th>
<th style="text-align:left">String + 序列化 (JSON/XML等)</th>
<th style="text-align:left">Hash</th>
<th style="text-align:left">胜出方 &amp; 原因</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><strong>1. 读写单个字段</strong></td>
<td style="text-align:left"><strong>差</strong>。必须读取整个字符串，反序列化，修改字段，再序列化整个对象，最后写回。网络开销和CPU开销巨大。</td>
<td style="text-align:left"><strong>优</strong>。可直接使用 <code v-pre>HGET user:1000 name</code> 或 <code v-pre>HMGET user:1000 name age</code> 只读写需要的字段。</td>
<td style="text-align:left"><strong>Hash</strong></td>
</tr>
<tr>
<td style="text-align:left"><strong>2. 内存占用</strong></td>
<td style="text-align:left"><strong>通常更高</strong>。序列化后的字符串包含键名、格式符号（如引号、冒号、花括号），有冗余。且不同大小的字符串无法压缩。</td>
<td style="text-align:left"><strong>通常更低</strong>。Hash 内部结构紧凑，特别是小 Hash 会使用 <strong>ziplist（压缩列表）</strong> 编码，极大地节省内存。Redis 会对 field 和 value 进行优化存储。</td>
<td style="text-align:left"><strong>Hash</strong> (尤其当字段多或值小时)</td>
</tr>
<tr>
<td style="text-align:left"><strong>3. 灵活性</strong></td>
<td style="text-align:left"><strong>差</strong>。要增加一个字段，必须读取整个对象，修改，再写回。无法单独操作。</td>
<td style="text-align:left"><strong>优</strong>。可以动态地增加、删除、修改任意字段，无需影响其他字段。<code v-pre>HSET</code>， <code v-pre>HDEL</code>。</td>
<td style="text-align:left"><strong>Hash</strong></td>
</tr>
<tr>
<td style="text-align:left"><strong>4. 部分更新</strong></td>
<td style="text-align:left"><strong>不支持</strong>。任何字段的修改都导致整个值被重写。</td>
<td style="text-align:left"><strong>原生支持</strong>。只更新变化的字段。</td>
<td style="text-align:left"><strong>Hash</strong></td>
</tr>
<tr>
<td style="text-align:left"><strong>5. 原子性操作</strong></td>
<td style="text-align:left"><strong>弱</strong>。需要客户端自己保证多个操作的原子性（如使用事务或Lua脚本）。</td>
<td style="text-align:left"><strong>强</strong>。所有 Hash 命令都是原子的，天然支持对多个字段的原子读写。</td>
<td style="text-align:left"><strong>Hash</strong></td>
</tr>
<tr>
<td style="text-align:left"><strong>6. 大数据量遍历</strong></td>
<td style="text-align:left"><strong>可行但低效</strong>。需要一次性加载所有数据到客户端，内存压力大。</td>
<td style="text-align:left"><strong>高效</strong>。可以使用 <code v-pre>HSCAN</code> 命令渐进式地、分批地遍历字段，避免阻塞服务器。</td>
<td style="text-align:left"><strong>Hash</strong></td>
</tr>
<tr>
<td style="text-align:left"><strong>String 的优势</strong></td>
<td style="text-align:left"><strong>简单直观</strong>。对于结构简单、不常变动、或者需要作为一个整体传输的对象（如配置项、整个会话），序列化方案更直接。</td>
<td style="text-align:left"><strong>无</strong></td>
<td style="text-align:left"><strong>String</strong> (特定场景)</td>
</tr>
<tr>
<td style="text-align:left"><strong>String 的优势</strong></td>
<td style="text-align:left"><strong>兼容性</strong>。序列化格式（如 JSON）是跨语言的标准，易于与其他系统集成。</td>
<td style="text-align:left"><strong>无</strong></td>
<td style="text-align:left"><strong>String</strong> (特定场景)</td>
</tr>
</tbody>
</table>
<p>为什么Hash比String更省内存？</p>
<p>这是Hash最大的优势之一，其核心在于ziplist（压缩列表）编码。</p>
<p>当一个Hash满足以下条件时，Redis会使用ziplist来存储，而不是标准的哈希表（HashTable）：</p>
<ol>
<li>哈希对象保存的所有字段名和值的字符串长度都小于<code v-pre>hash-max-ziplist-value</code>（默认64字节）</li>
<li>哈希对象保存的字段数量小于<code v-pre>hash-max-ziplist-entries</code>（默认512个）</li>
</ol>
<p><strong>ziplist的特点：</strong></p>
<ul>
<li>连续内存：他将所有的field-value对紧挨着存放在一块连续的内存中，像数组一样</li>
<li>无冗余指针：不像哈希表那样为每个entry分配额外的指针空间</li>
<li>编码优化：对小整数和短字符串使用特殊的编码方式，进一步压缩存储空间</li>
</ul>
<p><strong>举例说明</strong>：
假设有一个用户对象 <code v-pre>user:1000</code>，包含 <code v-pre>name</code>, <code v-pre>age</code>, <code v-pre>city</code> 三个字段。</p>
<ul>
<li><strong>String 序列化 (JSON)</strong>：
<ul>
<li>存储内容：<code v-pre>&quot;{\&quot;name\&quot;:\&quot;Alice\&quot;,\&quot;age\&quot;:30,\&quot;city\&quot;:\&quot;Beijing\&quot;}&quot;</code></li>
<li>包含了大量的语法字符（<code v-pre>{ } &quot; , :</code>）和重复的键名。</li>
</ul>
</li>
<li><strong>Hash (使用 ziplist)</strong>：
<ul>
<li>存储内容可以看作是：<code v-pre>[name, Alice, age, 30, city, Beijing]</code></li>
<li>只有纯粹的数据，没有任何格式符号和重复键名，并且紧密排列。</li>
</ul>
</li>
</ul>
<p>因此，对于存储大量小型对象（如数百万用户资料），使用 Hash 可以显著减少 Redis 的内存占用，降低成本。</p>
<h3 id="redis可以用来干什么" tabindex="-1"><a class="header-anchor" href="#redis可以用来干什么"><span>Redis可以用来干什么？</span></a></h3>
<h3 id="redis为什么快" tabindex="-1"><a class="header-anchor" href="#redis为什么快"><span>Redis为什么快？</span></a></h3>
<blockquote>
<p>总结：
Redis快的原因：内存存储奠定基础，单线程+I/O多路复用解决并发瓶颈，定制化数据结构最小化操作耗时，再加上一系列工程优化，最终实现了“高性能、低延迟”的特性，适合作为缓存、计数器、消息队列等场景的核心组件。</p>
</blockquote>
<ol>
<li>
<p>基于内存存储（核心原因）</p>
<p>Redis的数据默认存储在内存中，而内存的读写速度比磁盘快几个数量级。</p>
<p>虽然Redis也支持持久化（RDB/AOF），但持久化是异步或定期执行的，不影响正常的内存读写性能。</p>
</li>
<li>
<p>单线程模型（避免上下文切换和锁竞争）</p>
<p>Redis6.0之前采用单线程处理网络I/O和命令执行（6.0之后引入多线程仅用于网络读写，命令执行仍单线程），这种设计的好处：</p>
<ul>
<li>无上下文切换开销：多线程需要频繁切换CPU上下文，单线程避免了这部分损耗</li>
<li>无锁竞争：多线程操作共享数据时需要加锁，锁会导致等待和性能下降；</li>
<li>简化设计：单线程逻辑更简单，容易保证命令执行的原子性</li>
</ul>
</li>
<li>
<p>高效的数据结构</p>
<p>Redis 针对不同的数据类型设计了定制化的高效数据结构，而非直接使用语言内置结构：</p>
<ul>
<li>String：动态字符串，相比C字符串，预分配空间减少内存重分配次数，且二进制安全（可存储任意数据，如图片、序列化对象）</li>
<li>Hash：当字段少是用压缩列表（ziplist）（连续内存，节省空间且遍历快）；字段多时转哈希表，兼顾查询和更新效率</li>
<li>List：双向链表（quicklist，结合ziplist和linkedlist的优点，平衡内存和性能）或压缩列表，支持O(1)头尾插入、删除</li>
<li>Set：整数集合（intset，元素全为整数且数量少时，紧凑存储）或哈希表</li>
<li>ZSet：跳表+哈希表，跳表支持O(logN)范围查询和排序，哈希表实现O(1)分数/成员查询</li>
</ul>
</li>
<li>
<p>I/O多路复用（高效处理并发连接）</p>
<p>Redis使用I/O多路复用技术监听多个客户端连接的事件，用一个线程即可高效处理数千级别的并发请求：</p>
<ul>
<li>传统阻塞I/O模型中，一个连接对应一个线程，线程数过多会导致资源耗尽</li>
<li>I/O多路复用让单线程能同时监控多个连接，仅在连接有数据可读、可写时才处理，避免了无效等待，极大提升了并发处理能力</li>
</ul>
</li>
<li>
<p>优化的命令执行流程</p>
<ul>
<li>命令队列：客户端发送的命令先进入队列，按顺序执行（单线程保证原子性），避免乱序执行导致的数据不一致</li>
<li>O(1)/O(logN)时间复杂度：大部分常用命令都是常数时间或对数时间复杂度，极少有O(N)的高成本命令（除非主动使用KEYS * 这类全量扫描命令，生产环境应避免）</li>
<li>管道（Pipeline）：支持将多个命令打包一次性发送，减少网络往返次数(RTT)，大幅提升批量操作的吞吐量</li>
</ul>
</li>
<li>
<p>其他优化细节</p>
<ul>
<li>内存分配器：使用jemalloc替代系统默认的malloc，jemalloc按size class分配内存，减少内存碎片，提升内存利用率。</li>
<li>惰性删除+定期删除：过期键的删除策略结合了惰性删除（访问时检查是否过期）和定期删除（周期性抽样删除过期键），避免集中删除导致的性能波动</li>
<li>持久化优化：RDB是快照式持久化（fork子进程执行，不阻塞主线程），AOF重写也是fork子进程，且支持appendfsync everysec(每秒刷盘，平衡安全性和性能)</li>
</ul>
</li>
</ol>
<h3 id="redis的i-o多路复用" tabindex="-1"><a class="header-anchor" href="#redis的i-o多路复用"><span>Redis的I/O多路复用</span></a></h3>
<h3 id="redis早期为什么选择单线程" tabindex="-1"><a class="header-anchor" href="#redis早期为什么选择单线程"><span>Redis早期为什么选择单线程？</span></a></h3>
<blockquote>
<p>总结：</p>
<ol>
<li>避免CPU切换上下文还有多线程锁竞争这些开销</li>
<li>Redis的瓶颈不在CPU，在内存、网络带宽这些</li>
<li>单线程天然的保证了执行命令的原子性</li>
</ol>
</blockquote>
<p>Redis在6.0版本之前，其核心网络模型采用单线程，主要基于以下几点考量：</p>
<ul>
<li>
<p><strong>性能足够：瓶颈不在CPU</strong></p>
<p>Redis将数据存储于内存，执行命令是纯内存操作，速度极快。官方指出，Redis的性能瓶颈通常在内存容量或网络带宽，而非CPU计算能力。</p>
<p>在普通Linux机器上，单个Redis实例的QPS可达8万+，使用pipeline批量请求时甚至能接近100万。</p>
<p>这意味着，即便单线程已经能够轻松支撑极高并发，引入复杂的多线程并不能带来同比例的收益。</p>
</li>
<li>
<p><strong>避免开销：省去线程切换和锁竞争</strong></p>
<p>多线程虽然能利用多核，但也带来了显著的额外开销：</p>
<ul>
<li>上下文切换：CPU在多个线程之间切换，需要保存和恢复寄存器、栈等状态，消耗客观</li>
<li>同步开销：为保证数据一致性，多线程访问共享数据需引入锁（如互斥锁）。这不仅有加锁、解锁的性能损耗，还可能导致死锁或线程阻塞，使问题排查变得极为复杂。</li>
</ul>
<p>Redis通过单线程+I/O多路复用，用少量线程即可高效管理海量并发连接，完美避开了上述开销。</p>
</li>
</ul>
<h3 id="redis6-0使用多线程是怎么回事" tabindex="-1"><a class="header-anchor" href="#redis6-0使用多线程是怎么回事"><span>Redis6.0使用多线程是怎么回事？</span></a></h3>
<p>Redis 6.0的“多线程”不是指命令的执行是多线程，而是引入了多线程I/O，旨在解决网络瓶颈，同时保留核心的单线程命令执行模型。</p>
<p><strong>🤔 为什么引入多线程？</strong></p>
<p>Redis的性能瓶颈通常不在CPU，而在于内存大小和网络带宽。在6.0版本之前，其单线程模型（一个主线程处理所有请求）存在以下局限：</p>
<ul>
<li>网络I/O瓶颈：随着网络带宽的提升和高并发场景的出现，单个线程处理网络读写的CPU时间占比越来越高，容易达到瓶颈</li>
<li>多核资源浪费：主线程只能利用一个CPU核心，无法充分发挥多核服务器的性能</li>
</ul>
<p>因此Redis 6.0选择将耗时的网络I/O操作进行并行化，而命令执行依旧保持单线程，以最小的改动换区最大的性能收益。</p>
<p><strong>⚙️ 多线程 I/O 的工作原理</strong></p>
<p>Redis 6.0的多线程 I/O模型可以概括为：主线程+多个I/O线程。</p>
<ul>
<li>主线程：负责接收新连接、事件循环调度，以及所有命令的串行执行</li>
<li>I/O线程：仅负责并行处理网络数据的读写和协议解析，不执行任何命令，也不直接访问数据</li>
</ul>
<p>典型处理流程：</p>
<ol>
<li>接收连接：主线程accept新连接，并将socket放入待处理队列</li>
<li>分发读任务：当socket可读时，主线程将连接通过轮询分配给I/O线程，自己也参与读取</li>
<li>并行读&amp;解析：所有I/O线程并行从socket读取数据并解析成命令对象。主线程会阻塞等待所有I/O完成</li>
<li>串行执行：主线程从队列中取出已解析的命令，单线程顺序执行。此过程无锁，保证了原子性</li>
<li>分发写任务：主线程将执行结果放入回复队列，并分配给I/O线程进行回写。主线程同样会阻塞等待</li>
<li>并行写：I/O线程并行将数据写回客户端，完成后清空队列，等待下一轮事件</li>
</ol>
<p>设计特点：</p>
<ul>
<li>读写分离：I/O线程在同一时刻要么全部读，要么全部写，避免复杂的锁竞争</li>
<li>主线程参与：主线程也分担一部分I/O工作，以充分利用多核</li>
<li>无数据竞争：因为数据访问仍在主线程，所以无需为Redis的核心数据结构加锁</li>
</ul>
<p><strong>🛠️ 如何配置与使用？</strong></p>
<ol>
<li>默认状态</li>
</ol>
<p>多线程 I/O 在 Redis 6.0 及以后版本中<strong>默认是关闭的</strong>。即使您的服务器是多核CPU，也需要手动配置才能启用该功能。</p>
<ol start="2">
<li>配置方法</li>
</ol>
<p>必须在 <code v-pre>redis.conf</code> 配置文件中<strong>静态配置</strong>，重启 Redis 服务后生效。<strong>不支持</strong>在运行时通过 <code v-pre>CONFIG SET</code> 命令动态修改。</p>
<div class="language-ini line-numbers-mode" data-highlighter="shiki" data-ext="ini" data-title="ini" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 在 redis.conf 中添加或修改以下行</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 开启 IO 线程数量。建议设置为 CPU 核心数 - 1，且最大值不要超过 8。</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 例如，在 8 核 CPU 上，可以设置为 6。</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#98C379">io-threads 4</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 是否让 IO 线程也负责读取客户端数据和解析协议。默认为 no。</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 设置为 yes 才能发挥多线程 I/O 的最大效能。</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#98C379">io-threads-do-reads yes</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>配置建议</li>
</ol>
<ul>
<li><strong>CPU 核数 &lt; 4</strong>：通常无需开启，多线程带来的调度开销可能大于性能收益。</li>
<li><strong>4 核 CPU</strong>：建议 <code v-pre>io-threads</code> 设为 <strong>2 或 3</strong>。</li>
<li><strong>8 核 CPU</strong>：建议设为 <strong>6</strong>。</li>
<li><strong>&gt; 8 核 CPU</strong>：收益会递减，不建议超过 <strong>8</strong>，过多的线程反而会成为负担。</li>
</ul>
<ol start="4">
<li>注意事项</li>
</ol>
<ul>
<li><strong>SSL/TLS 限制</strong>：当 Redis 启用了 SSL/TLS 加密时，<strong>不支持</strong>多线程 I/O 功能。</li>
<li><strong>适用场景</strong>：如果您的服务器 CPU 使用率不高，但吞吐量已达上限，这通常意味着瓶颈在于网络或客户端。此时开启多线程 I/O 可能会有帮助。但如果瓶颈在内存或命令执行本身，则提升不明显。</li>
</ul>
<h3 id="redis的常用命令" tabindex="-1"><a class="header-anchor" href="#redis的常用命令"><span>Redis的常用命令</span></a></h3>
<p><strong>一、通用基础命令</strong></p>
<p>用于连接、退出、查看状态等基础操作：</p>
<table>
<thead>
<tr>
<th>命令</th>
<th>作用</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>PING</code></td>
<td>测试连接是否正常</td>
<td><code v-pre>PING</code> → 返回 <code v-pre>PONG</code></td>
</tr>
<tr>
<td><code v-pre>AUTH password</code></td>
<td>认证密码（若开启保护模式）</td>
<td><code v-pre>AUTH 123456</code></td>
</tr>
<tr>
<td><code v-pre>SELECT index</code></td>
<td>切换数据库（默认16个库，索引0~15）</td>
<td><code v-pre>SELECT 1</code> → 切换到1号库</td>
</tr>
<tr>
<td><code v-pre>QUIT</code>/<code v-pre>EXIT</code></td>
<td>退出客户端</td>
<td><code v-pre>QUIT</code></td>
</tr>
<tr>
<td><code v-pre>INFO [section]</code></td>
<td>查看服务器信息（如内存、CPU、持久化）</td>
<td><code v-pre>INFO memory</code> → 查看内存使用</td>
</tr>
<tr>
<td><code v-pre>CONFIG GET *</code></td>
<td>获取所有配置参数</td>
<td><code v-pre>CONFIG GET port</code> → 查看端口</td>
</tr>
<tr>
<td><code v-pre>CONFIG SET key val</code></td>
<td>动态修改配置（重启失效）</td>
<td><code v-pre>CONFIG SET maxmemory 1G</code></td>
</tr>
</tbody>
</table>
<p><strong>二、字符串（String）：最基础的键值类型</strong></p>
<p>Redis 中最常用的数据类型，支持二进制安全（可存图片、序列化对象等）。</p>
<table>
<thead>
<tr>
<th>命令</th>
<th>作用</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>SET key value</code></td>
<td>设置键值对（覆盖旧值）</td>
<td><code v-pre>SET name &quot;Alice&quot;</code></td>
</tr>
<tr>
<td><code v-pre>SETEX key secs val</code></td>
<td>设置键值对并指定过期时间（秒）</td>
<td><code v-pre>SETEX code 60 &quot;1234&quot;</code></td>
</tr>
<tr>
<td><code v-pre>PSETEX key ms val</code></td>
<td>设置键值对并指定过期时间（毫秒）</td>
<td><code v-pre>PSETEX token 3000 &quot;abc&quot;</code></td>
</tr>
<tr>
<td><code v-pre>GET key</code></td>
<td>获取键对应的值（不存在返回<code v-pre>nil</code>）</td>
<td><code v-pre>GET name</code> → <code v-pre>&quot;Alice&quot;</code></td>
</tr>
<tr>
<td><code v-pre>MSET key1 val1 key2 val2 ...</code></td>
<td>批量设置键值对</td>
<td><code v-pre>MSET age 20 gender &quot;F&quot;</code></td>
</tr>
<tr>
<td><code v-pre>MGET key1 key2 ...</code></td>
<td>批量获取值（不存在的键返回<code v-pre>nil</code>）</td>
<td><code v-pre>MGET age gender</code> → <code v-pre>[20,&quot;F&quot;]</code></td>
</tr>
<tr>
<td><code v-pre>INCR key</code></td>
<td>整数值自增1（值需为整数，否则报错）</td>
<td><code v-pre>SET num 10</code> → <code v-pre>INCR num</code> → 11</td>
</tr>
<tr>
<td><code v-pre>INCRBY key step</code></td>
<td>整数值自增指定步长</td>
<td><code v-pre>INCRBY num 5</code> → 16</td>
</tr>
<tr>
<td><code v-pre>DECR key</code></td>
<td>整数值自减1</td>
<td><code v-pre>DECR num</code> → 15</td>
</tr>
<tr>
<td><code v-pre>DECRBY key step</code></td>
<td>整数值自减指定步长</td>
<td><code v-pre>DECRBY num 3</code> → 12</td>
</tr>
<tr>
<td><code v-pre>APPEND key val</code></td>
<td>向字符串末尾追加内容</td>
<td><code v-pre>APPEND name &quot; Smith&quot;</code> → <code v-pre>&quot;Alice Smith&quot;</code></td>
</tr>
<tr>
<td><code v-pre>STRLEN key</code></td>
<td>获取字符串长度</td>
<td><code v-pre>STRLEN name</code> → 11</td>
</tr>
<tr>
<td><code v-pre>SETNX key value</code></td>
<td>仅当键不存在时设置（分布式锁常用）</td>
<td><code v-pre>SETNX lock 1</code> → 1（成功）/0（失败）</td>
</tr>
</tbody>
</table>
<p><strong>三、哈希（Hash）：键值对的集合（类似对象）</strong></p>
<p>适合存储结构化数据（如用户信息：<code v-pre>user:1</code> → <code v-pre>{name:&quot;Alice&quot;, age:20}</code>）。</p>
<table>
<thead>
<tr>
<th>命令</th>
<th>作用</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>HSET key field value</code></td>
<td>设置哈希表中字段的值（覆盖旧值）</td>
<td><code v-pre>HSET user:1 name &quot;Alice&quot; age 20</code></td>
</tr>
<tr>
<td><code v-pre>HMSET key f1 v1 f2 v2 ...</code></td>
<td>批量设置哈希字段（Redis 4.0+ 推荐用<code v-pre>HSET</code>）</td>
<td><code v-pre>HMSET user:1 name &quot;Alice&quot; age 20</code></td>
</tr>
<tr>
<td><code v-pre>HGET key field</code></td>
<td>获取哈希表中指定字段的值</td>
<td><code v-pre>HGET user:1 name</code> → <code v-pre>&quot;Alice&quot;</code></td>
</tr>
<tr>
<td><code v-pre>HMGET key f1 f2 ...</code></td>
<td>批量获取哈希字段的值</td>
<td><code v-pre>HMGET user:1 name age</code> → <code v-pre>[&quot;Alice&quot;,20]</code></td>
</tr>
<tr>
<td><code v-pre>HGETALL key</code></td>
<td>获取哈希表中所有字段和值（慎用大哈希）</td>
<td><code v-pre>HGETALL user:1</code> → <code v-pre>[&quot;name&quot;,&quot;Alice&quot;,&quot;age&quot;,20]</code></td>
</tr>
<tr>
<td><code v-pre>HKEYS key</code></td>
<td>获取哈希表中所有字段名</td>
<td><code v-pre>HKEYS user:1</code> → <code v-pre>[&quot;name&quot;,&quot;age&quot;]</code></td>
</tr>
<tr>
<td><code v-pre>HVALS key</code></td>
<td>获取哈希表中所有值</td>
<td><code v-pre>HVALS user:1</code> → <code v-pre>[&quot;Alice&quot;,20]</code></td>
</tr>
<tr>
<td><code v-pre>HEXISTS key field</code></td>
<td>判断字段是否存在（存在返回1，否则0）</td>
<td><code v-pre>HEXISTS user:1 name</code> → 1</td>
</tr>
<tr>
<td><code v-pre>HDEL key field1 ...</code></td>
<td>删除哈希表中的指定字段</td>
<td><code v-pre>HDEL user:1 age</code> → 1（成功删除数）</td>
</tr>
<tr>
<td><code v-pre>HLEN key</code></td>
<td>获取哈希表的字段数量</td>
<td><code v-pre>HLEN user:1</code> → 1</td>
</tr>
<tr>
<td><code v-pre>HINCRBY key field step</code></td>
<td>哈希字段的整数值自增</td>
<td><code v-pre>HINCRBY user:1 age 1</code> → 21</td>
</tr>
</tbody>
</table>
<p><strong>四、列表（List）：有序可重复的元素集合</strong></p>
<p>基于双向链表实现，支持两端操作（栈/队列/阻塞队列）。</p>
<table>
<thead>
<tr>
<th>命令</th>
<th>作用</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>LPUSH key val1 val2 ...</code></td>
<td>从列表左侧（头部）插入元素</td>
<td><code v-pre>LPUSH fruits &quot;apple&quot; &quot;banana&quot;</code> → 列表变为 <code v-pre>[&quot;banana&quot;,&quot;apple&quot;]</code></td>
</tr>
<tr>
<td><code v-pre>RPUSH key val1 val2 ...</code></td>
<td>从列表右侧（尾部）插入元素</td>
<td><code v-pre>RPUSH fruits &quot;cherry&quot;</code> → <code v-pre>[&quot;banana&quot;,&quot;apple&quot;,&quot;cherry&quot;]</code></td>
</tr>
<tr>
<td><code v-pre>LPOP key</code></td>
<td>移除并返回列表左侧第一个元素</td>
<td><code v-pre>LPOP fruits</code> → <code v-pre>&quot;banana&quot;</code></td>
</tr>
<tr>
<td><code v-pre>RPOP key</code></td>
<td>移除并返回列表右侧第一个元素</td>
<td><code v-pre>RPOP fruits</code> → <code v-pre>&quot;cherry&quot;</code></td>
</tr>
<tr>
<td><code v-pre>LRANGE key start stop</code></td>
<td>获取列表中指定范围的元素（0开始，-1表示最后一个）</td>
<td><code v-pre>LRANGE fruits 0 -1</code> → <code v-pre>[&quot;apple&quot;]</code></td>
</tr>
<tr>
<td><code v-pre>LLEN key</code></td>
<td>获取列表长度</td>
<td><code v-pre>LLEN fruits</code> → 1</td>
</tr>
<tr>
<td><code v-pre>LINDEX key index</code></td>
<td>获取列表中指定索引的元素</td>
<td><code v-pre>LINDEX fruits 0</code> → <code v-pre>&quot;apple&quot;</code></td>
</tr>
<tr>
<td><code v-pre>LREM key count val</code></td>
<td>移除列表中指定数量的匹配元素（<code v-pre>count&gt;0</code>从左删，<code v-pre>&lt;0</code>从右删，<code v-pre>=0</code>删所有）</td>
<td><code v-pre>LREM fruits 1 &quot;apple&quot;</code> → 删除1个&quot;apple&quot;</td>
</tr>
<tr>
<td><code v-pre>BLPOP key1 key2 timeout</code></td>
<td>阻塞式左弹出（无元素时阻塞timeout秒，0表示永久阻塞）</td>
<td><code v-pre>BLPOP tasks 10</code> → 10秒内tasks有元素则返回</td>
</tr>
<tr>
<td><code v-pre>BRPOP key1 key2 timeout</code></td>
<td>阻塞式右弹出</td>
<td><code v-pre>BRPOP tasks 10</code></td>
</tr>
</tbody>
</table>
<p><strong>五、集合（Set）：无序唯一的字符串集合</strong></p>
<p>支持交集、并集、差集等数学运算，适合去重或标签场景。</p>
<table>
<thead>
<tr>
<th>命令</th>
<th>作用</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>SADD key member1 ...</code></td>
<td>向集合添加元素（重复元素自动忽略）</td>
<td><code v-pre>SADD tags &quot;redis&quot; &quot;mysql&quot; &quot;redis&quot;</code> → 实际添加2个</td>
</tr>
<tr>
<td><code v-pre>SMEMBERS key</code></td>
<td>获取集合中所有元素（慎用大集合）</td>
<td><code v-pre>SMEMBERS tags</code> → <code v-pre>[&quot;redis&quot;,&quot;mysql&quot;]</code></td>
</tr>
<tr>
<td><code v-pre>SISMEMBER key member</code></td>
<td>判断元素是否在集合中（是返回1，否则0）</td>
<td><code v-pre>SISMEMBER tags &quot;redis&quot;</code> → 1</td>
</tr>
<tr>
<td><code v-pre>SCARD key</code></td>
<td>获取集合元素数量</td>
<td><code v-pre>SCARD tags</code> → 2</td>
</tr>
<tr>
<td><code v-pre>SREM key member1 ...</code></td>
<td>移除集合中指定元素</td>
<td><code v-pre>SREM tags &quot;mysql&quot;</code> → 1</td>
</tr>
<tr>
<td><code v-pre>SPOP key [count]</code></td>
<td>随机移除并返回count个元素（默认1）</td>
<td><code v-pre>SPOP tags 1</code> → <code v-pre>&quot;redis&quot;</code></td>
</tr>
<tr>
<td><code v-pre>SRANDMEMBER key [count]</code></td>
<td>随机返回count个元素（不移除）</td>
<td><code v-pre>SRANDMEMBER tags 1</code> → <code v-pre>&quot;mysql&quot;</code></td>
</tr>
<tr>
<td><code v-pre>SUNION key1 key2 ...</code></td>
<td>计算多个集合的并集</td>
<td><code v-pre>SUNION set1 set2</code></td>
</tr>
<tr>
<td><code v-pre>SINTER key1 key2 ...</code></td>
<td>计算多个集合的交集（共同好友场景）</td>
<td><code v-pre>SINTER user:1:friends user:2:friends</code></td>
</tr>
<tr>
<td><code v-pre>SDIFF key1 key2 ...</code></td>
<td>计算集合的差集（key1有但其他没有的元素）</td>
<td><code v-pre>SDIFF set1 set2</code></td>
</tr>
</tbody>
</table>
<p><strong>六、有序集合（Sorted Set/ZSet）：带分数的集合</strong></p>
<p>每个元素关联一个<strong>分数（score）</strong>，按分数排序（可重复，但元素唯一），适合排行榜、延迟队列。</p>
<table>
<thead>
<tr>
<th>命令</th>
<th>作用</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>ZADD key score1 member1 ...</code></td>
<td>添加元素及分数（分数可重复，元素不可重复）</td>
<td><code v-pre>ZADD rank 90 &quot;Alice&quot; 85 &quot;Bob&quot; 95 &quot;Charlie&quot;</code></td>
</tr>
<tr>
<td><code v-pre>ZRANGE key start stop [WITHSCORES]</code></td>
<td>按分数升序返回指定范围元素（WITHSCORES带分数）</td>
<td><code v-pre>ZRANGE rank 0 2 WITHSCORES</code> → <code v-pre>[&quot;Bob&quot;,85,&quot;Alice&quot;,90,&quot;Charlie&quot;,95]</code></td>
</tr>
<tr>
<td><code v-pre>ZREVRANGE key start stop [WITHSCORES]</code></td>
<td>按分数降序返回指定范围元素（排行榜常用）</td>
<td><code v-pre>ZREVRANGE rank 0 2 WITHSCORES</code> → <code v-pre>[&quot;Charlie&quot;,95,&quot;Alice&quot;,90,&quot;Bob&quot;,85]</code></td>
</tr>
<tr>
<td><code v-pre>ZCARD key</code></td>
<td>获取有序集合元素数量</td>
<td><code v-pre>ZCARD rank</code> → 3</td>
</tr>
<tr>
<td><code v-pre>ZSCORE key member</code></td>
<td>获取元素的分数</td>
<td><code v-pre>ZSCORE rank &quot;Alice&quot;</code> → 90</td>
</tr>
<tr>
<td><code v-pre>ZINCRBY key increment member</code></td>
<td>增加元素的分数</td>
<td><code v-pre>ZINCRBY rank 5 &quot;Bob&quot;</code> → Bob分数变为90</td>
</tr>
<tr>
<td><code v-pre>ZREM key member1 ...</code></td>
<td>移除有序集合中的元素</td>
<td><code v-pre>ZREM rank &quot;Bob&quot;</code> → 1</td>
</tr>
<tr>
<td><code v-pre>ZRANK key member</code></td>
<td>获取元素的升序排名（从0开始）</td>
<td><code v-pre>ZRANK rank &quot;Alice&quot;</code> → 1（升序排第2）</td>
</tr>
<tr>
<td><code v-pre>ZREVRANK key member</code></td>
<td>获取元素的降序排名（从0开始）</td>
<td><code v-pre>ZREVRANK rank &quot;Alice&quot;</code> → 1（降序排第2）</td>
</tr>
<tr>
<td><code v-pre>ZINTERSTORE dest numkeys key1 ... [WEIGHTS weight] [AGGREGATE SUM/MIN/MAX]</code></td>
<td>计算有序集合的交集并存储到dest</td>
<td><code v-pre>ZINTERSTORE total 2 rank1 rank2 WEIGHTS 1 2 AGGREGATE SUM</code></td>
</tr>
<tr>
<td><code v-pre>ZUNIONSTORE dest numkeys key1 ... [WEIGHTS weight] [AGGREGATE SUM/MIN/MAX]</code></td>
<td>计算有序集合的并集并存储到dest</td>
<td><code v-pre>ZUNIONSTORE total 2 rank1 rank2</code></td>
</tr>
</tbody>
</table>
<p><strong>七、位图（Bitmap）：以位为单位的操作</strong></p>
<p>本质是字符串，但按位（bit）处理，适合统计活跃用户、签到等场景（极大节省空间）。</p>
<table>
<thead>
<tr>
<th>命令</th>
<th>作用</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>SETBIT key offset value</code></td>
<td>设置指定偏移量的位值（0或1）</td>
<td><code v-pre>SETBIT sign:user:1 0 1</code> → 1月1日签到</td>
</tr>
<tr>
<td><code v-pre>GETBIT key offset</code></td>
<td>获取指定偏移量的位值</td>
<td><code v-pre>GETBIT sign:user:1 0</code> → 1</td>
</tr>
<tr>
<td><code v-pre>BITCOUNT key [start end]</code></td>
<td>统计位值为1的数量（start/end是字节索引，默认全量）</td>
<td><code v-pre>BITCOUNT sign:user:1</code> → 1（1月1日签到）</td>
</tr>
<tr>
<td><code v-pre>BITOP AND/OR/XOR/NOT dest key1 key2 ...</code></td>
<td>对多个位图进行位运算（与/或/异或/非）</td>
<td><code v-pre>BITOP OR active:week sign:day1 sign:day2</code></td>
</tr>
</tbody>
</table>
<p><strong>八、HyperLogLog：基数统计（去重计数）</strong></p>
<p>用于估算集合中<strong>不重复元素的个数</strong>（误差约0.81%），占用空间极小（约12KB），适合UV统计等场景。</p>
<table>
<thead>
<tr>
<th>命令</th>
<th>作用</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>PFADD key element1 ...</code></td>
<td>添加元素到HyperLogLog</td>
<td><code v-pre>PFADD uv:20260211 &quot;user1&quot; &quot;user2&quot; &quot;user1&quot;</code></td>
</tr>
<tr>
<td><code v-pre>PFCOUNT key1 ...</code></td>
<td>估算一个或多个HyperLogLog的基数</td>
<td><code v-pre>PFCOUNT uv:20260211</code> → 2</td>
</tr>
<tr>
<td><code v-pre>PFMERGE dest key1 key2 ...</code></td>
<td>合并多个HyperLogLog到dest</td>
<td><code v-pre>PFMERGE uv:week uv:day1 uv:day2</code></td>
</tr>
</tbody>
</table>
<p><strong>九、地理空间（Geospatial）：位置相关操作</strong></p>
<p>基于ZSet实现，用于存储经纬度并计算距离、范围查询（如附近的人）。</p>
<table>
<thead>
<tr>
<th>命令</th>
<th>作用</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>GEOADD key longitude latitude member ...</code></td>
<td>添加地理位置（经度、纬度、成员）</td>
<td><code v-pre>GEOADD cities 116.40 39.90 &quot;Beijing&quot; 121.47 31.23 &quot;Shanghai&quot;</code></td>
</tr>
<tr>
<td><code v-pre>GEODIST key member1 member2 [unit]</code></td>
<td>计算两个成员的距离（unit：m/km/mi/ft）</td>
<td><code v-pre>GEODIST cities Beijing Shanghai km</code> → ~1067</td>
</tr>
<tr>
<td><code v-pre>GEORADIUS key longitude latitude radius unit [WITHCOORD/WITHDIST/WITHHASH]</code></td>
<td>查询指定坐标半径内的成员</td>
<td><code v-pre>GEORADIUS cities 116.40 39.90 500 km WITHCOORD</code></td>
</tr>
<tr>
<td><code v-pre>GEORADIUSBYMEMBER key member radius unit ...</code></td>
<td>查询指定成员半径内的成员</td>
<td><code v-pre>GEORADIUSBYMEMBER cities Beijing 1000 km</code></td>
</tr>
</tbody>
</table>
<p><strong>十、事务与管道</strong></p>
<ol>
<li>事务（保证原子性，但不支持回滚）</li>
</ol>
<p>Redis 事务通过 <code v-pre>MULTI</code>、<code v-pre>EXEC</code> 包裹命令，<strong>按顺序执行，不被其他命令打断</strong>，但某条命令错误不会导致整个事务回滚（仅跳过错误命令）。</p>
<table>
<thead>
<tr>
<th>命令</th>
<th>作用</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>MULTI</code></td>
<td>开启事务</td>
<td><code v-pre>MULTI</code></td>
</tr>
<tr>
<td><code v-pre>EXEC</code></td>
<td>执行事务队列中的命令</td>
<td><code v-pre>EXEC</code></td>
</tr>
<tr>
<td><code v-pre>DISCARD</code></td>
<td>取消事务（清空队列）</td>
<td><code v-pre>DISCARD</code></td>
</tr>
<tr>
<td><code v-pre>WATCH key</code></td>
<td>监控键，若被修改则事务取消（乐观锁）</td>
<td><code v-pre>WATCH balance</code> → <code v-pre>MULTI</code> → <code v-pre>DECR balance 100</code> → <code v-pre>EXEC</code>（若balance被改则EXEC返回nil）</td>
</tr>
</tbody>
</table>
<ol start="2">
<li>管道（Pipeline）</li>
</ol>
<p>将多个命令打包发送，<strong>减少网络往返时间（RTT）</strong>，提升性能（非原子性，命令按顺序执行但可能被其他客户端命令穿插）。</p>
<p>示例（Redis CLI）：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 管道命令（Linux shell）</span></span>
<span class="line"><span>echo -e "SET a 1\nSET b 2\nGET a\nGET b" | redis-cli --pipe</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>十一、持久化相关命令</strong></p>
<p>Redis 支持 RDB（快照）和 AOF（日志）两种持久化方式，相关命令：</p>
<table>
<thead>
<tr>
<th>命令</th>
<th>作用</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>SAVE</code></td>
<td>同步生成RDB快照（阻塞主线程，慎用）</td>
<td><code v-pre>SAVE</code></td>
</tr>
<tr>
<td><code v-pre>BGSAVE</code></td>
<td>异步生成RDB快照（后台执行，不阻塞）</td>
<td><code v-pre>BGSAVE</code></td>
</tr>
<tr>
<td><code v-pre>LASTSAVE</code></td>
<td>获取最后一次成功生成RDB的时间戳</td>
<td><code v-pre>LASTSAVE</code> → 1644567890</td>
</tr>
<tr>
<td><code v-pre>BGREWRITEAOF</code></td>
<td>异步重写AOF文件（压缩冗余命令）</td>
<td><code v-pre>BGREWRITEAOF</code></td>
</tr>
</tbody>
</table>
<p><strong>十二、键（Key）管理命令</strong></p>
<p>用于查找、删除、过期等操作：</p>
<table>
<thead>
<tr>
<th>命令</th>
<th>作用</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>KEYS pattern</code></td>
<td>查找匹配模式的键（生产环境慎用，可能阻塞）</td>
<td><code v-pre>KEYS user:*</code> → 查找所有user:开头的键</td>
</tr>
<tr>
<td><code v-pre>SCAN cursor [MATCH pattern] [COUNT count]</code></td>
<td>渐进式遍历键（非阻塞，替代KEYS）</td>
<td><code v-pre>SCAN 0 MATCH user:* COUNT 10</code></td>
</tr>
<tr>
<td><code v-pre>DEL key1 key2 ...</code></td>
<td>删除键（返回成功删除的数量）</td>
<td><code v-pre>DEL name age</code> → 2</td>
</tr>
<tr>
<td><code v-pre>EXISTS key</code></td>
<td>判断键是否存在（存在返回1，否则0）</td>
<td><code v-pre>EXISTS name</code> → 1</td>
</tr>
<tr>
<td><code v-pre>EXPIRE key secs</code></td>
<td>设置键的过期时间（秒）</td>
<td><code v-pre>EXPIRE name 3600</code> → 1</td>
</tr>
<tr>
<td><code v-pre>PEXPIRE key ms</code></td>
<td>设置键的过期时间（毫秒）</td>
<td><code v-pre>PEXPIRE name 3600000</code></td>
</tr>
<tr>
<td><code v-pre>TTL key</code></td>
<td>查看键的剩余过期时间（-1永不过期，-2已过期）</td>
<td><code v-pre>TTL name</code> → 3599</td>
</tr>
<tr>
<td><code v-pre>PTTL key</code></td>
<td>查看键的剩余过期时间（毫秒）</td>
<td><code v-pre>PTTL name</code> → 3599000</td>
</tr>
<tr>
<td><code v-pre>PERSIST key</code></td>
<td>移除键的过期时间（永不过期）</td>
<td><code v-pre>PERSIST name</code> → 1</td>
</tr>
<tr>
<td><code v-pre>TYPE key</code></td>
<td>查看键的数据结构类型</td>
<td><code v-pre>TYPE name</code> → &quot;string&quot;</td>
</tr>
<tr>
<td><code v-pre>RENAME oldkey newkey</code></td>
<td>重命名键（若newkey存在则覆盖）</td>
<td><code v-pre>RENAME name username</code></td>
</tr>
<tr>
<td><code v-pre>RENAMENX oldkey newkey</code></td>
<td>仅当newkey不存在时重命名（成功返回1）</td>
<td><code v-pre>RENAMENX name username</code> → 1</td>
</tr>
</tbody>
</table>
<p>以上是 Redis 最常用的命令，覆盖了日常开发的大部分场景。实际使用时需注意<strong>命令的时间复杂度</strong>（如<code v-pre>KEYS</code>是O(N)，大集群下会阻塞），优先选择高效命令（如<code v-pre>SCAN</code>替代<code v-pre>KEYS</code>、<code v-pre>HGETALL</code>慎用大哈希）。</p>
<h3 id="单线程的redis-qps能到多少" tabindex="-1"><a class="header-anchor" href="#单线程的redis-qps能到多少"><span>单线程的Redis QPS能到多少？</span></a></h3>
<blockquote>
<p>总结：</p>
<p>理论峰值10万到12万，实际生产中3万到6万</p>
</blockquote>
<p>首先需要明确，我们通常说的“Redis是单线程的”，指的是其核心命令执行流程由单个主线程完成。从Redis 4.0和6.0版本开始，后台线程和I/O多线程已被引入以处理特定耗时任务，但这并不改变命令执行的单线程模型。</p>
<p>在讨论QPS时，通常区分两种场景：</p>
<ul>
<li>
<p>理论峰值</p>
<p>​	在理想的基准测试环境下，使用redis-benchmark对简单命令（如GET/SET）进行压测，并配合pipeline和多核CPU，单个Redis实例的QPS通常能达到10万至12万左右。</p>
</li>
<li>
<p>生产环境（线上实际）</p>
<p>​	线上业务的复杂度远超基准测试，实际QPS会受命令类型、数据大小、网络状况等多种因素影响，通常表现如下：</p>
<ul>
<li>常见范围：多数线上服务的QPS稳定在3万至6万之间</li>
<li>复杂场景：若业务涉及大key、复杂命令（如SORT、ZUNIONSTORE）、跨机房高延迟网络，或AOF配置为always刷盘等，QPS可能降至数万甚至更低</li>
</ul>
</li>
</ul>
<p>核心瓶颈：</p>
<p>Redis单实例的QPS天花板主要受限于单个CPU核心的性能，而非多线程并发能力。一旦命令执行本身成为瓶颈（如处理大key、执行慢命令），及时增加客户端并发也无法提升QPS。。</p>
<h2 id="持久化" tabindex="-1"><a class="header-anchor" href="#持久化"><span>持久化</span></a></h2>
<h3 id="redis持久化方式有哪些" tabindex="-1"><a class="header-anchor" href="#redis持久化方式有哪些"><span>Redis持久化方式有哪些？</span></a></h3>
<p>主要有两种，RDB和AOF。</p>
<p>RDB通过创建时间点快照来实现持久化，AOF通过记录每个写操作命令来实现持久化。</p>
<p>这两种方式可以单独使用，也可以同时使用。这样就可以波爱护增Redis服务器在重启后不丢失数据，通过RDB和AOF文件来恢复内存中原有的数据。</p>
<h3 id="rdb" tabindex="-1"><a class="header-anchor" href="#rdb"><span>RDB</span></a></h3>
<p>RDB（Redis Database Backup）是一种常见的快照式持久化方式。它将Redis在内存中的数据以二进制文件的形式定期保存到磁盘上，形成一个快照文件（通常名为<strong>dump.rdb</strong>）。</p>
<h4 id="工作原理" tabindex="-1"><a class="header-anchor" href="#工作原理"><span><strong>工作原理：</strong></span></a></h4>
<ol>
<li>触发机制：RDB可以手动触发或自动触发
<ul>
<li>手动触发：使用命令SAVE或BGSAVE。SAVE会阻塞主进程，直到快照完成；BGSAVE是异步的，使用fork子进程生成快照，不会阻塞主进程</li>
<li>自动触发：根据配置文件中的规则，当满足一定条件时（如在指定时间内有指定数量的键发生变化），Redis会自动执行BGSAVE</li>
</ul>
</li>
<li>快照过程：
<ul>
<li>Redis fork出子进程</li>
<li>子进程将内存数据序列化为RDB文件</li>
<li>完成后，替换旧的RDB文件</li>
<li>如果配置了压缩，文件会使用LZF算法压缩以节省空间</li>
</ul>
</li>
<li>加载过程：Redis启动时，如果存在RDB文件，会自动加载它来恢复数据。加载速度较快，因为是直接从二进制文件读取。</li>
</ol>
<h4 id="rdb的配置" tabindex="-1"><a class="header-anchor" href="#rdb的配置"><span><strong>RDB的配置：</strong></span></a></h4>
<p>在Redis的配置人间redis.conf中，可以设置RDB的相关参数：</p>
<ul>
<li>保存策略：例如 save 900 1表示如果在900秒内至少有1个键被修改，则出发快照。多个save规则可以并存</li>
<li>文件路径：dbfilename &quot;dump.rdb&quot;指定文件名，dir &quot;/path/to/dir&quot;指定目录</li>
<li>压缩：让rdbcompression yes启用压缩</li>
<li>校验： rdbchecksum yes启用CRC64校验以确保文件完整性</li>
<li>停止写入：stop-writes-on-bgsave-error yes 如果快照失败，停止写入以避免数据不一致</li>
</ul>
<h4 id="示例配置片段" tabindex="-1"><a class="header-anchor" href="#示例配置片段"><span>示例配置片段:</span></a></h4>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>save 3600 1</span></span>
<span class="line"><span>save 300 100</span></span>
<span class="line"><span>save 60 10000</span></span>
<span class="line"><span>dbfilename dump.rdb</span></span>
<span class="line"><span>dir ./</span></span>
<span class="line"><span>rdbcompression yes</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="rdb的优缺点" tabindex="-1"><a class="header-anchor" href="#rdb的优缺点"><span><strong>RDB的优缺点</strong></span></a></h4>
<table>
<thead>
<tr>
<th>方面</th>
<th>优点</th>
<th>缺点</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>性能</strong></td>
<td>生成快照时主进程不阻塞（使用 BGSAVE），适合高负载场景。</td>
<td>fork 子进程需要消耗内存（几乎双倍于当前数据集），可能导致短暂延迟。</td>
</tr>
<tr>
<td><strong>数据完整性</strong></td>
<td>恢复速度快，文件紧凑，便于备份和传输。</td>
<td>只能恢复到最后一次快照点，中间的修改可能丢失（RPO 较高）。</td>
</tr>
<tr>
<td><strong>适用场景</strong></td>
<td>适合对数据丢失有一定容忍度的应用，如缓存系统或非实时数据。</td>
<td>不适合对数据零丢失要求高的场景（如金融系统）。</td>
</tr>
<tr>
<td><strong>文件大小</strong></td>
<td>压缩后文件较小，易于存储。</td>
<td>如果数据频繁变化，快照文件可能较大。</td>
</tr>
</tbody>
</table>
<h3 id="aof" tabindex="-1"><a class="header-anchor" href="#aof"><span>AOF</span></a></h3>
<p>AOF(Append Only File)是一种日志式的持久化机制，它将每条写命令追加到AOF文件（通常名为appendonly.aof）中，形成一个操作日志。这种方式更加注重数据完整性，适合对数据丢失零容忍的场景。</p>
<h4 id="aof的工作原理" tabindex="-1"><a class="header-anchor" href="#aof的工作原理"><span>AOF的工作原理</span></a></h4>
<ul>
<li>记录方式：Redis将每条写命令（如SET、DEL）以Redis协议格式追加到AOF文件。</li>
<li>同步策略（fsync）：
<ul>
<li>always：每条命令都同步到磁盘（最安全，但性能低）</li>
<li>everysec：每秒同步一次（默认，平衡安全与性能）</li>
<li>no：有操作系统决定（最快，但风险高）</li>
</ul>
</li>
<li>重写过程（Rewrite）
<ul>
<li>AOF文件会随着操作增长变大，Redis可自动或手动触发BGREWRITEAOF，重写为最小命令集的等效文件，减少大小</li>
<li>重写时fork子进程，不阻塞主进程</li>
</ul>
</li>
<li>恢复过程：启动时，Redis重放AOF文件中的所有命令，重建数据集。恢复时间随文件大小而定。</li>
</ul>
<h4 id="aof的配置" tabindex="-1"><a class="header-anchor" href="#aof的配置"><span>AOF的配置</span></a></h4>
<p>在 redis.conf 中配置：</p>
<ul>
<li>appendonly yes：启用 AOF。</li>
<li>appendfilename &quot;appendonly.aof&quot;：文件名。</li>
<li>appendfsync everysec：同步策略。</li>
<li>auto-aof-rewrite-percentage 100：当文件增长 100% 时自动重写。</li>
<li>auto-aof-rewrite-min-size 64mb：最小重写阈值。</li>
<li>aof-use-rdb-preamble yes：混合模式，使用 RDB 格式作为 AOF 前缀，提高效率。</li>
</ul>
<h4 id="aof的优缺点" tabindex="-1"><a class="header-anchor" href="#aof的优缺点"><span>AOF的优缺点</span></a></h4>
<ul>
<li>优点：数据丢失最小（可达秒级），文件可读（纯文本命令），异域审计</li>
<li>缺点：文件较大、恢复慢（需重放名命令）、性能开销高（）</li>
</ul>
<h3 id="rdb和aof对比" tabindex="-1"><a class="header-anchor" href="#rdb和aof对比"><span>RDB和AOF对比</span></a></h3>
<table>
<thead>
<tr>
<th>方面</th>
<th>RDB (快照式)</th>
<th>AOF (日志式)</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>持久化机制</strong></td>
<td>定期快照整个数据集</td>
<td>追加每条写命令到文件</td>
</tr>
<tr>
<td><strong>数据完整性</strong></td>
<td>可能丢失最后快照后的数据（RPO 分钟级）</td>
<td>丢失最小（可配置到秒级，甚至零丢失）</td>
</tr>
<tr>
<td><strong>文件大小</strong></td>
<td>较小（支持压缩）</td>
<td>较大（随操作增加，可通过重写优化）</td>
</tr>
<tr>
<td><strong>恢复速度</strong></td>
<td>快（直接加载二进制）</td>
<td>慢（需重放所有命令）</td>
</tr>
<tr>
<td><strong>性能开销</strong></td>
<td>低（间歇 fork）</td>
<td>高（每操作追加，取决于 fsync）</td>
</tr>
<tr>
<td><strong>适用场景</strong></td>
<td>缓存、非实时数据，对丢失有容忍</td>
<td>高可靠性需求，如数据库、金融系统</td>
</tr>
<tr>
<td><strong>文件格式</strong></td>
<td>二进制，不易读</td>
<td>文本（Redis 命令），易读易修改</td>
</tr>
<tr>
<td><strong>潜在风险</strong></td>
<td>fork 时内存峰值高，崩溃中途数据不一致</td>
<td>文件损坏可能需手动修复</td>
</tr>
</tbody>
</table>
<p>总体上，RDB更搞笑但安全性低；AOF更安全但资源消耗大。Redis支持混合模式（AOF以RDB格式开头），结合两者优点。</p>
<h3 id="rdb和aof如何选择" tabindex="-1"><a class="header-anchor" href="#rdb和aof如何选择"><span>RDB和AOF如何选择？</span></a></h3>
<ul>
<li>根据业务需求：
<ul>
<li>高性能、低丢失容忍：优先RDB，如缓存服务，可接受分钟级数据丢失</li>
<li>高可靠性、零丢失：优先AOF，如订单系统、金融交易，需要每秒持久化</li>
<li>推荐组合：同时启用RDB和AOF，Redis优先加载AOF，RDB作为备份。混合模式（aof-use-rdb-preamble yes）可优化AOF文件大小和恢复速度。</li>
</ul>
</li>
<li>考虑资源：
<ul>
<li>内存大（&gt;10GB）：RDB frok可能卡顿，偏向AOF</li>
<li>磁盘I/O瓶颈：RDB更好，避免AOF的频繁写入</li>
<li>数据规模：小数据集用RDB；大数据集用AOF+重写</li>
</ul>
</li>
<li>风险评估：如果服务器崩溃频繁，用AOF；否则RDB够用。</li>
</ul>
<h3 id="应用建议" tabindex="-1"><a class="header-anchor" href="#应用建议"><span>应用建议</span></a></h3>
<ul>
<li>主从复制：主节点用AOF，确保从节点同步完整数据；从节点可选RDB节省资源。</li>
<li>备份策略：定期复制RDB/AOF文件到远程（如S3），使用BGSAVE或BGREWRITEAOF手动备份。结合Sentinel或Cluster实现高可用</li>
<li>监控与优化：
<ul>
<li>用INFO Persistence监控最后保存时间、AOF大小。</li>
<li>自动重写AOF防止文件膨胀</li>
<li>测试恢复：定期模拟崩溃，验证恢复时间</li>
</ul>
</li>
<li>常见pitfalls：
<ul>
<li>避免SAVE在生产中使用（阻塞）</li>
<li>AOF用SSD磁盘提升性能</li>
<li>大流量下，调用AOF重写阈值避免频繁fork</li>
</ul>
</li>
</ul>
<h3 id="示例生产配置" tabindex="-1"><a class="header-anchor" href="#示例生产配置"><span>示例生产配置</span></a></h3>
<p>假设一个中等负载的电商缓存系统（优先RDB，辅助AOF）：</p>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># RDB 配置</span></span>
<span class="line"><span>save 900 1</span></span>
<span class="line"><span>save 300 100</span></span>
<span class="line"><span>save 60 10000</span></span>
<span class="line"><span>dbfilename dump.rdb</span></span>
<span class="line"><span>dir /var/redis/data</span></span>
<span class="line"><span>rdbcompression yes</span></span>
<span class="line"><span>rdbchecksum yes</span></span>
<span class="line"><span></span></span>
<span class="line"><span># AOF 配置</span></span>
<span class="line"><span>appendonly yes</span></span>
<span class="line"><span>appendfilename "appendonly.aof"</span></span>
<span class="line"><span>appendfsync everysec</span></span>
<span class="line"><span>auto-aof-rewrite-percentage 100</span></span>
<span class="line"><span>auto-aof-rewrite-min-size 64mb</span></span>
<span class="line"><span>aof-use-rdb-preamble yes</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在金融系统，关闭RDB，只用AOF并设appendfsync always。</p>
<h3 id="redis如何恢复数据" tabindex="-1"><a class="header-anchor" href="#redis如何恢复数据"><span>Redis如何恢复数据？</span></a></h3>
<p>Redis作为内存数据库，默认数据在重启后丢失，但通过持久化机制可以实现数据恢复。</p>
<p>恢复过程发生在Redis服务启动时，自动从持久化文件中加载数据。如果没有持久化文件或文件损坏，数据将从0开始。</p>
<h4 id="_1-rdb方式恢复数据" tabindex="-1"><a class="header-anchor" href="#_1-rdb方式恢复数据"><span>1.RDB方式恢复数据</span></a></h4>
<p>RDB是快照式持久化，恢复时直接加载二进制文件，速度快。</p>
<ul>
<li>自动恢复：
<ul>
<li>Redis启动时，会检查配置目录（dir参数指定，通常是当前目录）下的RDB文件（默认dump.rdb，由dbfilename指定）</li>
<li>如果文件存在且完整（校验和通过，如果启用rdbchecksum yes），Redis会自动加载它</li>
<li>加载过程：直接将文件中的数据反序列化到内存中，通常只需要几秒到几分钟，取决于数据集大小。</li>
</ul>
</li>
<li>手动恢复：
<ul>
<li>如果需要从备份文件恢复，先停止Redis。</li>
<li>将备份文件复制到配置目录，替换原有文件。</li>
<li>启动Redis，它会自动加载</li>
<li>命令行测试：使用redis-server redis.conf启动，观察日志中是否有“DB loaded from disk”消息。</li>
</ul>
</li>
<li>注意：
<ul>
<li>RDB只能恢复到最后一次快照时刻的数据，中间的修改会丢失</li>
<li>如果文件损坏，可尝试 redis-check-dump工具检查和修复（Redis工具集提供）</li>
</ul>
</li>
</ul>
<h4 id="_2-aof-方式恢复数据" tabindex="-1"><a class="header-anchor" href="#_2-aof-方式恢复数据"><span>2.AOF 方式恢复数据</span></a></h4>
<p>AOF是日志持久化，恢复时重放文件中的写命令，数据更完整但速度较慢。</p>
<ul>
<li>自动恢复
<ul>
<li>Redis启动时，如果启用appendonly yes，会优先检查AOF文件（默认appendonly.aof，由appendfilename指定）。</li>
<li>如果AOF存在且RDB也存在，Redis默认优先加载AOF（因为更完整）</li>
<li>加载过程：逐条执行AOF中的命令，重建内存数据集。支持混合模式（aof-use-rdb-preamble yes），前部分用RDB格式加速</li>
</ul>
</li>
<li>手动恢复
<ul>
<li>停止Redis，将备份AOF文件复制到目录</li>
<li>如果AOF文件太大或损坏，可用redis-check-aof --fix修复（会尝试移除无效命令）</li>
<li>启动Redis，观察日志中“AOF loaded”消息</li>
<li>手动重写AOF：用BGREWRITEAOF命令在运行时优化文件，然后重启</li>
</ul>
</li>
<li>注意：
<ul>
<li>恢复时间随文件大小增加，可能需要几分钟到几小时</li>
<li>如果配置appendfsync always，数据丢失几乎为零；everysec可能丢失1秒数据</li>
</ul>
</li>
</ul>
<h4 id="_3-rdb和aof混合恢复" tabindex="-1"><a class="header-anchor" href="#_3-rdb和aof混合恢复"><span>3.RDB和AOF混合恢复</span></a></h4>
<ul>
<li>如果两者都启用，Redis优先AOF（配置中无须额外设置）</li>
<li>恢复逻辑：
<ol>
<li>检查AOF是否存在且有效--&gt;加载AOF</li>
<li>如果AOF无效或不存在--&gt;加载RDB</li>
</ol>
</li>
<li>推荐生产中使用混合：RDB提供快速备份，AOF确保完整性。恢复后，课手动触发BGREWRITEAOF，更新AOF。</li>
</ul>
<p><img src="@source/02-数据库与持久化/02-NoSQL 数据库/Redis/01.Redis基础/imgs/data-persist.png" alt=""></p>
<h4 id="_4-其他恢复场景" tabindex="-1"><a class="header-anchor" href="#_4-其他恢复场景"><span>4.其他恢复场景</span></a></h4>
<ul>
<li>主从复制：在集群中，从节点可从主节点同步数据（使用REPLICAOF命令）。如果主节点崩溃，通过Sentinel或Cluster自动failover，从节点提升Wie主，数据从复制中恢复。</li>
<li>从备份恢复：定期备份RDB/AOF到远程（如AWS S3），奔溃时下载替换</li>
<li>无持久化恢复：如果未启用持久化，只能通过外部工具（如Redis导出命令）或应用层重构数据，但通常不可行。</li>
</ul>
<h4 id="_5-配置建议与注意事项" tabindex="-1"><a class="header-anchor" href="#_5-配置建议与注意事项"><span>5.配置建议与注意事项</span></a></h4>
<ul>
<li>配置示例（redis.conf）：</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>dir /var/redis/data  # 存储目录</span></span>
<span class="line"><span>dbfilename dump.rdb</span></span>
<span class="line"><span>appendonly yes</span></span>
<span class="line"><span>appendfilename appendonly.aof</span></span>
<span class="line"><span>appendfsync everysec  # AOF 同步策略</span></span>
<span class="line"><span>aof-use-rdb-preamble yes  # 混合模式</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>测试恢复</strong>：在开发环境模拟崩溃（kill 进程），重启检查数据。</p>
</li>
<li>
<p><strong>潜在问题</strong>：</p>
<ul>
<li>内存不足：加载大文件可能 OOM，需确保服务器资源充足。</li>
<li>版本兼容：不同 Redis 版本的 RDB/AOF 可能不兼容，备份时记录版本。</li>
<li>安全：文件权限设为 600，避免泄露。</li>
<li>监控：用 INFO Persistence 查看加载状态，日志文件记录错误。</li>
</ul>
</li>
</ul>
<p>如果恢复失败，检查日志（默认 redis.log）中的错误，如 &quot;Short read or OOM loading DB&quot;。有具体错误或场景，可以提供更多细节帮忙排查！</p>
<h3 id="redis-4-0的混合持久化了解吗" tabindex="-1"><a class="header-anchor" href="#redis-4-0的混合持久化了解吗"><span>Redis 4.0的混合持久化了解吗？</span></a></h3>
<p>Redis4.0引入了混合持久化（Hybrid Persistence）。这是对传统RDB和AOF持久化的优化，旨在结合两者的优点，解决AOF文件体积过大和恢复速度慢的问题，同事保持RDB的高效性。混合持久化不是一种全新的模式，而是通过在AOF中嵌入RDB格式来实现的。</p>
<p>它默认不启用，需要手动配置，但<strong>从Redis7.0开始成为默认选项</strong>。</p>
<h4 id="为什么引入混合持久化" tabindex="-1"><a class="header-anchor" href="#为什么引入混合持久化"><span>为什么引入混合持久化</span></a></h4>
<ul>
<li>传统RDB的问题：RDB定期生成快照，文件小、恢复快，但可能丢失最后快照后的数据</li>
<li>传统AOF的问题：AOF记录每条写命令，数据丢失最小（可达妙秒级），但文件会随操作积累变大，导致恢复时需要重放所有命令，时间长且I/O开销高。</li>
<li>混合的益处：通过在AOF文件开头嵌入RDB快照，后续只追加增量命令，文件大小显著减小（可压缩百分之五十以上），恢复速度提升（先加载RDB部分，再重放少量AOF）。这在大数据集场景下特别有用，如电商缓存或实时数据库。</li>
</ul>
<h4 id="混合持久化的工作原理" tabindex="-1"><a class="header-anchor" href="#混合持久化的工作原理"><span>混合持久化的工作原理</span></a></h4>
<p>混合持久化主要发生在AOF的重写过程中：</p>
<ol>
<li>触发重写：当AOF文件增长到一定阈值（配置如auto-aof-rewrite-percentage 100），Redis会自动或手动（BGREWRITEAOF命令）出发重写。不阻塞主进程，使用fork子进程。</li>
<li>生成过程：
<ul>
<li>子进程现将当前内存数据集以RDB二进制格式写入新的AOF文件开头（称为RDB前缀）</li>
<li>然后，将重写期间的增量写命令以AOF格式追加到文件末尾</li>
<li>完成后，原子替换旧AOF文件</li>
</ul>
</li>
<li>恢复过程：
<ul>
<li>Redis启动时，如果启用混合模式，会先加载AOF文件的RDB前缀（快速恢复大部分数据）</li>
<li>然后重放文件末尾的AOF命令（只处理增量变化）</li>
<li>这比纯AOF快得多，因为避免了重放整个历史日志。</li>
</ul>
</li>
</ol>
<p>注意：混合模式依赖AOF启用（appendonly yes），RDB可以作为辅助备份，但恢复优先AOF</p>
<h4 id="配置混合持久化" tabindex="-1"><a class="header-anchor" href="#配置混合持久化"><span>配置混合持久化</span></a></h4>
<p>在 redis.conf 文件中配置（Redis 4.0 及以上版本）：</p>
<ul>
<li>核心参数：aof-use-rdb-preamble yes（启用混合模式，从 Redis 7.0 默认 yes）。</li>
<li>相关 AOF 配置示例：</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>appendonly yes                # 启用 AOF</span></span>
<span class="line"><span>appendfilename "appendonly.aof"  # AOF 文件名</span></span>
<span class="line"><span>appendfsync everysec          # 同步策略（每秒 fsync）</span></span>
<span class="line"><span>auto-aof-rewrite-percentage 100  # 当 AOF 增长 100% 时重写</span></span>
<span class="line"><span>auto-aof-rewrite-min-size 64mb   # 最小重写阈值 64MB</span></span>
<span class="line"><span>aof-use-rdb-preamble yes      # 启用 RDB 前缀（混合关键）</span></span>
<span class="line"><span>aof-rewrite-incremental-fsync yes  # 重写时增量 fsync，提升性能</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>RDB 配置可选结合（如 save 900 1），用于额外快照备份。</li>
<li>应用配置后，重启 Redis 或用 CONFIG REWRITE 动态更新。</li>
</ul>
<h4 id="混合持久化优缺点" tabindex="-1"><a class="header-anchor" href="#混合持久化优缺点"><span>混合持久化优缺点</span></a></h4>
<table>
<thead>
<tr>
<th>方面</th>
<th>优点</th>
<th>缺点</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>性能</strong></td>
<td>恢复速度快（RDB 部分主导），文件大小小，适合大数据集。</td>
<td>重写时仍需 fork 子进程，短暂消耗内存（几乎双倍数据集）。</td>
</tr>
<tr>
<td><strong>数据安全</strong></td>
<td>继承 AOF 的低丢失（秒级），比纯 RDB 更可靠。</td>
<td>依赖 AOF 重写频率，如果重写失败可能回退到纯 AOF。</td>
</tr>
<tr>
<td><strong>适用场景</strong></td>
<td>生产环境，如高负载数据库，需要平衡耐用性和速度。</td>
<td>不适合极小数据集（开销无明显优势）。</td>
</tr>
<tr>
<td><strong>与纯模式比较</strong></td>
<td>比纯 AOF 恢复快 2-10 倍，文件小；比纯 RDB 丢失少。</td>
<td>配置稍复杂，需要监控重写日志。</td>
</tr>
</tbody>
</table>
<p>总体优于单一模式，尤其在Redis 4.0后。</p>
<h4 id="实际应用建议" tabindex="-1"><a class="header-anchor" href="#实际应用建议"><span>实际应用建议</span></a></h4>
<ul>
<li>生产选择：推荐启用混合持久化+RDB作为备份。监控INFO Persistence命令，查看最后重写时间和AOF大小。</li>
<li>升级注意：从旧版本升级到4.0时，确保兼容性；测试恢复流程。</li>
<li>潜在问题：如果磁盘空间不足，重写可能失败，导致AOF膨胀。定期备份文件到远程存储。</li>
<li>与更高版本：Redis 7.0引入多部分AOF，进一步优化，但4.0的混合仍是基础</li>
</ul>
<h4 id="生产配置实例" tabindex="-1"><a class="header-anchor" href="#生产配置实例"><span>生产配置实例</span></a></h4>
<div class="language-ini line-numbers-mode" data-highlighter="shiki" data-ext="ini" data-title="ini" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 启⽤AOF</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#98C379">appendonly yes</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 使⽤混合持久化</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#98C379">aof-use-rdb-preamble yes</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 每秒同步⼀次AOF，平衡性能和安全性</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#98C379">appendfsync everysec</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># AOF重写触发条件：⽂件增⻓100%且⾄少达到64MB</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#98C379">auto-aof-rewrite-percentage 100</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#98C379">auto-aof-rewrite-min-size 64mb</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># RDB备份策略</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#98C379">save 900 1 </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 15分钟内有1个修改</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#98C379">save 300 10 </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 5分钟内有10个修改</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#98C379">save 60 10000 </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 1分钟内有10000个修改</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="高可用" tabindex="-1"><a class="header-anchor" href="#高可用"><span>高可用</span></a></h2>
<h2 id="缓存设计" tabindex="-1"><a class="header-anchor" href="#缓存设计"><span>缓存设计</span></a></h2>
<h2 id="redis运维" tabindex="-1"><a class="header-anchor" href="#redis运维"><span>Redis运维</span></a></h2>
<h3 id="redis的部署" tabindex="-1"><a class="header-anchor" href="#redis的部署"><span>Redis的部署</span></a></h3>
<h2 id="redis应用" tabindex="-1"><a class="header-anchor" href="#redis应用"><span>Redis应用</span></a></h2>
<h2 id="底层结构" tabindex="-1"><a class="header-anchor" href="#底层结构"><span>底层结构</span></a></h2>
<h2 id="补充" tabindex="-1"><a class="header-anchor" href="#补充"><span>补充</span></a></h2>
</div></template>


