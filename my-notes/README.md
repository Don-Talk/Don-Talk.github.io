1. # Java 程序员技术归档框架（2026最新版）

   **总分类 17 个** | 持续更新中

   ## 快速跳转
   - [01-Java语言核心](./01-Java语言核心)
   - [02-数据库与持久化](./02-数据库与持久化)
   - [03-Web与微服务框架](./03-Web与微服务框架)
   - [04-工程化与生产实践](./04-工程化与生产实践)
   - [05-分布式系统与架构](./05-分布式系统与架构)
   - [06-性能优化与调优](./06-性能优化与调优)
   - [07-安全与合规](./07-安全与合规) ← 加解密全部在这里
   - [08-云原生与容器化](./08-云原生与容器化)
   - [09-前沿技术与新兴趋势](./09-前沿技术与新兴趋势)
   - [10-数据结构与算法](./10-数据结构与算法)
   - [11-设计模式与最佳实践](./11-设计模式与最佳实践)
   - [12-工具与开发环境](./12-工具与开发环境)
   - [13-测试与质量保障](./13-测试与质量保障)
   - [14-消息队列与异步](./14-消息队列与异步)
   - [15-项目案例与复盘](./15-项目案例与复盘)
   - [16-网络通信与协议](./16-网络通信与协议) ← MQTT、CoAP、gRPC 等
   - [17-AI 与智能应用](./17-AI 与智能应用) ← Spring AI 已拆 4 级

   ## 资源区
   - [Resources](./Resources)
   - [Templates](./Templates)

   **最后更新**：2026-03-14  
   **维护提示**：每季度盘点一次，过时内容移入 `Archive-已过时`





```
Java-Programmer-Archive/
├── 00-根目录索引.md
├── 01-Java语言核心
│   ├── 01-基础语法与新特性（Java 8~23+）
│   │   ├── Java 8-11 特性合集
│   │   ├── Java 17 LTS 核心升级
│   │   ├── Java 21-23 新特性（虚拟线程、模式匹配、Record）
│   │   └── 版本对比表 + 迁移指南
│   ├── 02-集合框架与并发集合
│   │   ├── List/Set/Map 源码解析
│   │   ├── ConcurrentHashMap / CopyOnWrite 详解
│   │   └── 集合性能对比与最佳实践
│   ├── 03-JVM 原理与调优
│   │   ├── 类加载机制 & 双亲委派
│   │   ├── 内存模型（堆/栈/方法区/Metaspace）
│   │   ├── GC 算法（G1/ZGC/Shenandoah）
│   │   └── JVM 参数实战模板
│   ├── 04-并发编程（JUC + 虚拟线程）
│   │   ├── ThreadPoolExecutor 源码
│   │   ├── CompletableFuture / Structured Concurrency
│   │   └── 虚拟线程（Project Loom）实战
│   └── 05-函数式与模块化
│       ├── Lambda + Stream 高级用法
│       ├── JPMS 模块化实战
│       └── Sealed Class / Pattern Matching
├── 02-数据库与持久化
│   ├── 01-关系型数据库
│   │   ├── MySQL 8+ 高级特性（JSON/窗口函数）
│   │   ├── PostgreSQL 高级（JSONB/分区表）
│   │   └── SQL 优化与执行计划分析
│   ├── 02-NoSQL 数据库
│   │   ├── Redis（数据结构 + 集群 + Lua）
│   │   ├── MongoDB（聚合管道 + 事务）
│   │   └── Elasticsearch（倒排索引 + 搜索优化）
│   ├── 03-ORM 框架
│   │   ├── JPA/Hibernate 深度（一级/二级缓存）
│   │   ├── MyBatis-Plus 代码生成 + LambdaQuery
│   │   └── Spring Data JPA 最新用法
│   └── 04-事务与连接池
│       ├── 分布式事务（Seata / XA）
│       ├── HikariCP 参数调优
│       └── 连接泄漏监控
├── 03-Web与微服务框架
│   ├── 01-Spring Boot 3.x 全家桶
│   │   ├── 自动配置原理 & 启动流程
│   │   ├── Actuator + Micrometer 监控
│   │   └── 3.x 新特性（AOT、GraalVM Native）
│   ├── 02-轻量级替代框架
│   │   ├── Micronaut / Quarkus 对比
│   │   └── Vert.x / Helidon 响应式
│   ├── 03-响应式 Web（WebFlux）
│   │   ├── Project Reactor 核心算子
│   │   └── WebFlux + RSocket
│   └── 04-前后端协议（REST/GraphQL）
│       ├── OpenAPI 3 + Swagger 工程化
│       └── GraphQL Java + Spring
├── 04-工程化与生产实践
│   ├── 01-构建工具
│   │   ├── Maven 多模块 + 生命周期
│   │   └── Gradle Kotlin DSL + 插件
│   ├── 02-CI/CD 流水线
│   │   ├── GitHub Actions / GitLab CI 模板
│   │   └── Jenkins Pipeline 最佳实践
│   ├── 03-可观测性
│   │   ├── Prometheus + Grafana 全套
│   │   └── SkyWalking / OpenTelemetry
│   ├── 04-日志与配置
│   │   ├── ELK / Loki 架构
│   │   └── Nacos / Apollo 配置中心
│   └── 05-部署运维
│       ├── Docker 多阶段构建
│       └── Helm + K8s 部署模板
├── 05-分布式系统与架构
│   ├── 01-微服务治理
│   │   ├── Spring Cloud Alibaba 全栈
│   │   └── 服务拆分原则与 DDD 结合
│   ├── 02-注册与发现
│   │   ├── Nacos 2.x 原理
│   │   └── Consul / Eureka 对比
│   ├── 03-流量控制与容错
│   │   ├── Sentinel / Resilience4j 规则
│   │   └── 限流熔断降级实战
│   └── 04-分布式一致性
│       ├── 分布式锁（Redisson / Zookeeper）
│       └── Seata AT/TCC 模式
├── 06-性能优化与调优
│   ├── 01-JVM 调优
│   │   ├── Arthas 命令全集
│   │   └── GC 日志分析 + 参数模板
│   ├── 02-数据库优化
│   │   ├── 索引设计 + 执行计划
│   │   └── 慢SQL 定位与重构
│   ├── 03-缓存多级策略
│   │   ├── Caffeine + Redis 二级缓存
│   │   └── 缓存一致性方案
│   └── 04-压测与报告
│       ├── JMeter / Gatling 脚本
│       └── 性能报告模板
├── 07-安全与合规（加解密全部在此）
│   ├── 01-认证授权
│   │   ├── Spring Security 6.x
│   │   └── OAuth2 + JWT + Keycloak
│   ├── 02-数据安全与加密（重点）
│   │   ├── 对称/非对称/国密全套
│   │   ├── BouncyCastle + JCA 工具类
│   │   └── TLS/DTLS 证书管理
│   └── 03-协议安全与合规
│       ├── OWASP Top 10 防护
│       └── MQTT/CoAP 安全加固
├── 08-云原生与容器化
│   ├── 01-Docker & Compose
│   │   ├── 多阶段构建 + Dockerfile 最佳实践
│   │   └── Compose 编排模板
│   ├── 02-Kubernetes
│   │   ├── Pod / Deployment / Service 详解
│   │   ├── Operator + Helm Chart
│   │   └── K8s 网络 & 存储
│   └── 03-Serverless
│       ├── Spring Cloud Function + AWS Lambda
│       └── 阿里云 FC / 腾讯云 SCF
├── 09-前沿技术与新兴趋势
│   ├── 01-Java 下一代特性
│   │   ├── Project Valhalla / Panama
│   │   └── Virtual Threads 生产落地
│   ├── 02-GraalVM Native Image
│   │   ├── Spring Native / Quarkus Native
│   │   └── 启动时间 & 内存对比
│   └── 03-其他前沿
│       ├── AI 集成（已移到 17）
│       └── WebAssembly + Java
├── 10-数据结构与算法
│   ├── 01-基础数据结构
│   ├── 02-LeetCode 高频分类（数组/链表/树/图）
│   ├── 03-面试题库（Java 实现）
│   └── 04-项目中算法应用案例
├── 11-设计模式与最佳实践
│   ├── 01-23 种设计模式（代码 + 场景）
│   ├── 02-领域驱动设计（DDD）
│   └── 03-Clean Code + 重构技巧
├── 12-工具与开发环境
│   ├── 01-IDE 配置（IntelliJ + VS Code）
│   ├── 02-调试神器（Arthas / JProfiler）
│   └── 03-代码生成与 Lombok
├── 13-测试与质量保障
│   ├── 01-单元测试（JUnit 5 + Mockito）
│   ├── 02-集成/契约测试（Testcontainers / Pact）
│   └── 03-性能与安全测试
├── 14-消息队列与异步
│   ├── 01-Kafka（分区/消费者组/Exactly-Once）
│   ├── 02-RocketMQ / RabbitMQ
│   └── 03-延迟/死信队列实战
├── 15-项目案例与复盘
│   ├── 项目名称1（每个项目独立文件夹）
│   │   ├── 架构图 + 技术选型
│   │   ├── 核心代码
│   │   └── 踩坑 & 优化记录
│   └── 项目名称2...
├── 16-网络通信与协议（已细分）
│   ├── MQTT（4级：规范/客户端/集成/部署）
│   ├── CoAP（4级：规范/实现/安全/案例）
│   ├── gRPC / WebSocket / HTTP3
│   └── 协议对比表.md
├── 17-AI 与智能应用（已 4 级）
│   ├── Spring AI（01-基础 → 04-实战项目）
│   ├── LangChain4j
│   ├── 大模型接入
│   ├── 本地模型部署
│   ├── 向量数据库
│   └── AI Agent 与工作流
├── Resources
└── Templates
```

