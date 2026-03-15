<template><div><h1 id="mqtt入门教程" tabindex="-1"><a class="header-anchor" href="#mqtt入门教程"><span>MQTT入门教程</span></a></h1>
<h1 id="_1-基础知识和快速教程" tabindex="-1"><a class="header-anchor" href="#_1-基础知识和快速教程"><span>1.基础知识和快速教程</span></a></h1>
<h3 id="_1-1-what-is-mqtt" tabindex="-1"><a class="header-anchor" href="#_1-1-what-is-mqtt"><span>1.1 what is  MQTT？</span></a></h3>
<p>MQTT（Message Queuing Telemetry Transport）是一种轻量级、基于发布-订阅模式的消息传输协议，适用于资源受限的设备和低带宽、高延迟或不稳定的网络环境。它在物联网应用中广受欢迎，能够实现传感器、执行器和其它设备之间的高效通信。</p>
<h3 id="_1-2-why-is-mqtt" tabindex="-1"><a class="header-anchor" href="#_1-2-why-is-mqtt"><span>1.2 why is MQTT？</span></a></h3>
<p>MQTT 所具有的适用于物联网特定需求的特点和功能，使其成为物联网领域最佳的协议之一。它的主要特点包括：</p>
<ul>
<li>**轻量级：**物联网设备通常在处理能力、内存和能耗方面受到限制。MQTT 开销低、报文小的特点使其非常适合这些设备，因为它消耗更少的资源，即使在有限的能力下也能实现高效的通信。</li>
<li>**可靠：**物联网网络常常面临高延迟或连接不稳定的情况。MQTT 支持多种 QoS 等级、会话感知和持久连接，即使在困难的条件下也能保证消息的可靠传递，使其非常适合物联网应用。</li>
<li>**安全通信：**安全对于物联网网络至关重要，因为其经常涉及敏感数据的传输。为确保数据在传输过程中的机密性，MQTT 提供传输层安全（TLS）和安全套接层（SSL）加密功能。此外，MQTT 还通过用户名/密码凭证或客户端证书提供身份验证和授权机制，以保护网络及其资源的访问。</li>
<li>**双向通信：**MQTT 的发布-订阅模式为设备之间提供了无缝的双向通信方式。客户端既可以向主题发布消息，也可以订阅接收特定主题上的消息，从而实现了物联网生态系统中的高效数据交换，而无需直接将设备耦合在一起。这种模式也简化了新设备的集成，同时保证了系统易于扩展。</li>
<li>**连续、有状态的会话：**MQTT 提供了客户端与 Broker 之间保持有状态会话的能力，这使得系统即使在断开连接后也能记住订阅和未传递的消息。此外，客户端还可以在建立连接时指定一个保活间隔，这会促使 Broker 定期检查连接状态。如果连接中断，Broker 会储存未传递的消息（根据 QoS 级别确定），并在客户端重新连接时尝试传递它们。这个特性保证了通信的可靠性，降低了因间断性连接而导致数据丢失的风险。</li>
<li>**大规模物联网设备支持：**物联网系统往往涉及大量设备，需要一种能够处理大规模部署的协议。MQTT 的轻量级特性、低带宽消耗和对资源的高效利用使其成为大规模物联网应用的理想选择。通过采用发布-订阅模式，MQTT 实现了发送者和接收者的解耦，从而有效地减少了网络流量和资源使用。此外，协议对不同 QoS 等级的支持使得消息传递可以根据需求进行定制，确保在各种场景下获得最佳的性能表现。</li>
<li>**语言支持：**物联网系统包含使用各种编程语言开发的设备和应用。MQTT 具有广泛的语言支持，使其能够轻松与多个平台和技术进行集成，从而实现了物联网生态系统中的无缝通信和互操作性。您可以阅读我们的 <a href="https://www.emqx.com/zh/blog/category/mqtt-programming" target="_blank" rel="noopener noreferrer">MQTT 客户端编程</a>系列文章，学习如何在 PHP、Node.js、Python、Golang、Node.js 等编程语言中使用 MQTT。</li>
</ul>
<h3 id="_1-3-mqtt的工作原理" tabindex="-1"><a class="header-anchor" href="#_1-3-mqtt的工作原理"><span>1.3 MQTT的工作原理</span></a></h3>
<p>要了解 MQTT 的工作原理，首先需要掌握以下几个概念：MQTT 客户端、MQTT Broker、发布-订阅模式、主题、QoS。</p>
<ul>
<li>
<p><strong>MQTT 客户端</strong></p>
<p>任何运行 <a href="https://www.emqx.com/zh/mqtt-client-sdk" target="_blank" rel="noopener noreferrer">MQTT 客户端库</a>的应用或设备都是 MQTT 客户端。例如，使用 MQTT 的即时通讯应用是客户端，使用 MQTT 上报数据的各种传感器是客户端，各种 <a href="https://www.emqx.com/zh/blog/mqtt-client-tools" target="_blank" rel="noopener noreferrer">MQTT 测试工具</a>也是客户端。</p>
</li>
<li>
<p><strong>MQTT Broker</strong></p>
<p>MQTT Broker 是负责处理客户端请求的关键组件，包括建立连接、断开连接、订阅和取消订阅等操作，同时还负责消息的转发。一个高效强大的 MQTT Broker 能够轻松应对海量连接和百万级消息吞吐量，从而帮助物联网服务提供商专注于业务发展，快速构建可靠的 MQTT 应用。</p>
<p>关于 MQTT Broker 的更多详情，请参阅文章 <a href="https://www.emqx.com/en/blog/the-ultimate-guide-to-mqtt-broker-comparison" target="_blank" rel="noopener noreferrer">2023 年最全面的 MQTT Broker 比较指南</a>。</p>
</li>
<li>
<p><strong>发布-订阅模式</strong></p>
<p>发布-订阅模式与客户端-服务器模式的不同之处在于，它将发送消息的客户端（发布者）和接收消息的客户端（订阅者）进行了解耦。发布者和订阅者之间无需建立直接连接，而是通过 MQTT Broker 来负责消息的路由和分发。</p>
<p>下图展示了 MQTT 发布/订阅过程。温度传感器作为客户端连接到 MQTT Broker，并通过发布操作将温度数据发布到一个特定主题（例如 <code v-pre>Temperature</code>）。MQTT Broker 接收到该消息后会负责将其转发给订阅了相应主题（<code v-pre>Temperature</code>）的订阅者客户端。</p>
<p><img src="@source/16-网络通信与协议/MQTT/01.入门/imgs/1.jpg" alt=""></p>
</li>
<li>
<p><strong>主题</strong></p>
<p>MQTT 协议根据主题来转发消息。主题通过 <code v-pre>/</code> 来区分层级，类似于 URL 路径，例如：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>chat/room/1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sensor/10/temperature</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sensor/+/temperature</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>MQTT 主题支持以下两种通配符：<code v-pre>+</code> 和 <code v-pre>#</code>。</p>
<ul>
<li><code v-pre>+</code>：表示单层通配符，例如 <code v-pre>a/+</code> 匹配 <code v-pre>a/x</code> 或 <code v-pre>a/y</code>。</li>
<li><code v-pre>#</code>：表示多层通配符，例如 <code v-pre>a/#</code> 匹配 <code v-pre>a/x</code>、<code v-pre>a/b/c/d</code>。</li>
</ul>
<blockquote>
<p><strong>注意</strong>：通配符主题只能用于订阅，不能用于发布。*</p>
</blockquote>
</li>
<li>
<p><strong>QoS</strong></p>
<p>MQTT 提供了三种服务质量（QoS），在不同网络环境下保证消息的可靠性。</p>
<ul>
<li>QoS 0：消息最多传送一次。如果当前客户端不可用，它将丢失这条消息。</li>
<li>QoS 1：消息至少传送一次。</li>
<li>QoS 2：消息只传送一次。</li>
</ul>
<p>关于 MQTT QoS 的更多详情，请参阅文章 <a href="https://www.emqx.com/zh/blog/introduction-to-mqtt-qos" target="_blank" rel="noopener noreferrer">MQTT QoS 0, 1, 2 介绍</a>。</p>
</li>
</ul>
<h3 id="_1-4-mqtt-的工作流程" tabindex="-1"><a class="header-anchor" href="#_1-4-mqtt-的工作流程"><span>1.4 MQTT 的工作流程</span></a></h3>
<p>在了解了 MQTT 的基本组件之后，让我们来看看它的一般工作流程：</p>
<ol>
<li><strong>客户端使用 TCP/IP 协议与 Broker 建立连接</strong>，可以选择使用 TLS/SSL 加密来实现安全通信。客户端提供认证信息，并指定会话类型（Clean Session 或 Persistent Session）。</li>
<li><strong>客户端既可以向特定主题发布消息，也可以订阅主题以接收消息</strong>。当客户端发布消息时，它会将消息发送给 MQTT Broker；而当客户端订阅消息时，它会接收与订阅主题相关的消息。</li>
<li><strong>MQTT Broker 接收发布的消息</strong>，并将这些消息转发给订阅了对应主题的客户端。它根据 QoS 等级确保消息可靠传递，并根据会话类型为断开连接的客户端存储消息。</li>
</ol>
<h2 id="_2-发布-订阅模式介绍" tabindex="-1"><a class="header-anchor" href="#_2-发布-订阅模式介绍"><span>2.发布/订阅模式介绍</span></a></h2>
<h2 id="_3-创建mqtt连接时如何设置参数" tabindex="-1"><a class="header-anchor" href="#_3-创建mqtt连接时如何设置参数"><span>3.创建MQTT连接时如何设置参数</span></a></h2>
<h2 id="_4-mqtt主题与通配符" tabindex="-1"><a class="header-anchor" href="#_4-mqtt主题与通配符"><span>4.MQTT主题与通配符</span></a></h2>
<h2 id="_5-mqtt会话详解" tabindex="-1"><a class="header-anchor" href="#_5-mqtt会话详解"><span>5.MQTT会话详解</span></a></h2>
<h2 id="_6-qos介绍" tabindex="-1"><a class="header-anchor" href="#_6-qos介绍"><span>6.QoS介绍</span></a></h2>
</div></template>


