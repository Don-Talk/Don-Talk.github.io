<template><div><h1 id="ubuntu22-04搭建prometheus-node-exporter" tabindex="-1"><a class="header-anchor" href="#ubuntu22-04搭建prometheus-node-exporter"><span>Ubuntu22.04搭建Prometheus&amp;Node-exporter</span></a></h1>
<h2 id="一、prometheus" tabindex="-1"><a class="header-anchor" href="#一、prometheus"><span>一、Prometheus</span></a></h2>
<h3 id="_1-1-安装-prometheus" tabindex="-1"><a class="header-anchor" href="#_1-1-安装-prometheus"><span>1.1 安装 Prometheus</span></a></h3>
<ol>
<li>
<p>创建 Prometheus 用户</p>
<p>为了安全起见，Prometheus 不应以 root 用户运行。我们创建一个系统用户 prometheus：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> useradd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --system</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --no-create-home</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --shell</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /bin/</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> prometheus</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>下载 Prometheus</p>
<p>访问 Prometheus 官网下载页面，获取最新版本的二进制文件。截至 2025年3月，最新版本可能是 2.48.0 或更高版本。你可以检查</p>
<p>Prometheus 下载页面</p>
<p>获取最新版本号。以下以 2.48.0 为例：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /tmp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> wget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://github.com/prometheus/prometheus/releases/download/v2.48.0/prometheus-2.48.0.linux-amd64.tar.gz</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>解压并移动文件</p>
<p>解压下载的文件，并将二进制文件移动到 <code v-pre>/usr/local/bin/</code>：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">tar</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -xzf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> prometheus-2.48.0.linux-amd64.tar.gz</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mv</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> prometheus-2.48.0.linux-amd64/prometheus</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/local/bin/</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mv</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> prometheus-2.48.0.linux-amd64/promtool</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/local/bin/</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> chown</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> prometheus:prometheus</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/local/bin/prometheus</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/local/bin/promtool</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>创建配置目录和数据目录</p>
<p>Prometheus 需要一个目录来存储配置文件和数据：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mkdir</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/prometheus</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mkdir</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /var/lib/prometheus</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> chown</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> prometheus:prometheus</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/prometheus</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /var/lib/prometheus</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>移动默认配置文件</p>
<p>将解压后的 <code v-pre>prometheus.yml</code> 和相关目录移动到 <code v-pre>/etc/prometheus/</code>：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mv</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> prometheus-2.48.0.linux-amd64/prometheus.yml</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/prometheus/</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mv</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> prometheus-2.48.0.linux-amd64/consoles</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/prometheus/</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mv</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> prometheus-2.48.0.linux-amd64/console_libraries</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/prometheus/</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> chown</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -R</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> prometheus:prometheus</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/prometheus</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>验证 Prometheus 安装</p>
<p>检查 Prometheus 版本，确保安装成功：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>prometheus --version</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>输出类似：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>prometheus, version 2.48.0 (branch: HEAD, revision: ...)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ol>
<h3 id="_1-2-配置-prometheus-服务并设置开机自启动" tabindex="-1"><a class="header-anchor" href="#_1-2-配置-prometheus-服务并设置开机自启动"><span>1.2 配置 Prometheus 服务并设置开机自启动</span></a></h3>
<ol>
<li>
<p>创建 systemd 服务文件</p>
<p>创建一个 systemd 服务文件来管理 Prometheus：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> nano</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/systemd/system/prometheus.service</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>写入以下内容：</p>
<div class="language-ini line-numbers-mode" data-highlighter="shiki" data-ext="ini" data-title="ini" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">[Unit]</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379"> </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD">Description</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379">Prometheus Monitoring System </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD">Wants</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379">network-online.target </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD">After</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379">network-online.target </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">[Service]</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379"> </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD">User</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379">prometheus </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD">Group</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379">prometheus </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD">Type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379">simple </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD">ExecStart</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379">/usr/local/bin/prometheus \  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#98C379">--config.file /etc/prometheus/prometheus.yml \  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#98C379">--storage.tsdb.path /var/lib/prometheus/ \  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#98C379">--</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD">web.console.templates</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379">/etc/prometheus/consoles \  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#98C379">--</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD">web.console.libraries</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379">/etc/prometheus/console_libraries </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD">Restart</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379">always </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">[Install]</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379"> </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD">WantedBy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379">multi-user.target</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>重新加载 systemd 并启动 Prometheus</p>
<p>启用并启动 Prometheus 服务：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> daemon-reload</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> start</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> prometheus</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> enable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> prometheus</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>验证 Prometheus 运行状态</p>
<p>检查 Prometheus 是否正常运行：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> status</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> prometheus</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>如果服务正常运行，输出中会显示<code v-pre> active (running)</code>。</p>
</li>
<li>
<p>访问 Prometheus Web 界面</p>
<p>Prometheus 默认运行在 9090 端口。使用浏览器访问：</p>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>http://&#x3C;your-server-ip>:9090</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>你应该能看到 Prometheus 的 Web 界面。点击 Status-&gt; Targets，目前应该只有 Prometheus 自身的目标（localhost:9090）。</p>
</li>
</ol>
<h2 id="二、-安装和配置-node-exporter" tabindex="-1"><a class="header-anchor" href="#二、-安装和配置-node-exporter"><span>二、 安装和配置 Node Exporter</span></a></h2>
<p>Node Exporter 用于收集服务器的系统指标，Prometheus 会通过 HTTP 拉取这些指标。</p>
<h3 id="_2-1-安装-node-exporter" tabindex="-1"><a class="header-anchor" href="#_2-1-安装-node-exporter"><span>2.1 安装 Node Exporter</span></a></h3>
<ol>
<li>
<p><strong>创建 Node Exporter 用户</strong>
同样，为了安全起见，创建一个系统用户 node_exporter：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> useradd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --system</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --no-create-home</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --shell</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /bin/</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">false</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> node_exporter</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p><strong>下载 Node Exporter</strong>
访问 Prometheus 官网下载页面，获取最新版本的 Node Exporter。截至 2025年3月，最新版本可能是 1.7.0 或更高版本。以下以 1.7.0 为例：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /tmp</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">wget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://github.com/prometheus/node_exporter/releases/download/v1.7.0/node_exporter-1.7.0.linux-amd64.tar.gz</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>解压并移动文件</strong>
解压并将二进制文件移动到 /usr/local/bin/：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">tar</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -xzf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> node_exporter-1.7.0.linux-amd64.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mv</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> node_exporter-1.7.0.linux-amd64/node_exporter</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/local/bin/</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> chown</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> node_exporter:node_exporter</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /usr/local/bin/node_exporter</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>验证 Node Exporter 安装</strong>
检查 Node Exporter 版本：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">node_exporter</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --version</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>输出类似：</p>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>node_exporter, version 1.7.0 (branch: HEAD, revision: ...)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ol>
<h3 id="_2-2-配置-node-exporter-服务并设置开机自启动" tabindex="-1"><a class="header-anchor" href="#_2-2-配置-node-exporter-服务并设置开机自启动"><span>2.2 配置 Node Exporter 服务并设置开机自启动</span></a></h3>
<p><strong>1.创建 systemd 服务文件</strong>
创建一个 systemd 服务文件来管理 Node Exporter：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/systemd/system/node_exporter.service</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>写入以下内容：</p>
<div class="language-ini line-numbers-mode" data-highlighter="shiki" data-ext="ini" data-title="ini" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">[Unit]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD">Description</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379">Prometheus Node Exporter</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD">Wants</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379">network-online.target</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD">After</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379">network-online.target</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">[Service]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD">User</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379">node_exporter</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD">Group</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379">node_exporter</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD">Type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379">simple</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD">ExecStart</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379">/usr/local/bin/node_exporter</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD">Restart</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379">always</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">[Install]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD">WantedBy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379">multi-user.target</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2.重新加载 systemd 并启动 Node Exporter</strong>
启用并启动 Node Exporter 服务：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> daemon-reload</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> start</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> node_exporter</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> enable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> node_exporter</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3.验证 Node Exporter 运行状态</strong>
检查 Node Exporter 是否正常运行：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> status</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> node_exporter</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>如果服务正常运行，输出中会显示 active (running)。</p>
<p><strong>4.验证 Node Exporter 指标</strong>
Node Exporter 默认运行在 9100 端口。使用 curl 检查是否能获取指标：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">curl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> http://localhost:9100/metrics</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-3-配置-prometheus-拉取-node-exporter-指标" tabindex="-1"><a class="header-anchor" href="#_2-3-配置-prometheus-拉取-node-exporter-指标"><span>2.3 配置 Prometheus 拉取 Node Exporter 指标</span></a></h3>
<p><strong>1.编辑 Prometheus 配置文件</strong>
编辑 /etc/prometheus/prometheus.yml，添加 Node Exporter 作为目标：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/prometheus/prometheus.yml</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>在 scrape_configs 部分添加以下内容：</p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">scrape_configs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">job_name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'prometheus'</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    scrape_interval</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">15s</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    static_configs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">targets</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'localhost:9090'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">job_name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'node_exporter'</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    scrape_interval</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">15s</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    static_configs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">targets</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'localhost:9100'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>job_name: 'node_exporter' 定义了一个新的任务，命名为 node_exporter。</li>
<li>targets: ['localhost:9100'] 指定了 Node Exporter 的地址和端口。</li>
</ul>
<p><strong>2.重新加载 Prometheus 配置</strong>
Prometheus 支持动态重新加载配置，无需重启服务：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -X</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> POST</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> http://localhost:9090/-/reload</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>如果 --web.enable-lifecycle 标志未启用，可以重启 Prometheus：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> restart</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> prometheus</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>3.验证 Prometheus 拉取数据</strong>
再次访问 Prometheus Web 界面：</p>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>http://&#x3C;your-server-ip>:9090</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>点击 Status -&gt; Targets，你应该能看到两个目标：</p>
<ul>
<li>prometheus（localhost:9090）</li>
<li>node_exporter（localhost:9100）
两者状态应为 UP。</li>
</ul>
<p><strong>4.查看指标</strong>
在 Prometheus Web 界面的 Graph 标签中，输入以下表达式并点击 Execute：</p>
<ul>
<li>node_cpu_seconds_total：查看 CPU 使用情况。</li>
<li>node_memory_MemAvailable_bytes：查看可用内存。</li>
<li>node_disk_io_time_seconds_total：查看磁盘 I/O 时间。
切换到 Graph 视图，你可以看到这些指标的折线图。</li>
</ul>
<h2 id="三、通过下载-deb-包安装-grafana" tabindex="-1"><a class="header-anchor" href="#三、通过下载-deb-包安装-grafana"><span>三、通过下载 .deb 包安装 Grafana</span></a></h2>
<p>在 Ubuntu 22.04 上，你可以直接下载 Grafana 的 .deb 安装包并手动安装，这样可以绕过 apt 和 python3-apt 的问题。</p>
<h3 id="_3-1-下载-grafana-的-deb-包" tabindex="-1"><a class="header-anchor" href="#_3-1-下载-grafana-的-deb-包"><span>3.1 下载 Grafana 的 .deb 包</span></a></h3>
<ol>
<li>
<p><strong>访问 Grafana 官网下载页面</strong>
打开浏览器，访问 <a href="https://grafana.com/grafana/download" target="_blank" rel="noopener noreferrer">Grafana 下载页面</a>，选择适合 Ubuntu 的版本。
截至 2025年3月，最新版本可能是 10.2.x 或更高版本。以下以 10.2.3 为例。</p>
</li>
<li>
<p><strong>下载 .deb 包</strong>
使用 wget 下载 Grafana 的 .deb 包：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /tmp</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">wget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://dl.grafana.com/oss/release/grafana_10.2.3_amd64.deb</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果版本已更新，可以在 Grafana 官网找到最新的下载链接。</p>
</li>
</ol>
<h3 id="_3-2-安装-deb-包" tabindex="-1"><a class="header-anchor" href="#_3-2-安装-deb-包"><span>3.2 安装 .deb 包</span></a></h3>
<ol>
<li>
<p><strong>使用 dpkg 安装</strong>
使用 dpkg 命令安装下载的 .deb 包：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dpkg</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> grafana_10.2.3_amd64.deb</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>如果缺少依赖，dpkg 可能会报错，例如：</p>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>dpkg: dependency problems prevent configuration of grafana:</span></span>
<span class="line"><span> grafana depends on libfontconfig1; however:</span></span>
<span class="line"><span>  Package libfontconfig1 is not installed.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>修复依赖</strong>
如果 dpkg 报依赖问题，可以使用 apt-get 修复：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apt-get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -f</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>这会自动安装缺失的依赖（例如 libfontconfig1）。</p>
</li>
</ol>
<h3 id="_3-3-启动-grafana-并设置开机自启动" tabindex="-1"><a class="header-anchor" href="#_3-3-启动-grafana-并设置开机自启动"><span>3.3 启动 Grafana 并设置开机自启动</span></a></h3>
<ol>
<li>
<p><strong>启动 Grafana 服务</strong>
安装完成后，启动 Grafana：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> daemon-reload</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> start</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> grafana-server</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> enable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> grafana-server</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>验证 Grafana 运行状态</strong>
检查 Grafana 是否正常运行：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> status</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> grafana-server</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p><strong>访问 Grafana Web 界面</strong>
Grafana 默认运行在 3000 端口。使用浏览器访问：</p>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>http://&#x3C;your-server-ip>:3000</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>默认用户名和密码是 admin / admin，登录后会提示你修改密码。</p>
</li>
</ol>
<h3 id="_3-4-配置-grafana-连接-prometheus" tabindex="-1"><a class="header-anchor" href="#_3-4-配置-grafana-连接-prometheus"><span>3.4 配置 Grafana 连接 Prometheus</span></a></h3>
<p>你已经安装了 Prometheus 和 Node Exporter，接下来将 Grafana 连接到 Prometheus：</p>
<ol>
<li>登录 Grafana（http://<your-server-ip>:3000）。</li>
<li>点击左侧菜单的 Configuration（齿轮图标） -&gt; Data Sources。</li>
<li>点击 Add data source，选择 Prometheus。</li>
<li>在 URL 字段输入 http://localhost:9090（Prometheus 的地址），然后点击 Save &amp; Test。</li>
<li>导入 Node Exporter 仪表盘：
<ul>
<li>点击左侧菜单的 + -&gt; Import。</li>
<li>在 Import via grafana.com 字段中输入仪表盘 ID，例如 1860（Node Exporter Full 仪表盘）。</li>
<li>点击 Load，选择 Prometheus 数据源，然后点击 Import。</li>
</ul>
</li>
</ol>
</div></template>


