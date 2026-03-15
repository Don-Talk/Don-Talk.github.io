<template><div><h1 id="docker" tabindex="-1"><a class="header-anchor" href="#docker"><span>Docker</span></a></h1>
<h1 id="_1-安装docker-centos" tabindex="-1"><a class="header-anchor" href="#_1-安装docker-centos"><span>1.安装Docker(CentOS)</span></a></h1>
<p>本安装教程参考Docker官方文档，地址如下：</p>
<p>https://docs.docker.com/engine/install/centos/</p>
<h2 id="_1-1-卸载旧版" tabindex="-1"><a class="header-anchor" href="#_1-1-卸载旧版"><span>1.1.卸载旧版</span></a></h2>
<p>首先如果系统中已经存在旧的Docker，则先卸载：</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> remove</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docker</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    docker-client</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    docker-client-latest</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    docker-common</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    docker-latest</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    docker-latest-logrotate</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    docker-logrotate</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    docker-engine</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-2-配置docker的yum库" tabindex="-1"><a class="header-anchor" href="#_1-2-配置docker的yum库"><span>1.2.配置Docker的yum库</span></a></h2>
<p>首先要安装一个yum工具</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># CentOS</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> yum-utils</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>安装成功后，执行命令，配置Docker的yum源：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum-config-manager</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --add-repo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> https://download.docker.com/linux/centos/docker-ce.repo</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>或者使用阿里源(推荐)</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_1-3-安装docker" tabindex="-1"><a class="header-anchor" href="#_1-3-安装docker"><span>1.3.安装Docker</span></a></h2>
<p>最后，执行命令，安装Docker</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docker-ce</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docker-ce-cli</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> containerd.io</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docker-buildx-plugin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docker-compose-plugin</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_1-4-启动和校验" tabindex="-1"><a class="header-anchor" href="#_1-4-启动和校验"><span>1.4.启动和校验</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 启动Docker</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> start</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docker</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 停止Docker</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> stop</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docker</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 重启</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> restart</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docker</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 设置开机自启</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> enable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docker</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 执行docker ps命令，如果不报错，说明安装启动成功</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ps</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-5-配置镜像加速" tabindex="-1"><a class="header-anchor" href="#_1-5-配置镜像加速"><span>1.5.配置镜像加速</span></a></h2>
<p>这里以阿里云镜像加速为例。</p>
<h3 id="_1-5-1-注册阿里云账号" tabindex="-1"><a class="header-anchor" href="#_1-5-1-注册阿里云账号"><span>1.5.1.注册阿里云账号</span></a></h3>
<p>首先访问阿里云网站:</p>
<p>https://www.aliyun.com/</p>
<p>注册一个账号。</p>
<h3 id="_1-5-2-开通镜像服务" tabindex="-1"><a class="header-anchor" href="#_1-5-2-开通镜像服务"><span>1.5.2.开通镜像服务</span></a></h3>
<p>在首页的产品中，找到阿里云的<strong>容器镜像服务</strong>：</p>
<p><img src="@source/08-云原生与容器化/01-Docker &amp; Compose/01.docker/imgs/0.png" alt=""></p>
<p>点击后进入控制台：</p>
<p><img src="@source/08-云原生与容器化/01-Docker &amp; Compose/01.docker/imgs/1.png" alt=""></p>
<p>首次可能需要选择立刻开通，然后进入控制台。</p>
<h3 id="_1-5-3-配置镜像加速" tabindex="-1"><a class="header-anchor" href="#_1-5-3-配置镜像加速"><span>1.5.3.配置镜像加速</span></a></h3>
<p>找到<strong>镜像工具</strong>下的**镜像 ** <strong>加速器</strong> ：</p>
<p><img src="@source/08-云原生与容器化/01-Docker &amp; Compose/01.docker/imgs/2.png" alt=""></p>
<p>页面向下滚动，即可找到配置的文档说明：</p>
<p><img src="@source/08-云原生与容器化/01-Docker &amp; Compose/01.docker/imgs/3.png" alt=""></p>
<p>具体命令如下：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 创建目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mkdir</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/docker</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 复制内容，注意把其中的镜像加速地址改成你自己的</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">tee</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/docker/daemon.json</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;&#x3C;-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">'EOF'</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  "registry-mirrors": ["https://r25z7zik.mirror.aliyuncs.com"]</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 重新加载配置</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> daemon-reload</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 重启Docker</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> restart</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docker</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2-快速入门" tabindex="-1"><a class="header-anchor" href="#_2-快速入门"><span>2.快速入门</span></a></h1>
<h2 id="_2-1-部署mysql" tabindex="-1"><a class="header-anchor" href="#_2-1-部署mysql"><span>2.1.部署MySQL</span></a></h2>
<p>首先，我们利用Docker来安装一个MySQL软件，大家可以对比一下之前传统的安装方式，看看哪个效率更高一些。</p>
<p>如果是利用传统方式部署MySQL，大概的步骤有：</p>
<ul>
<li>搜索并下载MySQL安装包</li>
<li>上传至Linux环境</li>
<li>编译和配置环境</li>
<li>安装</li>
</ul>
<p>而使用Docker安装，仅仅需要一步即可，在命令行输入下面的命令（建议采用CV大法）：</p>
<div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" data-title="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">docker run </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">d \</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">  --</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">name dc</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">mysql \</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">  -</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">p </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">3306</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">3306</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> \</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">  -</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">e TZ</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">Asia</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">Shanghai \</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">  -</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">e MYSQL_ROOT_PASSWORD</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">Password</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">@3306</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> \</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  mysql:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">8.0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">27</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行效果如图：</p>
<p><img src="@source/08-云原生与容器化/01-Docker &amp; Compose/01.docker/imgs/4.png" alt=""></p>
<p>MySQL安装完毕！通过任意客户端工具即可连接到MySQL.</p>
<p>大家可以发现，当我们执行命令后，Docker做的第一件事情，是去自动搜索并下载了MySQL，然后会自动运行MySQL，我们完全不用插手，是不是非常方便。</p>
<p>而且，这种安装方式你完全不用考虑运行的操作系统环境，它不仅仅在CentOS系统是这样，在Ubuntu系统、macOS系统、甚至是装了WSL的Windows下，都可以使用这条命令来安装MySQL。</p>
<p>要知道，<strong>不同操作系统下其安装包、运行环境是都不相同的</strong>！如果是<strong>手动安装，必须手动解决安装包不同、环境不同的、配置不同的问题</strong>！</p>
<p>而使用Docker，这些完全不用考虑。就是因为Docker会自动搜索并下载MySQL。注意：这里下载的不是安装包，而是<strong>镜像。<strong>镜像中不仅包含了MySQL本身，还包含了其运行所需要的环境、配置、系统级函数库。因此它在运行时就有自己独立的环境，就可以跨系统运行，也不需要手动再次配置环境了。这套独立运行的隔离环境我们称为</strong>容器</strong>。</p>
<p>说明：</p>
<ul>
<li>镜像：英文是image</li>
<li>容器：英文是container</li>
</ul>
<blockquote>
<p>因此，Docker安装软件的过程，就是自动搜索下载镜像，然后创建并运行容器的过程。</p>
</blockquote>
<p>Docker会根据命令中的镜像名称自动搜索并下载镜像，那么问题来了，它是去哪里搜索和下载镜像的呢？这些镜像又是谁制作的呢？</p>
<p>Docker官方提供了一个专门管理、存储镜像的网站，并对外开放了镜像上传、下载的权利。Docker官方提供了一些基础镜像，然后各大软件公司又在基础镜像基础上，制作了自家软件的镜像，全部都存放在这个网站。这个网站就成了Docker镜像交流的社区：</p>
<p>https://hub.docker.com/</p>
<p>基本上我们常用的各种软件都能在这个网站上找到，我们甚至可以自己制作镜像上传上去。</p>
<p>像这种提供存储、管理Docker镜像的服务器，被称为DockerRegistry，可以翻译为镜像仓库。DockerHub网站是官方仓库，阿里云、华为云会提供一些第三方仓库，我们也可以自己搭建私有的镜像仓库。</p>
<p>官方仓库在国外，下载速度较慢，一般我们都会使用第三方仓库提供的镜像加速功能，提高下载速度。而企业内部的机密项目，往往会采用私有镜像仓库。</p>
<p>总之，镜像的来源有两种：</p>
<ul>
<li>基于官方基础镜像自己制作</li>
<li>直接去DockerRegistry下载</li>
</ul>
<p><strong>总结一下</strong>：</p>
<p>Docker本身包含一个后台服务，我们可以利用Docker命令告诉Docker服务，帮助我们快速部署指定的应用。Docker服务部署应用时，首先要去搜索并下载应用对应的镜像，然后根据镜像创建并允许容器，应用就部署完成了。</p>
<p>用一幅图标示如下：</p>
<p><img src="@source/08-云原生与容器化/01-Docker &amp; Compose/01.docker/imgs/5.png" alt=""></p>
<h2 id="_2-2-命令解读" tabindex="-1"><a class="header-anchor" href="#_2-2-命令解读"><span>2.2.命令解读</span></a></h2>
<p>利用Docker快速的安装了MySQL，非常的方便，不过我们执行的命令到底是什么意思呢？</p>
<div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" data-title="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">docker run </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">d \</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">  --</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">name mysql \</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">  -</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">p </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">3306</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">3306</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> \</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">  -</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">e TZ</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">Asia</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">Shanghai \</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">  -</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">e MYSQL_ROOT_PASSWORD</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">123</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> \</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  mysql</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>解读：</p>
<ul>
<li><code v-pre>docker run -d</code> ：创建并运行一个容器，<code v-pre>-d</code>则是让容器以后台进程运行</li>
<li><code v-pre>--name mysql </code> : 给容器起个名字叫<code v-pre>mysql</code>，你可以叫别的</li>
<li><code v-pre>-p 3306:3306</code> : 设置端口映射。
<ul>
<li><strong>容器是隔离环境</strong>，外界不可访问。但是可以<strong>将<strong><strong>宿主机</strong></strong>端口****映射容器内到端口</strong>，当访问宿主机指定端口时，就是在访问容器内的端口了。</li>
<li>容器内端口往往是由容器内的进程决定，例如MySQL进程默认端口是3306，因此容器内端口一定是3306；而宿主机端口则可以任意指定，一般与容器内保持一致。</li>
<li>格式： <code v-pre>-p 宿主机端口:容器内端口</code>，示例中就是将宿主机的3306映射到容器内的3306端口</li>
</ul>
</li>
<li><code v-pre>-e TZ=Asia/Shanghai</code> : 配置容器内进程运行时的一些参数
<ul>
<li>格式：<code v-pre>-e KEY=VALUE</code>，KEY和VALUE都由容器内进程决定</li>
<li>案例中，<code v-pre>TZ=Asia/Shanghai</code>是设置时区；<code v-pre>MYSQL_ROOT_PASSWORD=123</code>是设置MySQL默认密码</li>
</ul>
</li>
<li><code v-pre>mysql</code> : 设置<strong>镜像</strong>名称，Docker会根据这个名字搜索并下载镜像
<ul>
<li>格式：<code v-pre>REPOSITORY:TAG</code>，例如<code v-pre>mysql:8.0</code>，其中<code v-pre>REPOSITORY</code>可以理解为镜像名，<code v-pre>TAG</code>是版本号</li>
<li>在未指定<code v-pre>TAG</code>的情况下，默认是最新版本，也就是<code v-pre>mysql:latest</code></li>
</ul>
</li>
</ul>
</blockquote>
<p>镜像的名称不是随意的，而是要到DockerRegistry中寻找，镜像运行时的配置也不是随意的，要参考镜像的帮助文档，这些在DockerHub网站或者软件的官方网站中都能找到。</p>
<p>如果我们要安装其它软件，也可以到DockerRegistry中寻找对应的镜像名称和版本，阅读相关配置即可。</p>
<h1 id="_3-docker基础" tabindex="-1"><a class="header-anchor" href="#_3-docker基础"><span>3.Docker基础</span></a></h1>
<p>接下来，我们一起来学习Docker使用的一些基础知识，为将来部署项目打下基础。具体用法可以参考Docker官方文档：</p>
<p>https://docs.docker.com/</p>
<h2 id="_3-1-常见命令" tabindex="-1"><a class="header-anchor" href="#_3-1-常见命令"><span>3.1.常见命令</span></a></h2>
<p>首先我们来学习Docker中的常见命令，可以参考官方文档：</p>
<p>https://docs.docker.com/engine/reference/commandline/cli/</p>
<h3 id="_3-1-1-命令介绍" tabindex="-1"><a class="header-anchor" href="#_3-1-1-命令介绍"><span>3.1.1.命令介绍</span></a></h3>
<p>其中，比较常见的命令有：</p>
<table>
<thead>
<tr>
<th style="text-align:left"><strong>命令</strong></th>
<th style="text-align:left"><strong>说明</strong></th>
<th style="text-align:left"><strong>文档地址</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">docker pull</td>
<td style="text-align:left">拉取镜像</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/pull/" target="_blank" rel="noopener noreferrer">docker pull</a></td>
</tr>
<tr>
<td style="text-align:left">docker push</td>
<td style="text-align:left">推送镜像到DockerRegistry</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/push/" target="_blank" rel="noopener noreferrer">docker push</a></td>
</tr>
<tr>
<td style="text-align:left">docker images</td>
<td style="text-align:left">查看本地镜像</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/images/" target="_blank" rel="noopener noreferrer">docker images</a></td>
</tr>
<tr>
<td style="text-align:left">docker rmi</td>
<td style="text-align:left">删除本地镜像</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/rmi/" target="_blank" rel="noopener noreferrer">docker rmi</a></td>
</tr>
<tr>
<td style="text-align:left">docker run</td>
<td style="text-align:left">创建并运行容器（不能重复创建）</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/run/" target="_blank" rel="noopener noreferrer">docker run</a></td>
</tr>
<tr>
<td style="text-align:left">docker stop</td>
<td style="text-align:left">停止指定容器</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/stop/" target="_blank" rel="noopener noreferrer">docker stop</a></td>
</tr>
<tr>
<td style="text-align:left">docker start</td>
<td style="text-align:left">启动指定容器</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/start/" target="_blank" rel="noopener noreferrer">docker start</a></td>
</tr>
<tr>
<td style="text-align:left">docker restart</td>
<td style="text-align:left">重新启动容器</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/restart/" target="_blank" rel="noopener noreferrer">docker restart</a></td>
</tr>
<tr>
<td style="text-align:left">docker rm</td>
<td style="text-align:left">删除指定容器</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/rm/" target="_blank" rel="noopener noreferrer">docs.docker.com</a></td>
</tr>
<tr>
<td style="text-align:left">docker ps</td>
<td style="text-align:left">查看容器</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/ps/" target="_blank" rel="noopener noreferrer">docker ps</a></td>
</tr>
<tr>
<td style="text-align:left">docker logs</td>
<td style="text-align:left">查看容器运行日志</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/logs/" target="_blank" rel="noopener noreferrer">docker logs</a></td>
</tr>
<tr>
<td style="text-align:left">docker exec</td>
<td style="text-align:left">进入容器</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/exec/" target="_blank" rel="noopener noreferrer">docker exec</a></td>
</tr>
<tr>
<td style="text-align:left">docker save</td>
<td style="text-align:left">保存镜像到本地压缩文件</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/save/" target="_blank" rel="noopener noreferrer">docker save</a></td>
</tr>
<tr>
<td style="text-align:left">docker load</td>
<td style="text-align:left">加载本地压缩文件到镜像</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/load/" target="_blank" rel="noopener noreferrer">docker load</a></td>
</tr>
<tr>
<td style="text-align:left">docker inspect</td>
<td style="text-align:left">查看容器详细信息</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/inspect/" target="_blank" rel="noopener noreferrer">docker inspect</a></td>
</tr>
</tbody>
</table>
<p>用一副图来表示这些命令的关系：</p>
<p><img src="@source/08-云原生与容器化/01-Docker &amp; Compose/01.docker/imgs/6.png" alt=""></p>
<p>补充：</p>
<p>默认情况下，每次重启虚拟机我们都需要手动启动Docker和Docker中的容器。通过命令可以实现开机自启：</p>
<div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" data-title="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># Docker开机自启</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">systemctl enable docker</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># Docker容器开机自启</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">docker update </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">--</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">restart</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">always [</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">容器名</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">容器id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-1-2-演示" tabindex="-1"><a class="header-anchor" href="#_3-1-2-演示"><span>3.1.2.演示</span></a></h3>
<p>教学环节说明：我们以Nginx为例给大家演示上述命令。</p>
<div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" data-title="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 第1步，去DockerHub查看nginx镜像仓库及相关信息</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 第2步，拉取Nginx镜像</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">docker pull nginx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 第3步，查看镜像</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">docker images</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 结果如下：</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">REPOSITORY   TAG       IMAGE ID       CREATED         SIZE</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">nginx        latest    605c77e624dd   </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">16</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> months ago   </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">141</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">MB</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">mysql        latest    3218b38490ce   </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">17</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> months ago   </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">516</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">MB</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 第4步，创建并允许Nginx容器</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">docker run </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">d </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">--</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">name nginx </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">p </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">80</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">80</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> nginx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 第5步，查看运行中容器</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">docker ps</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 也可以加格式化方式访问，格式会更加清爽</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">docker ps </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">--</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">format </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"table {{.ID}}\t{{.Image}}\t{{.Ports}}\t{{.Status}}\t{{.Names}}"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 第6步，访问网页，地址：http://虚拟机地址</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 第7步，停止容器</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">docker stop nginx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 第8步，查看所有容器</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">docker ps </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">a </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">--</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">format </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"table {{.ID}}\t{{.Image}}\t{{.Ports}}\t{{.Status}}\t{{.Names}}"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 第9步，再次启动nginx容器</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">docker start nginx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 第10步，再次查看容器</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">docker ps </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">--</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">format </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"table {{.ID}}\t{{.Image}}\t{{.Ports}}\t{{.Status}}\t{{.Names}}"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 第11步，查看容器详细信息</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">docker inspect nginx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 第12步，进入容器,查看容器内目录</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">docker exec </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">it nginx bash</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 或者，可以进入MySQL</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">docker exec </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">it mysql mysql </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">uroot </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">p</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 第13步，删除容器</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">docker rm nginx</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 发现无法删除，因为容器运行中，强制删除容器</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">docker rm </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">-f</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> nginx</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-1-3-命令别名" tabindex="-1"><a class="header-anchor" href="#_3-1-3-命令别名"><span>3.1.3.命令别名</span></a></h3>
<p>给常用Docker命令起别名，方便我们访问：</p>
<div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" data-title="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 修改/root/.bashrc文件</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">vi </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">root</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.bashrc</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">内容如下：</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># .bashrc</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># User specific aliases and functions</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">alias rm</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'rm -i'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">alias cp</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'cp -i'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">alias mv</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'mv -i'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">alias dps</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'docker ps --format "table {{.ID}}\t{{.Image}}\t{{.Ports}}\t{{.Status}}\t{{.Names}}"'</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">alias dis</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'docker images'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># Source global definitions</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [ </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">-f</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> /</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">etc</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">bashrc</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> ]; then</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        . </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">etc</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">bashrc</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">fi</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，执行命令使别名生效</p>
<div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" data-title="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">source </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">root</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.bashrc</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>接下来，试试看新的命令吧。</p>
<h2 id="_3-2-数据卷" tabindex="-1"><a class="header-anchor" href="#_3-2-数据卷"><span>3.2.数据卷</span></a></h2>
<p>容器是隔离环境，容器内程序的文件、配置、运行时产生的容器都在容器内部，我们要读写容器内的文件非常不方便。大家思考几个问题：</p>
<ul>
<li>如果要升级MySQL版本，需要销毁旧容器，那么数据岂不是跟着被销毁了？</li>
<li>MySQL、Nginx容器运行后，如果我要修改其中的某些配置该怎么办？</li>
<li>我想要让Nginx代理我的静态资源怎么办？</li>
</ul>
<p>因此，容器提供程序的运行环境，但是<strong>程序运行产生的数据、程序运行依赖的配置都应该与容器****解耦</strong>。</p>
<h3 id="_3-2-1-什么是数据卷" tabindex="-1"><a class="header-anchor" href="#_3-2-1-什么是数据卷"><span>3.2.1.什么是数据卷</span></a></h3>
<p><strong>数据卷（volume）<strong>是一个虚拟目录，是</strong>容器内目录</strong>与<strong>宿主机****目录</strong>之间映射的桥梁。</p>
<p>以Nginx为例，我们知道Nginx中有两个关键的目录：</p>
<ul>
<li><code v-pre>html</code>：放置一些静态资源</li>
<li><code v-pre>conf</code>：放置配置文件</li>
</ul>
<p>如果我们要让Nginx代理我们的静态资源，最好是放到<code v-pre>html</code>目录；如果我们要修改Nginx的配置，最好是找到<code v-pre>conf</code>下的<code v-pre>nginx.conf</code>文件。</p>
<p>但遗憾的是，容器运行的Nginx所有的文件都在容器内部。所以我们必须利用数据卷将两个目录与宿主机目录关联，方便我们操作。如图：</p>
<p><img src="@source/08-云原生与容器化/01-Docker &amp; Compose/01.docker/imgs/7.png" alt=""></p>
<p>在上图中：</p>
<ul>
<li>我们创建了两个数据卷：<code v-pre>conf</code>、<code v-pre>html</code></li>
<li>Nginx容器内部的<code v-pre>conf</code>目录和<code v-pre>html</code>目录分别与两个数据卷关联。</li>
<li>而数据卷conf和html分别指向了宿主机的<code v-pre>/var/lib/docker/volumes/conf/_data</code>目录和<code v-pre>/var/lib/docker/volumes/html/_data</code>目录</li>
</ul>
<p>这样以来，容器内的<code v-pre>conf</code>和<code v-pre>html</code>目录就 与宿主机的<code v-pre>conf</code>和<code v-pre>html</code>目录关联起来，我们称为<strong>挂载</strong>。此时，我们操作宿主机的<code v-pre>/var/lib/docker/volumes/html/_data</code>就是在操作容器内的<code v-pre>/usr/share/nginx/html/_data</code>目录。只要我们将静态资源放入宿主机对应目录，就可以被Nginx代理了。</p>
<p><strong>小提示</strong>：</p>
<p><code v-pre>/var/lib/docker/volumes</code>这个目录就是默认的存放所有容器数据卷的目录，其下再根据数据卷名称创建新目录，格式为<code v-pre>/数据卷名/_data</code>。</p>
<p><strong>为什么不让容器目录直接指向<strong><strong>宿主机</strong></strong>目录呢</strong>？</p>
<ul>
<li>因为直接指向宿主机目录就与宿主机强耦合了，如果切换了环境，宿主机目录就可能发生改变了。由于容器一旦创建，目录挂载就无法修改，这样容器就无法正常工作了。</li>
<li>但是容器指向数据卷，一个逻辑名称，而数据卷再指向宿主机目录，就不存在强耦合。如果宿主机目录发生改变，只要改变数据卷与宿主机目录之间的映射关系即可。</li>
</ul>
<p>不过，我们通过由于数据卷目录比较深，不好寻找，通常我们也<strong>允许让容器直接与<strong><strong>宿主机</strong></strong>目录挂载而不使用数据卷</strong>，具体参考2.2.3小节。</p>
<h3 id="_2-2-2-数据卷命令" tabindex="-1"><a class="header-anchor" href="#_2-2-2-数据卷命令"><span>2.2.2.数据卷命令</span></a></h3>
<p>数据卷的相关命令有：</p>
<table>
<thead>
<tr>
<th style="text-align:left"><strong>命令</strong></th>
<th style="text-align:left"><strong>说明</strong></th>
<th style="text-align:left"><strong>文档地址</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">docker volume create</td>
<td style="text-align:left">创建数据卷</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/volume_create/" target="_blank" rel="noopener noreferrer">docker volume create</a></td>
</tr>
<tr>
<td style="text-align:left">docker volume ls</td>
<td style="text-align:left">查看所有数据卷</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/volume_ls/" target="_blank" rel="noopener noreferrer">docs.docker.com</a></td>
</tr>
<tr>
<td style="text-align:left">docker volume rm</td>
<td style="text-align:left">删除指定数据卷</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/volume_prune/" target="_blank" rel="noopener noreferrer">docs.docker.com</a></td>
</tr>
<tr>
<td style="text-align:left">docker volume inspect</td>
<td style="text-align:left">查看某个数据卷的详情</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/volume_inspect/" target="_blank" rel="noopener noreferrer">docs.docker.com</a></td>
</tr>
<tr>
<td style="text-align:left">docker volume prune</td>
<td style="text-align:left">清除数据卷</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/volume_prune/" target="_blank" rel="noopener noreferrer">docker volume prune</a></td>
</tr>
</tbody>
</table>
<p>注意：容器与数据卷的挂载要在创建容器时配置，对于创建好的容器，是不能设置数据卷的。而且<strong>创建容器的过程中，数据卷会自动创建</strong>。</p>
<p>教学<strong>演示环节</strong>：演示一下nginx的html目录挂载</p>
<div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" data-title="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 1.首先创建容器并指定数据卷，注意通过 -v 参数来指定数据卷</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">docker run </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">d </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">--</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">name nginx </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">p </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">80</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">80</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> -</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">v html:</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">usr</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">share</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">nginx</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">html nginx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 2.然后查看数据卷</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">docker volume ls</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 结果</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">DRIVER    VOLUME NAME</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">local     29524ff09715d3688eae3f99803a2796558dbd00ca584a25a4bbc193ca82459f</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">local     html</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 3.查看数据卷详情</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">docker volume inspect html</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 结果</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        "CreatedAt"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"2024-05-17T19:57:08+08:00"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        "Driver"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"local"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        "Labels"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: null,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        "Mountpoint"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"/var/lib/docker/volumes/html/_data"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        "Name"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"html"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        "Options"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: null,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        "Scope"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"local"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 4.查看/var/lib/docker/volumes/html/_data目录</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">ll </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">var</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">lib</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">docker</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">volumes</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">html</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">_data</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 可以看到与nginx的html目录内容一样，结果如下：</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">总用量 </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">8</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">rw</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">r</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">--</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">r</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">--</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">. </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> root root </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">497</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> 12月 </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">28</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2021</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> 50x.html</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">rw</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">r</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">--</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">r</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">--</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">. </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> root root </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">615</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> 12月 </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">28</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2021</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> index.html</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 5.进入该目录，并随意修改index.html内容</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">cd </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">var</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">lib</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">docker</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">volumes</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">html</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">_data</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">vi index.html</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 6.打开页面，查看效果</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 7.进入容器内部，查看/usr/share/nginx/html目录内的文件是否变化</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">docker exec </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">it nginx bash</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>教学<strong>演示环节</strong>：演示一下MySQL的匿名数据卷</p>
<div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" data-title="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 1.查看MySQL容器详细信息</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">docker inspect mysql</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 关注其中.Config.Volumes部分和.Mounts部分</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们关注两部分内容，第一是<code v-pre>.Config.Volumes</code>部分：</p>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "Config"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // ... 略</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    "Volumes"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "/var/lib/mysql"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // ... 略</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以发现这个容器声明了一个本地目录，需要挂载数据卷，但是<strong>数据卷未定义</strong>。这就是匿名卷。</p>
<p>然后，我们再看结果中的<code v-pre>.Mounts</code>部分：</p>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  "Mounts"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "Type"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"volume"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "Name"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"29524ff09715d3688eae3f99803a2796558dbd00ca584a25a4bbc193ca82459f"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "Source"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"/var/lib/docker/volumes/29524ff09715d3688eae3f99803a2796558dbd00ca584a25a4bbc193ca82459f/_data"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "Destination"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"/var/lib/mysql"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      "Driver"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"local"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  ]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以发现，其中有几个关键属性：</p>
<ul>
<li>Name：数据卷名称。由于定义容器未设置容器名，这里的就是匿名卷自动生成的名字，一串hash值。</li>
<li>Source：宿主机目录</li>
<li>Destination : 容器内的目录</li>
</ul>
<p>上述配置是将容器内的<code v-pre>/var/lib/mysql</code>这个目录，与数据卷<code v-pre>29524ff09715d3688eae3f99803a2796558dbd00ca584a25a4bbc193ca82459f</code>挂载。于是在宿主机中就有了<code v-pre>/var/lib/docker/volumes/29524ff09715d3688eae3f99803a2796558dbd00ca584a25a4bbc193ca82459f/_data</code>这个目录。这就是匿名数据卷对应的目录，其使用方式与普通数据卷没有差别。</p>
<p>接下来，可以查看该目录下的MySQL的data文件：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ls</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -l</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /var/lib/docker/volumes/29524ff09715d3688eae3f99803a2796558dbd00ca584a25a4bbc193ca82459f/_data</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>注意：每一个不同的镜像，将来创建容器后内部有哪些目录可以挂载，可以参考DockerHub对应的页面</p>
<h3 id="_3-2-3-挂载本地目录或文件" tabindex="-1"><a class="header-anchor" href="#_3-2-3-挂载本地目录或文件"><span>3.2.3.挂载本地目录或文件</span></a></h3>
<p>可以发现，数据卷的目录结构较深，如果我们去操作数据卷目录会不太方便。在很多情况下，我们会直接将容器目录与宿主机指定目录挂载。挂载语法与数据卷类似：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 挂载本地目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">-v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 本地目录:容器内目录</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 挂载本地文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">-v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 本地文件:容器内文件</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong>：本地目录或文件必须以 <code v-pre>/</code> 或 <code v-pre>./</code>开头，如果直接以名字开头，会被识别为数据卷名而非本地目录名。</p>
<p>例如：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">-v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysql:/var/lib/mysql</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> # 会被识别为一个数据卷叫mysql，运行时会自动创建这个数据卷</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">-v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ./mysql:/var/lib/mysql</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> # 会被识别为当前目录下的mysql目录，运行时如果不存在会创建目录</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>教学演示</strong>，删除并重新创建mysql容器，并完成本地目录挂载：</p>
<ul>
<li>挂载<code v-pre>/root/mysql/data</code>到容器内的<code v-pre>/var/lib/mysql</code>目录</li>
<li>挂载<code v-pre>/root/mysql/init</code>到容器内的<code v-pre>/docker-entrypoint-initdb.d</code>目录（初始化的SQL脚本目录）</li>
<li>挂载<code v-pre>/root/mysql/conf</code>到容器内的<code v-pre>/etc/mysql/conf.d</code>目录（这个是MySQL配置文件目录）</li>
</ul>
<p>在课前资料中已经准备好了mysql的<code v-pre>init</code>目录和<code v-pre>conf</code>目录：</p>
<p><img src="@source/08-云原生与容器化/01-Docker &amp; Compose/01.docker/imgs/8.png" alt=""></p>
<p>以及对应的初始化SQL脚本和配置文件：</p>
<p><img src="@source/08-云原生与容器化/01-Docker &amp; Compose/01.docker/imgs/9.png" alt=""></p>
<p><img src="@source/08-云原生与容器化/01-Docker &amp; Compose/01.docker/imgs/10.png" alt=""></p>
<p>其中，hm.cnf主要是配置了MySQL的默认编码，改为utf8mb4；而hmall.sql则是后面我们要用到的黑马商城项目的初始化SQL脚本。</p>
<p>我们直接将整个mysql目录上传至虚拟机的<code v-pre>/root</code>目录下：</p>
<p><img src="@source/08-云原生与容器化/01-Docker &amp; Compose/01.docker/imgs/11.png" alt=""></p>
<p>接下来，我们演示本地目录挂载：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 1.删除原来的MySQL容器</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> rm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysql</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 2.进入root目录</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ~</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 3.创建并运行新mysql容器，挂载本地目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysql</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 3306:3306</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> TZ=Asia/Shanghai</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> MYSQL_ROOT_PASSWORD=password</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ./mysql/data:/var/lib/mysql</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ./mysql/conf:/etc/mysql/conf.d</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ./mysql/init:/docker-entrypoint-initdb.d</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  mysql</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 4.查看root目录，可以发现~/mysql/data目录已经自动创建好了</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ls</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -l</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysql</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 结果：</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">总用量</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 4</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">drwxr-xr-x.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> root</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    root</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">   20</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 5月</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  19</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 15:11</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> conf</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">drwxr-xr-x.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 7</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> polkitd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> root</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 4096</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 5月</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  19</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 15:11</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> data</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">drwxr-xr-x.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> root</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    root</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">   23</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 5月</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  19</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 15:11</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> init</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 查看data目录，会发现里面有大量数据库数据，说明数据库完成了初始化</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ls</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -l</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> data</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 5.查看MySQL容器内数据</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 5.1.进入MySQL</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> exec</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -it</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysql</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysql</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -uroot</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p123</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 5.2.查看编码表</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">show</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> variables</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> like</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "%char%"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 5.3.结果，发现编码是utf8mb4没有问题</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">+--------------------------+--------------------------------+</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">| </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Variable_name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">                          |</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">+--------------------------+--------------------------------+</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">| </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">character_set_client</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">     | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">utf8mb4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">                        |</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">| </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">character_set_connection</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">utf8mb4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">                        |</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">| </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">character_set_database</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">   | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">utf8mb4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">                        |</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">| </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">character_set_filesystem</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">binary</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">                         |</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">| </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">character_set_results</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">utf8mb4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">                        |</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">| </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">character_set_server</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">     | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">utf8mb4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">                        |</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">| </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">character_set_system</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">     | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">utf8mb3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">                        |</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">| </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">character_sets_dir</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">       | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">/usr/share/mysql-8.0/charsets/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> |</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">+--------------------------+--------------------------------+</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 6.查看数据</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 6.1.查看数据库</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">show</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> databases</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 结果，hmall是黑马商城数据库</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">+--------------------+</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">| </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Database</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">           |</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">+--------------------+</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">| </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">hmall</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">              |</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">| </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">information_schema</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> |</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">| </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mysql</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">              |</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">| </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">performance_schema</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> |</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">| </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sys</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">                |</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">+--------------------+</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">5</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> rows</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> in</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> set</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (0.00 </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">sec</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 6.2.切换到hmall数据库</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">use</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> hmall</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 6.3.查看表</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">show</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> tables</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 结果：</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">+-----------------+</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">| </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Tables_in_hmall</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> |</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">+-----------------+</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">| </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">address</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">         |</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">| </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cart</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            |</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">| </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">item</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            |</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">| </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">order</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">           |</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">| </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">order_detail</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    |</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">| </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">order_logistics</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> |</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">| </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pay_order</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">       |</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">| </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            |</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">+-----------------+</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 6.4.查看address表数据</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">+----+---------+----------+--------+----------+-------------+---------------+-----------+------------+-------+</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">| </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">user_id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">province</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">city</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">   | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">town</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">     | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mobile</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">street</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">contact</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">   | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">is_default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">notes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> |</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">+----+---------+----------+--------+----------+-------------+---------------+-----------+------------+-------+</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">| </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">59</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> |       </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">北京</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">     | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">北京</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">   | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">朝阳区</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">13900112222</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">金燕龙办公楼</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">   | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">李佳诚</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">          | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">NULL</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  |</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">| </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">60</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> |       </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">北京</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">     | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">北京</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">   | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">朝阳区</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">13700221122</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">修正大厦</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">       | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">李佳红</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">          | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">NULL</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  |</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">| </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">61</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> |       </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">上海</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">     | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">上海</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">   | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">浦东新区</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">13301212233</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">航头镇航头路</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">   | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">李佳星</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">          | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">NULL</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  |</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">| </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">63</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> |       </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">广东</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">     | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">佛山</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">   | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">永春</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">13301212233</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">永春武馆</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">       | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">李晓龙</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">          | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">NULL</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  |</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">+----+---------+----------+--------+----------+-------------+---------------+-----------+------------+-------+</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">4</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> rows</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> in</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> set</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (0.00 </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">sec</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-3-镜像" tabindex="-1"><a class="header-anchor" href="#_3-3-镜像"><span>3.3.镜像</span></a></h2>
<p>前面我们一直在使用别人准备好的镜像，那如果我要部署一个Java项目，把它打包为一个镜像该怎么做呢？</p>
<h3 id="_3-3-1-镜像结构" tabindex="-1"><a class="header-anchor" href="#_3-3-1-镜像结构"><span>3.3.1.镜像结构</span></a></h3>
<p>要想自己构建镜像，必须先了解镜像的结构。</p>
<p>之前我们说过，镜像之所以能让我们快速跨操作系统部署应用而忽略其运行环境、配置，就是因为镜像中包含了程序运行需要的系统函数库、环境、配置、依赖。</p>
<p>因此，自定义镜像本质就是依次准备好程序运行的基础环境、依赖、应用本身、运行配置等文件，并且打包而成。</p>
<p>举个例子，我们要从0部署一个Java应用，大概流程是这样：</p>
<ul>
<li>准备一个linux服务（CentOS或者Ubuntu均可）</li>
<li>安装并配置JDK</li>
<li>上传Jar包</li>
<li>运行jar包</li>
</ul>
<p>那因此，我们打包镜像也是分成这么几步：</p>
<ul>
<li>准备Linux运行环境（java项目并不需要完整的操作系统，仅仅是基础运行环境即可）</li>
<li>安装并配置JDK</li>
<li>拷贝jar包</li>
<li>配置启动脚本</li>
</ul>
<p>上述步骤中的每一次操作其实都是在生产一些文件（系统运行环境、函数库、配置最终都是磁盘文件），所以<strong>镜像就是一堆文件的集合</strong>。</p>
<p>但需要注意的是，镜像文件不是随意堆放的，而是按照操作的步骤分层叠加而成，每一层形成的文件都会单独打包并标记一个唯一id，称为<strong>Layer</strong>（<strong>层</strong>）。这样，如果我们构建时用到的某些层其他人已经制作过，就可以直接拷贝使用这些层，而不用重复制作。</p>
<p>例如，第一步中需要的Linux运行环境，通用性就很强，所以Docker官方就制作了这样的只包含Linux运行环境的镜像。我们在制作java镜像时，就无需重复制作，直接使用Docker官方提供的CentOS或Ubuntu镜像作为基础镜像。然后再搭建其它层即可，这样逐层搭建，最终整个Java项目的镜像结构如图所示：</p>
<p><img src="@source/08-云原生与容器化/01-Docker &amp; Compose/01.docker/imgs/12.png" alt=""></p>
<h3 id="_3-3-2-dockerfile" tabindex="-1"><a class="header-anchor" href="#_3-3-2-dockerfile"><span>3.3.2.Dockerfile</span></a></h3>
<p>由于制作镜像的过程中，需要逐层处理和打包，比较复杂，所以Docker就提供了自动打包镜像的功能。我们只需要将打包的过程，每一层要做的事情用固定的语法写下来，交给Docker去执行即可。</p>
<p>而这种记录镜像结构的文件就称为<strong>Dockerfile</strong>，其对应的语法可以参考官方文档：</p>
<p>https://docs.docker.com/engine/reference/builder/</p>
<p>其中的语法比较多，比较常用的有：</p>
<table>
<thead>
<tr>
<th style="text-align:left"><strong>指令</strong></th>
<th style="text-align:left"><strong>说明</strong></th>
<th style="text-align:left"><strong>示例</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><strong>FROM</strong></td>
<td style="text-align:left">指定基础镜像</td>
<td style="text-align:left"><code v-pre>FROM centos:6</code></td>
</tr>
<tr>
<td style="text-align:left"><strong>ENV</strong></td>
<td style="text-align:left">设置环境变量，可在后面指令使用</td>
<td style="text-align:left"><code v-pre>ENV key value</code></td>
</tr>
<tr>
<td style="text-align:left"><strong>COPY</strong></td>
<td style="text-align:left">拷贝本地文件到镜像的指定目录</td>
<td style="text-align:left"><code v-pre>COPY ./xx.jar /tmp/app.jar</code></td>
</tr>
<tr>
<td style="text-align:left"><strong>RUN</strong></td>
<td style="text-align:left">执行Linux的shell命令，一般是安装过程的命令</td>
<td style="text-align:left"><code v-pre>RUN yum install gcc</code></td>
</tr>
<tr>
<td style="text-align:left"><strong>EXPOSE</strong></td>
<td style="text-align:left">指定容器运行时监听的端口，是给镜像使用者看的</td>
<td style="text-align:left">EXPOSE 8080</td>
</tr>
<tr>
<td style="text-align:left"><strong>ENTRYPOINT</strong></td>
<td style="text-align:left">镜像中应用的启动命令，容器运行时调用</td>
<td style="text-align:left">ENTRYPOINT java -jar xx.jar</td>
</tr>
</tbody>
</table>
<p>例如，要基于Ubuntu镜像来构建一个Java应用，其Dockerfile内容如下：</p>
<div class="language-dockerfile line-numbers-mode" data-highlighter="shiki" data-ext="dockerfile" data-title="dockerfile" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 指定基础镜像</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> ubuntu:16.04</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 配置环境变量，JDK的安装目录、容器内时区</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ENV</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> JAVA_DIR=/usr/local</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ENV</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> TZ=Asia/Shanghai</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 拷贝jdk和java项目的包</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">COPY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> ./jdk8.tar.gz $JAVA_DIR/</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">COPY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> ./docker-demo.jar /tmp/app.jar</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 设定时区</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">RUN</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> ln -snf /usr/share/zoneinfo/$TZ /etc/localtime &#x26;&#x26; echo $TZ > /etc/timezone</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 安装JDK</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">RUN</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> cd $JAVA_DIR \</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x26;&#x26; tar -xf ./jdk8.tar.gz \</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x26;&#x26; mv ./jdk1.8.0_144 ./java8</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 配置环境变量</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ENV</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> JAVA_HOME=$JAVA_DIR/java8</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ENV</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> PATH=$PATH:$JAVA_HOME/bin</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 指定项目监听的端口</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">EXPOSE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> 8080</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 入口，java项目的启动命令</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ENTRYPOINT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"java"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"-jar"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"/app.jar"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同学们思考一下：以后我们会有很多很多java项目需要打包为镜像，他们都需要Linux系统环境、JDK环境这两层，只有上面的3层不同（因为jar包不同）。如果每次制作java镜像都重复制作前两层镜像，是不是很麻烦。</p>
<p>所以，就有人提供了基础的系统加JDK环境，我们在此基础上制作java镜像，就可以省去JDK的配置了：</p>
<div class="language-dockerfile line-numbers-mode" data-highlighter="shiki" data-ext="dockerfile" data-title="dockerfile" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 基础镜像</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> openjdk:11.0-jre-buster</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 设定时区</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ENV</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> TZ=Asia/Shanghai</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">RUN</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> ln -snf /usr/share/zoneinfo/$TZ /etc/localtime &#x26;&#x26; echo $TZ > /etc/timezone</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 拷贝jar包</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">COPY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> docker-demo.jar /app.jar</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 入口</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ENTRYPOINT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"java"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"-jar"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"/app.jar"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>是不是简单多了。</p>
<h3 id="_3-3-3-构建镜像" tabindex="-1"><a class="header-anchor" href="#_3-3-3-构建镜像"><span>3.3.3.构建镜像</span></a></h3>
<p>当Dockerfile文件写好以后，就可以利用命令来构建镜像了。</p>
<p>在课前资料中，我们准备好了一个demo项目及对应的Dockerfile：</p>
<p><img src="@source/08-云原生与容器化/01-Docker &amp; Compose/01.docker/imgs/13.png" alt=""></p>
<p>首先，我们将课前资料提供的<code v-pre>docker-demo.jar</code>包以及<code v-pre>Dockerfile</code>拷贝到虚拟机的<code v-pre>/root/demo</code>目录：</p>
<p><img src="@source/08-云原生与容器化/01-Docker &amp; Compose/01.docker/imgs/14.png" alt=""></p>
<p>然后，执行命令，构建镜像：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 进入镜像目录</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /root/demo</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 开始构建</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> build</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -t</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docker-demo:1.0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> .</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令说明：</p>
<ul>
<li><code v-pre>docker build </code>: 就是构建一个docker镜像</li>
<li><code v-pre>-t docker-demo:1.0</code> ：<code v-pre>-t</code>参数是指定镜像的名称（<code v-pre>repository</code>和<code v-pre>tag</code>）</li>
<li><code v-pre>.</code> : 最后的点是指构建时Dockerfile所在路径，由于我们进入了demo目录，所以指定的是<code v-pre>.</code>代表当前目录，也可以直接指定Dockerfile目录：
<ul>
<li>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 直接指定Dockerfile目录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> build</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -t</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docker-demo:1.0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /root/demo</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<p>结果：</p>
<p><img src="@source/08-云原生与容器化/01-Docker &amp; Compose/01.docker/imgs/15.png" alt=""></p>
<p>查看镜像列表：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 查看镜像列表：</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> images</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 结果</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">REPOSITORY</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    TAG</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">       IMAGE</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ID</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">       CREATED</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">          SIZE</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker-demo</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">   1.0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">       d6ab0b9e64b9</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">   27</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> minutes</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ago</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   327MB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">nginx</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">         latest</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    605c77e624dd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">   16</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> months</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ago</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    141MB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mysql</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">         latest</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    3218b38490ce</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">   17</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> months</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ago</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    516MB</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后尝试运行该镜像：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 1.创建并运行容器</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 8080:8080</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docker-demo:1.0</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 2.查看容器</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">dps</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 结果</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">CONTAINER</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ID</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   IMAGE</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">             PORTS</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                                                  STATUS</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">         NAMES</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">78a000447b49</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   docker-demo:1.0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   0.0.0.0:8080</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">-></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">8080/tcp,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> :::8090</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">-></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">8090/tcp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">              Up</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> seconds</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   dd</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">f63cfead8502</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   mysql</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">             0.0.0.0:3306</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">-></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">3306/tcp,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> :::3306</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">-></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">3306/tcp,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 33060/tcp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   Up</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> hours</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">     mysql</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 3.访问</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">curl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> localhost:8080/hello/count</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 结果：</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;h5>欢迎访问黑马商城, 这是您第1次访问&#x3C;h5></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-4-网络" tabindex="-1"><a class="header-anchor" href="#_3-4-网络"><span>3.4.网络</span></a></h2>
<p>上节课我们创建了一个Java项目的容器，而Java项目往往需要访问其它各种中间件，例如MySQL、Redis等。现在，我们的容器之间能否互相访问呢？我们来测试一下</p>
<p>首先，我们查看下MySQL容器的详细信息，重点关注其中的网络IP地址：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 1.用基本命令，寻找Networks.bridge.IPAddress属性</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> inspect</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysql</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 也可以使用format过滤结果</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> inspect</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --format=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'{{range .NetworkSettings.Networks}}{{println .IPAddress}}{{end}}'</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysql</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 得到IP地址如下：</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">172.17.0.2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 2.然后通过命令进入dd容器</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> exec</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -it</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 3.在容器内，通过ping命令测试网络</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ping</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 172.17.0.2</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 结果</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">PING</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 172.17.0.2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (172.17.0.2) 56(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">84</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) bytes of data.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">64</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> bytes</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 172.17.0.2:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> icmp_seq=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ttl=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">64</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> time=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0.053</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ms</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">64</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> bytes</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 172.17.0.2:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> icmp_seq=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ttl=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">64</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> time=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0.059</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ms</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">64</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> bytes</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 172.17.0.2:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> icmp_seq=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ttl=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">64</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> time=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0.058</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ms</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>发现可以互联，没有问题。</p>
<p>但是，容器的网络IP其实是一个虚拟的IP，其值并不固定与某一个容器绑定，如果我们在开发时写死某个IP，而在部署时很可能MySQL容器的IP会发生变化，连接会失败。</p>
<p>所以，我们必须借助于docker的网络功能来解决这个问题，官方文档：</p>
<p>https://docs.docker.com/engine/reference/commandline/network/</p>
<p>常见命令有：</p>
<table>
<thead>
<tr>
<th style="text-align:left"><strong>命令</strong></th>
<th style="text-align:left"><strong>说明</strong></th>
<th style="text-align:left"><strong>文档地址</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">docker network create</td>
<td style="text-align:left">创建一个网络</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/network_create/" target="_blank" rel="noopener noreferrer">docker network create</a></td>
</tr>
<tr>
<td style="text-align:left">docker network ls</td>
<td style="text-align:left">查看所有网络</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/network_ls/" target="_blank" rel="noopener noreferrer">docs.docker.com</a></td>
</tr>
<tr>
<td style="text-align:left">docker network rm</td>
<td style="text-align:left">删除指定网络</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/network_rm/" target="_blank" rel="noopener noreferrer">docs.docker.com</a></td>
</tr>
<tr>
<td style="text-align:left">docker network prune</td>
<td style="text-align:left">清除未使用的网络</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/network_prune/" target="_blank" rel="noopener noreferrer">docs.docker.com</a></td>
</tr>
<tr>
<td style="text-align:left">docker network connect</td>
<td style="text-align:left">使指定容器连接加入某网络</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/network_connect/" target="_blank" rel="noopener noreferrer">docs.docker.com</a></td>
</tr>
<tr>
<td style="text-align:left">docker network disconnect</td>
<td style="text-align:left">使指定容器连接离开某网络</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/network_disconnect/" target="_blank" rel="noopener noreferrer">docker network disconnect</a></td>
</tr>
<tr>
<td style="text-align:left">docker network inspect</td>
<td style="text-align:left">查看网络详细信息</td>
<td style="text-align:left"><a href="https://docs.docker.com/engine/reference/commandline/network_inspect/" target="_blank" rel="noopener noreferrer">docker network inspect</a></td>
</tr>
</tbody>
</table>
<p>教学演示：自定义网络</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 1.首先通过命令创建一个网络</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> network</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> create</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> hmall</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 2.然后查看网络</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> network</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ls</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 结果：</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">NETWORK</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ID</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">     NAME</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">      DRIVER</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    SCOPE</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">639bc44d0a87</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   bridge</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    bridge</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    local</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">403f16ec62a2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   hmall</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">     bridge</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    local</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">0dc0f72a0fbb</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   host</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">      host</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">      local</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cd8d3e8df47b</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   none</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">      null</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">      local</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 其中，除了hmall以外，其它都是默认的网络</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 3.让dd和mysql都加入该网络，注意，在加入网络时可以通过--alias给容器起别名</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 这样该网络内的其它容器可以用别名互相访问！</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 3.1.mysql容器，指定别名为db，另外每一个容器都有一个别名是容器名</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> network</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> connect</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> hmall</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysql</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --alias</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> db</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 3.2.db容器，也就是我们的java项目</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> network</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> connect</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> hmall</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dd</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 4.进入dd容器，尝试利用别名访问db</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 4.1.进入容器</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> exec</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -it</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> bash</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 4.2.用db别名访问</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ping</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> db</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 结果</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">PING</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> db</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (172.18.0.2) 56(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">84</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) bytes of data.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">64</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> bytes</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysql.hmall</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (172.18.0.2): </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">icmp_seq</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">1</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> ttl</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">64</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> time</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">0.070</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> ms</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">64</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> bytes</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysql.hmall</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (172.18.0.2): </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">icmp_seq</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">2</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> ttl</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">64</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> time</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">0.056</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> ms</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 4.3.用容器名访问</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ping</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysql</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 结果：</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">PING</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysql</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (172.18.0.2) 56(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">84</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) bytes of data.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">64</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> bytes</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysql.hmall</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (172.18.0.2): </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">icmp_seq</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">1</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> ttl</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">64</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> time</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">0.044</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> ms</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">64</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> bytes</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysql.hmall</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (172.18.0.2): </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">icmp_seq</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">2</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> ttl</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">64</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> time</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">0.054</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> ms</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>OK，现在无需记住IP地址也可以实现容器互联了。</p>
<p><strong>总结</strong>：</p>
<ul>
<li>在自定义网络中，可以给容器起多个别名，默认的别名是容器名本身</li>
<li>在同一个自定义网络中的容器，可以通过别名互相访问</li>
</ul>
<h1 id="_4-项目部署" tabindex="-1"><a class="header-anchor" href="#_4-项目部署"><span>4.项目部署</span></a></h1>
<p>好了，我们已经熟悉了Docker的基本用法，接下来可以尝试部署项目了。</p>
<p>在课前资料中已经提供了一个黑马商城项目给大家，如图：</p>
<p>项目说明：</p>
<ul>
<li>hmall：商城的后端代码</li>
<li>hmall-portal：商城用户端的前端代码</li>
<li>hmall-admin：商城管理端的前端代码</li>
</ul>
<p>部署的容器及端口说明：</p>
<table>
<thead>
<tr>
<th style="text-align:left"><strong>项目</strong></th>
<th style="text-align:left"><strong>容器名</strong></th>
<th style="text-align:left"><strong>端口</strong></th>
<th style="text-align:left"><strong>备注</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">hmall</td>
<td style="text-align:left">hmall</td>
<td style="text-align:left">8080</td>
<td style="text-align:left">黑马商城后端API入口</td>
</tr>
<tr>
<td style="text-align:left">hmall-portal</td>
<td style="text-align:left">nginx</td>
<td style="text-align:left">18080</td>
<td style="text-align:left">黑马商城用户端入口</td>
</tr>
<tr>
<td style="text-align:left">hmall-admin</td>
<td style="text-align:left">18081</td>
<td style="text-align:left">黑马商城管理端入口</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">mysql</td>
<td style="text-align:left">mysql</td>
<td style="text-align:left">3306</td>
<td style="text-align:left">数据库</td>
</tr>
</tbody>
</table>
<p>在正式部署前，我们先删除之前的nginx、dd两个容器：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> rm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> nginx</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dd</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>mysql容器中已经准备好了商城的数据，所以就不再删除了。</p>
<h2 id="_4-1-部署java项目" tabindex="-1"><a class="header-anchor" href="#_4-1-部署java项目"><span>4.1.部署Java项目</span></a></h2>
<p><code v-pre>hmall</code>项目是一个maven聚合项目，使用IDEA打开<code v-pre>hmall</code>项目，查看项目结构如图：</p>
<p><img src="@source/08-云原生与容器化/01-Docker &amp; Compose/01.docker/imgs/16.png" alt=""></p>
<p>我们要部署的就是其中的<code v-pre>hm-service</code>，其中的配置文件采用了多环境的方式：</p>
<p><img src="@source/08-云原生与容器化/01-Docker &amp; Compose/01.docker/imgs/17.png" alt=""></p>
<p>其中的<code v-pre>application-dev.yaml</code>是部署到开发环境的配置，<code v-pre>application-local.yaml</code>是本地运行时的配置。</p>
<p>查看application.yaml，你会发现其中的JDBC地址并未写死，而是读取变量：</p>
<p><img src="@source/08-云原生与容器化/01-Docker &amp; Compose/01.docker/imgs/18.png" alt=""></p>
<p>这两个变量在<code v-pre>application-dev.yaml</code>和<code v-pre>application-local.yaml</code>中并不相同：</p>
<p><img src="@source/08-云原生与容器化/01-Docker &amp; Compose/01.docker/imgs/19.png" alt=""></p>
<p>在dev开发环境（也就是Docker部署时）采用了mysql作为地址，刚好是我们的mysql容器名，只要两者在一个网络，就一定能互相访问。</p>
<p>我们将项目打包：</p>
<p><img src="@source/08-云原生与容器化/01-Docker &amp; Compose/01.docker/imgs/20.png" alt=""></p>
<p>结果：</p>
<p><img src="@source/08-云原生与容器化/01-Docker &amp; Compose/01.docker/imgs/21.png" alt=""></p>
<p>将<code v-pre>hm-service</code>目录下的<code v-pre>Dockerfile</code>和<code v-pre>hm-service/target</code>目录下的<code v-pre>hm-service.jar</code>一起上传到虚拟机的<code v-pre>root</code>目录：</p>
<p><img src="@source/08-云原生与容器化/01-Docker &amp; Compose/01.docker/imgs/22.png" alt=""></p>
<p>部署项目：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 1.构建项目镜像，不指定tag，则默认为latest</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> build</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -t</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> hmall</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> .</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 2.查看镜像</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> images</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 结果</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">REPOSITORY</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    TAG</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">       IMAGE</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ID</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">       CREATED</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">          SIZE</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">hmall</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">         latest</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    0bb07b2c34b9</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">   43</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> seconds</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ago</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   362MB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker-demo</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">   1.0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">       49743484da68</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">   24</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> hours</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ago</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">     327MB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">nginx</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">         latest</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    605c77e624dd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">   16</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> months</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ago</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    141MB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mysql</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">         latest</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    3218b38490ce</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">   17</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> months</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ago</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    516MB</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 3.创建并运行容器，并通过--network将其加入hmall网络，这样才能通过容器名访问mysql</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> hmall</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --network</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> hmall</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 8080:8080</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> hmall</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试，通过浏览器访问：http://你的虚拟机地址:8080/search/list</p>
<h2 id="_4-2-部署前端" tabindex="-1"><a class="header-anchor" href="#_4-2-部署前端"><span>4.2.部署前端</span></a></h2>
<p><code v-pre>hmall-portal</code>和<code v-pre>hmall-admin</code>是前端代码，需要基于nginx部署。在课前资料中已经给大家提供了nginx的部署目录：</p>
<p><img src="@source/08-云原生与容器化/01-Docker &amp; Compose/01.docker/imgs/23.png" alt=""></p>
<p>其中：</p>
<ul>
<li><code v-pre>html</code>是静态资源目录，我们需要把<code v-pre>hmall-portal</code>以及<code v-pre>hmall-admin</code>都复制进去</li>
<li><code v-pre>nginx.conf</code>是nginx的配置文件，主要是完成对<code v-pre>html</code>下的两个静态资源目录做代理</li>
</ul>
<p>我们现在要做的就是把整个nginx目录上传到虚拟机的<code v-pre>/root</code>目录下：</p>
<p><img src="@source/08-云原生与容器化/01-Docker &amp; Compose/01.docker/imgs/24.png" alt=""></p>
<p>然后创建nginx容器并完成两个挂载：</p>
<ul>
<li>把<code v-pre>/root/nginx/nginx.conf</code>挂载到<code v-pre>/etc/nginx/nginx.conf</code></li>
<li>把<code v-pre>/root/nginx/html</code>挂载到<code v-pre>/usr/share/nginx/html</code></li>
</ul>
<p>由于需要让nginx同时代理hmall-portal和hmall-admin两套前端资源，因此我们需要暴露两个端口：</p>
<ul>
<li>18080：对应hmall-portal</li>
<li>18081：对应hmall-admin</li>
</ul>
<p>命令如下：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> nginx</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 18080:18080</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 18081:18081</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /root/nginx/html:/usr/share/nginx/html</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /root/nginx/nginx.conf:/etc/nginx/nginx.conf</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  --network</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> hmall</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  nginx</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试，通过浏览器访问：http://你的虚拟机ip:18080</p>
<h2 id="_4-3-dockercompose" tabindex="-1"><a class="header-anchor" href="#_4-3-dockercompose"><span>4.3.DockerCompose</span></a></h2>
<p>大家可以看到，我们部署一个简单的java项目，其中包含3个容器：</p>
<ul>
<li>MySQL</li>
<li>Nginx</li>
<li>Java项目</li>
</ul>
<p>而稍微复杂的项目，其中还会有各种各样的其它中间件，需要部署的东西远不止3个。如果还像之前那样手动的逐一部署，就太麻烦了。</p>
<p>而Docker Compose就可以帮助我们实现<strong>多个相互关联的Docker容器的快速部署</strong>。它允许用户通过一个单独的 docker-compose.yml 模板文件（YAML 格式）来定义一组相关联的应用容器。</p>
<h3 id="_4-3-1-基本语法" tabindex="-1"><a class="header-anchor" href="#_4-3-1-基本语法"><span>4.3.1.基本语法</span></a></h3>
<p>docker-compose.yml文件的基本语法可以参考官方文档：</p>
<p>https://docs.docker.com/compose/compose-file/compose-file-v3/</p>
<p>docker-compose文件中可以定义多个相互关联的应用容器，每一个应用容器被称为一个服务（service）。由于service就是在定义某个应用的运行时参数，因此与<code v-pre>docker run</code>参数非常相似。</p>
<p>举例来说，用docker run部署MySQL的命令如下：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysql</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 3306:3306</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> TZ=Asia/Shanghai</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> MYSQL_ROOT_PASSWORD=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">123</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ./mysql/data:/var/lib/mysql</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ./mysql/conf:/etc/mysql/conf.d</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ./mysql/init:/docker-entrypoint-initdb.d</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  --network</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> hmall</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  mysql</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果用<code v-pre>docker-compose.yml</code>文件来定义，就是这样：</p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"3.8"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">services</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  mysql</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    image</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">mysql</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    container_name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">mysql</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    ports</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"3306:3306"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    environment</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      TZ</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Asia/Shanghai</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      MYSQL_ROOT_PASSWORD</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">123</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    volumes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"./mysql/conf:/etc/mysql/conf.d"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"./mysql/data:/var/lib/mysql"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    networks</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">new</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">networks</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  new</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">hmall</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对比如下：</p>
<table>
<thead>
<tr>
<th style="text-align:left"><strong>docker run 参数</strong></th>
<th style="text-align:left"><strong>docker compose 指令</strong></th>
<th style="text-align:left"><strong>说明</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">--name</td>
<td style="text-align:left">container_name</td>
<td style="text-align:left">容器名称</td>
</tr>
<tr>
<td style="text-align:left">-p</td>
<td style="text-align:left">ports</td>
<td style="text-align:left">端口映射</td>
</tr>
<tr>
<td style="text-align:left">-e</td>
<td style="text-align:left">environment</td>
<td style="text-align:left">环境变量</td>
</tr>
<tr>
<td style="text-align:left">-v</td>
<td style="text-align:left">volumes</td>
<td style="text-align:left">数据卷配置</td>
</tr>
<tr>
<td style="text-align:left">--network</td>
<td style="text-align:left">networks</td>
<td style="text-align:left">网络</td>
</tr>
</tbody>
</table>
<p>明白了其中的对应关系，相信编写<code v-pre>docker-compose</code>文件应该难不倒大家。</p>
<p>黑马商城部署文件：</p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"3.8"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">services</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  mysql</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    image</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">mysql</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    container_name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">mysql</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    ports</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"3306:3306"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    environment</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      TZ</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Asia/Shanghai</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      MYSQL_ROOT_PASSWORD</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">123</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    volumes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"./mysql/conf:/etc/mysql/conf.d"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"./mysql/data:/var/lib/mysql"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"./mysql/init:/docker-entrypoint-initdb.d"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    networks</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">hm-net</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  hmall</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    build</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      context</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">.</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      dockerfile</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Dockerfile</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    container_name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">hmall</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    ports</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"8080:8080"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    networks</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">hm-net</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    depends_on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">mysql</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  nginx</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    image</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">nginx</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    container_name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">nginx</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    ports</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"18080:18080"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"18081:18081"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    volumes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"./nginx/nginx.conf:/etc/nginx/nginx.conf"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"./nginx/html:/usr/share/nginx/html"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    depends_on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">hmall</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    networks</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">hm-net</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">networks</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  hm-net</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">hmall</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-2-基础命令" tabindex="-1"><a class="header-anchor" href="#_4-3-2-基础命令"><span>4.3.2.基础命令</span></a></h3>
<p>编写好docker-compose.yml文件，就可以部署项目了。常见的命令：</p>
<p>https://docs.docker.com/compose/reference/</p>
<p>基本语法如下：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> compose</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [OPTIONS] [COMMAND]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>其中，OPTIONS和COMMAND都是可选参数，比较常见的有：</p>
<table>
<thead>
<tr>
<th style="text-align:left"><strong>类型</strong></th>
<th style="text-align:left"><strong>参数或指令</strong></th>
<th style="text-align:left"><strong>说明</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Options</td>
<td style="text-align:left">-f</td>
<td style="text-align:left">指定compose文件的路径和名称</td>
</tr>
<tr>
<td style="text-align:left">-p</td>
<td style="text-align:left">指定project名称。project就是当前compose文件中设置的多个service的集合，是逻辑概念</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">Commands</td>
<td style="text-align:left">up</td>
<td style="text-align:left">创建并启动所有service容器</td>
</tr>
<tr>
<td style="text-align:left">down</td>
<td style="text-align:left">停止并移除所有容器、网络</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">ps</td>
<td style="text-align:left">列出所有启动的容器</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">logs</td>
<td style="text-align:left">查看指定容器的日志</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">stop</td>
<td style="text-align:left">停止容器</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">start</td>
<td style="text-align:left">启动容器</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">restart</td>
<td style="text-align:left">重启容器</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">top</td>
<td style="text-align:left">查看运行的进程</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">exec</td>
<td style="text-align:left">在指定的运行中容器中执行命令</td>
<td style="text-align:left"></td>
</tr>
</tbody>
</table>
<p>教学演示：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 1.进入root目录</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /root</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 2.删除旧容器</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> rm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -f</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> $(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ps</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -qa</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 3.删除hmall镜像</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> rmi</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> hmall</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 4.清空MySQL数据</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">rm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -rf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysql/data</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 5.启动所有, -d 参数是后台启动</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> compose</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> up</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 结果：</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[+] Building 15.5s (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">8/8</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) FINISHED</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">> [internal] load build definition from Dockerfile                                    0.0s</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">> => </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">transferring</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dockerfile:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 358B</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                                                    0.0s</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">> [internal] load .dockerignore                                                       0.0s</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">> => </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">transferring</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> context:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 2B</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                                                         0.0s</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">> [internal] load metadata </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> docker.io/library/openjdk:11.0-jre-buster             15.4s</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">> [1/3] FROM docker.io/library/openjdk:11.0-jre-buster@sha256:3546a17e6fb4ff4fa681c3  0.0s</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">> [internal] load build context                                                       0.0s</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">> => </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">transferring</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> context:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 98B</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                                                        0.0s</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">> </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">CACHED</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [2/3] RUN ln -snf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime &#x26;&#x26; </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   0.0s</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">> </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">CACHED</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [3/3] COPY hm-service.jar /app.jar                                           0.0s</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">> </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">exporting</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> image</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                                                                  0.0s</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">> => </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">exporting</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> layers</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                                                                 0.0s</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">> => </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">writing</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> image</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> sha256:32eebee16acde22550232f2eb80c69d2ce813ed099640e4cfed2193f71</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  0.0s</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">> => </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">naming</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docker.io/library/root-hmall</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                                           0.0s</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[+] Running 4/4</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> ✔</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Network</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> hmall</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    Created</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                                                             0.2s</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> ✔</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Container</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysql</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  Started</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                                                             0.5s</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> ✔</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Container</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> hmall</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  Started</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                                                             0.9s</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> ✔</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Container</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> nginx</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  Started</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                                                             1.5s</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 6.查看镜像</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> compose</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> images</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 结果</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">CONTAINER</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">           REPOSITORY</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">          TAG</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                 IMAGE</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ID</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">            SIZE</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">hmall</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">               root-hmall</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">          latest</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">              32eebee16acd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        362MB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mysql</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">               mysql</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">               latest</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">              3218b38490ce</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        516MB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">nginx</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">               nginx</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">               latest</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">              605c77e624dd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">        141MB</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 7.查看容器</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> compose</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ps</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 结果</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">NAME</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                IMAGE</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">               COMMAND</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">                  SERVICE</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">             CREATED</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">             STATUS</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">              PORTS</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">hmall</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">               root-hmall</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">          "java -jar /app.jar"</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">     hmall</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">               54</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> seconds</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ago</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">      Up</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 52</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> seconds</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">       0.0.0.0:8080</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">-></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">8080/tcp,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> :::8080</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">-></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">8080/tcp</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mysql</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">               mysql</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">               "docker-entrypoint.s…"</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   mysql</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">               54</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> seconds</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ago</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">      Up</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 53</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> seconds</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">       0.0.0.0:3306</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">-></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">3306/tcp,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> :::3306</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">-></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">3306/tcp,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 33060/tcp</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">nginx</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">               nginx</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">               "/docker-entrypoint.…"</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   nginx</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">               54</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> seconds</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ago</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">      Up</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 52</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> seconds</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">       80/tcp,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 0.0.0.0:18080-18081</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">-></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">18080-18081/tcp,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> :::18080-18081</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">-></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">18080-18081/tcp</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打开浏览器，访问：http://yourIp:8080</p>
<h1 id="_5-安装示例" tabindex="-1"><a class="header-anchor" href="#_5-安装示例"><span>5.安装示例</span></a></h1>
<h2 id="_5-1redis" tabindex="-1"><a class="header-anchor" href="#_5-1redis"><span>5.1Redis</span></a></h2>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pull</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> redis:6-alpine</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docker-container-redis</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 6379:6379</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> redis:6-alpine</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 设置密码  -requirepass Password@6379</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docker-container-redis-5.0.4</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> D:/04.SDK/Docker/Volumes/redis/conf:/usr/local/etc/redis</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 6379:6379</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   redis:5.0.4-alpine</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dc-redis-5.0.4</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> D:/04.SDK/Docker/Volumes/redis/conf:/usr/local/etc/redis</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 6379:6379</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   redis:5.0.4-alpine</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dc-redis-6.2.7</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 6388:6379</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> redis:6.2.7</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> redis-server</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --requirepass</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Watch@Redis@2024</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 110 device cloud test</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> redis-device-cloud-test</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 6388:6379</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> redis:latest</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> redis-server</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --requirepass</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Test@Device@2024</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-2elasticsearch" tabindex="-1"><a class="header-anchor" href="#_5-2elasticsearch"><span>5.2Elasticsearch</span></a></h2>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pull</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docker.elastic.co/elasticsearch/elasticsearch:7.15.2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docker-container-elasticsearch</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 9200:9200</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 9300:9300</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "discovery.type=single-node"</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docker.elastic.co/elasticsearch/elasticsearch:7.15.2</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-3kibana" tabindex="-1"><a class="header-anchor" href="#_5-3kibana"><span>5.3Kibana</span></a></h2>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pull</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docker.elastic.co/kibana/kibana:7.15.2</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_5-4mongodb3-4-镜像迁移" tabindex="-1"><a class="header-anchor" href="#_5-4mongodb3-4-镜像迁移"><span>5.4MongoDB3.4  （镜像迁移）</span></a></h2>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 打包镜像到本地 (e329f31eaab4为镜像ID) </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> save</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> e329f31eaab4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> > </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">mongodb_3.4.tar</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 加载本地镜像</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> load</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">mongodb_3.4.tar</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 为镜像打上标签</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> tag</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> e329f31eaab4</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dubc/mongodb-3.4:latest</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># docker images（可以看到镜像已经成功上传）</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">REPOSITORY</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">         TAG</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">       IMAGE</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ID</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">       CREATED</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">       SIZE</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mysql</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">              latest</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    3218b38490ce</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">   2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> years</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ago</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   516MB</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">dubc/mongodb-3.4</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   latest</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">    e329f31eaab4</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">   7</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> years</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ago</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   482MB</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 运行容器</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 27017:27017</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 28017:28017</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> MONGODB_PASS="Pass@123"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /opt/docker/volumes:/data/db</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docker-container-mongo-3.4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    dubc/mongodb-3.4</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 进入容器</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> exec</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -it</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [docker_container_id] /bin/bash</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">   </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 选中数据库后，创建用户</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">db.createUser(</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    user:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "adminUser",</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">    pwd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "adminPass",</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    roles:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [ </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> role:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "userAdminAnyDatabase",</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> db:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "admin"</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> }</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-5navidrome" tabindex="-1"><a class="header-anchor" href="#_5-5navidrome"><span>5.5Navidrome</span></a></h2>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">   --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> navidrome</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">   --restart=unless-stopped</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">   --user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> $(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">id</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -u</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">$(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">id</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -g</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">   -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /path/to/music:/music</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">   -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /path/to/data:/data</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">   -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 4533:4533</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">   -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ND_LOGLEVEL=info</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   deluan/navidrome:latest</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">   </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">   </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> # myweb </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docker-container-navidrome</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --restart=unless-stopped</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --user</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> demo:demo</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /opt/docker/volumes/navidrome/music:/music</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /opt/docker/volumes/navidrome/data:/data</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 4533:4533</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ND_LOGLEVEL=info</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> deluan/navidrome:latest</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docker-container-navidrome</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --restart=unless-stopped</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /opt/docker/volumes/navidrome/music:/music</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /opt/docker/volumes/navidrome/data:/data</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 4533:4533</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ND_LOGLEVEL=info</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> deluan/navidrome:latest</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docker-container-navidrome-ffmpeg</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --restart=unless-stopped</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /opt/docker/volumes/navidrome_ffmpeg/music:/music</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /opt/docker/volumes/navidrome_ffmpeg/data:/data</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 4533:4533</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ND_LOGLEVEL=info</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ND_SCANNER_EXTRACTOR=ffmpeg</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  deluan/navidrome:latest</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># windows</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docker-container-navidrome</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --restart=unless-stopped</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> D:/04.SDK/Docker/Volumes/navidrome/music:/music</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> D:/04.SDK/Docker/Volumes/navidrome/data:/data</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 4533:4533</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ND_LOGLEVEL=info</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> deluan/navidrome:latest</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 测试环境183</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> navidrome</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --restart=unless-stopped</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /opt/docker/navidrome/music:/music</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /opt/docker/navidrome/data:/data</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 4533:4533</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ND_LOGLEVEL=info</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> deluan/navidrome:latest</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> navidrome</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --restart=unless-stopped</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /opt/docker/navidrome/music:/music</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /opt/docker/navidrome/data:/data</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 4533:4533</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ND_LOGLEVEL=info</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ND_SCANNER_EXTRACTOR=ffmpeg</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ND_DEFAULTLANGUAGE=zh-Hans</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   deluan/navidrome:latest</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-6music-tag-web" tabindex="-1"><a class="header-anchor" href="#_5-6music-tag-web"><span>5.6Music Tag Web</span></a></h2>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># https://github.com/xhongc/music-tag-web?tab=readme-ov-file#-music-tag-web</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pull</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> xhongc/music_tag_web:latest</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docker-container-musictagweb</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --restart=unless-stopped</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 8001:8001</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> D:/04.SDK/Docker/Volumes/music_tag_web/app/media:/app/media</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> D:/04.SDK/Docker/Volumes/music_tag_web/app/data:/app/data</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  xhongc/music_tag_web:latest</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-6-giblab" tabindex="-1"><a class="header-anchor" href="#_5-6-giblab"><span>5.6 Giblab</span></a></h2>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># https://developer.aliyun.com/article/1206834</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 拉取镜像</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pull</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> gitlab/gitlab-ce</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 运行容器</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 9300:443</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 9301:80</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 9302:22</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dc-gitlab</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  --restart</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> always</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  --volume</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> D:/04.SDK/Docker/Volumes/gitlab/config:/etc/gitlab</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  --volume</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> D:/04.SDK/Docker/Volumes/gitlab/logs:/var/log/gitlab</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  --volume</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> D:/04.SDK/Docker/Volumes/gitlab/data:/var/opt/gitlab</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  gitlab/gitlab-ce</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 9300:443</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 9301:80</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 9302:22</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dc-gitlab</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --restart</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> always</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --volume</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> D:/04.SDK/Docker/Volumes/gitlab/config:/etc/gitlab</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --volume</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> D:/04.SDK/Docker/Volumes/gitlab/logs:/var/log/gitlab</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --volume</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> D:/04.SDK/Docker/Volumes/gitlab/data:/var/opt/gitlab</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> gitlab/gitlab-ce</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  # 配置gitlab访问、邮箱</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  //通过vi来编辑相应配置</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">D:/04.SDK/Docker/Volumes/gitlab/config/gitlab.rb</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">//配置http协议所使用的访问地址</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">external_url</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'http://103.47.83.130'</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">//配置ssh协议所使用的访问地址和端口</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">gitlab_rails[</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">'gitlab_ssh_host'</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">]</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'http://103.47.83.130'</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">gitlab_rails[</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">'gitlab_shell_ssh_port'</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">]</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 8861</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># gitlab访问地址： </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  https://localhost:9301</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  # myweb </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 443:443</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 9001:80</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 8022:22</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dc-gitlab</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  --restart</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> always</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  --volume</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /opt/docker/volumes/gitlab/config:/etc/gitlab</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  --volume</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /opt/docker/volumes/gitlab/logs:/var/log/gitlab</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  --volume</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /opt/docker/volumes/gitlab/data:/var/opt/gitlab</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  gitlab/gitlab-ce</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-7jenkins" tabindex="-1"><a class="header-anchor" href="#_5-7jenkins"><span>5.7Jenkins</span></a></h2>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># https://www.cnblogs.com/fuzongle/p/12834080.html</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pull</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> jenkins/jenkins</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mkdir</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /var/jenkins_mount</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">chmod</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 777</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /var/jenkins_mount</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># -d 后台运行镜像</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#　　-p 10240:8080 将镜像的8080端口映射到服务器的10240端口。</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#　　-p 10241:50000 将镜像的50000端口映射到服务器的10241端口</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#　　-v /var/jenkins_mount:/var/jenkins_mount /var/jenkins_home目录为容器jenkins工作目录，我们将硬盘上的一个目录挂载到#        这个位置，方便后续更新镜像后继续使用原来的工作目录。这里我们设置的就是上面我们创建的 /var/jenkins_mount目录</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#　　-v /etc/localtime:/etc/localtime让容器使用和服务器同样的时间设置。</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">#　　--name myjenkins 给容器起一个别名</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">　　</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 10240:8080</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 10241:50000</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /var/jenkins_mount:/var/jenkins_home</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/localtime:/etc/localtime</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> myjenkins</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> jenkins/jenkins</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-8minio" tabindex="-1"><a class="header-anchor" href="#_5-8minio"><span>5.8Minio</span></a></h2>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 9000:9000</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 9090:9090</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">     --net=host</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">     --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dc-minio</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">     -d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --restart=always</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">     -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "MINIO_ACCESS_KEY=minioadmin"</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">     -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "MINIO_SECRET_KEY=minioadmin"</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">     -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> D:/04.SDK/Docker/Volumes/Minio/data:/data</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">     -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> D:/04.SDK/Docker/Volumes/Minio/config:/root/.minio</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">     minio/minio</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> server</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">     /data</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --console-address</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ":9090"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -address</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ":9000"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">     </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">     </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dc-minio</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 9000:9000</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 9090:9090</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    --net=host</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">   --restart=always</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">      -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "MINIO_ACCESS_KEY=minioadmin"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">      -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "MINIO_SECRET_KEY=minioadmin"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">      -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> D:/04.SDK/Docker/Volumes/Minio/data:/data</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">      -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> D:/04.SDK/Docker/Volumes/Minio/config:/root/.minio</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">      minio/minio</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">      /data</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --console-address</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ":9090"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -address</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ":9000"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-9emqx" tabindex="-1"><a class="header-anchor" href="#_5-9emqx"><span>5.9EMQX</span></a></h2>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> emqx-enterprise</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 1883:1883</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 8083:8083</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 8084:8084</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 8883:8883</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 18083:18083</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> emqx/emqx-enterprise:5.8.1</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dc-device-cloud-emqx</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 1883:1883</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 8083:8083</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 8084:8084</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 8883:8883</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 18083:18083</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> D:/04.SDK/Docker/Volumes/Emqx/data:/opt/emqx/data</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> D:/04.SDK/Docker/Volumes/Emqx/log:/opt/emqx/log</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   emqx/emqx:5.8.1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> emqx-device-cloud</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 1883:1883</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 8093:8083</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 8094:8084</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 8883:8883</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 18083:18083</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /opt/docker/volumes/emqx-device-cloud/data:/opt/emqx/data</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /opt/docker/volumes/emqx-device-cloud/log:/opt/emqx/log</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">   emqx/emqx:5.8.1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> emqx-device-cloud</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 1883:1883</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 8083:8083</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 8084:8084</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 8883:8883</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 18083:18083</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> emqx/emqx:5.8.1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">--</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 设备云-测试emqx</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> emqx-device-cloud-test</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 5888:1883</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 8983:8083</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 8984:8084</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 8989:8883</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 5889:18083</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> emqx/emqx:5.8.1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> emqx-device-cloud-test</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /opt/docker/volumes/emqx_device_coud_test:/etc/emqx</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 5888:1883</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 8983:8083</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 8984:8084</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 8989:8883</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 5889:18083</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> emqx/emqx:5.8.1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 2025.1.24</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> emqx-device-cloud-test</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 5888:1883</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 8983:8083</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 8984:8084</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 8989:8883</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  emqx/emqx:5.8.1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">--</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 本地</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> laptop</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> emqx-device-cloud</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 1883:1883</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 8083:8083</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 8084:8084</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 8883:8883</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 18083:18083</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> emqx/emqx:5.8.1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;&#x3C;&#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;&#x3C;&#x3C;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">&#x3C;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> HEAD</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">--</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 本地</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> laptop</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> emqx-device-cloud</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 9883:1883</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 8083:8083</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 8084:8084</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 8883:8883</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 18083:18083</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> emqx/emqx:5.8.1</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> emqx-device-cloud</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 1883:1883</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 8083:8083</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 8084:8084</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 8883:8883</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 18083:18083</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> emqx/emqx:5.8.1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">=======</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> emqx-device-cloud</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 8080:1883</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 8083:8083</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 8084:8084</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 8883:8883</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 18083:18083</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> emqx/emqx:5.8.1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>>>>>>> </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">6545ee732ef08e8a510c5575a78e310122bb4b33</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-10mysql" tabindex="-1"><a class="header-anchor" href="#_5-10mysql"><span>5.10Mysql</span></a></h2>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysql-8.0.27</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 3307:3306</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> TZ=Asia/Shanghai</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> MYSQL_ROOT_PASSWORD=Password@3306</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /opt/docker/volumes/dc-mysql-8.0.27/data:/var/lib/mysql</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /opt/docker/volumes/dc-mysql-8.0.27/conf:/etc/mysql/conf.d</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /opt/docker/volumes/dc-mysql-8.0.27/init:/docker-entrypoint-initdb.d</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  mysql:8.0.27</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  # 手表-测试</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dc-mysql-8.0.27</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 3306:3306</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> TZ=Asia/Shanghai</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> MYSQL_ROOT_PASSWORD=Wathch@2024</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  mysql:8.0.27</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    # 手表-正式</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> watch-prod-mysql</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 3317:3306</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> TZ=Asia/Shanghai</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> MYSQL_ROOT_PASSWORD=Oh@2024@Watch!</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  mysql:8.0.27</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  # 手表-本地测试服务器  183</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> watch-test-mysql</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 3317:3306</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> TZ=Asia/Shanghai</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> MYSQL_ROOT_PASSWORD=Watch@2025@Test</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  mysql:8.0.27</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    # 手表-演示  120</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> watch-preview-mysql</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 3372:3306</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> TZ=Asia/Shanghai</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> MYSQL_ROOT_PASSWORD=W@tch2@25Pre</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  mysql:8.0.27</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> watch-preview-mysql</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 3372:3306</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> TZ=Asia/Shanghai</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> MYSQL_ROOT_PASSWORD=W@tch2@25Pre</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysql:8.0.27</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  # 手表-测试-183</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> watch-test-mysql</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 3317:3306</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> TZ=Asia/Shanghai</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> MYSQL_ROOT_PASSWORD=Watch@2025@Test</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /opt/docker/mysql_watch_test/data:/var/lib/mysql</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /opt/docker/mysql_watch_test/conf:/etc/mysql/conf.d</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /opt/docker/mysql_watch_test/init:/docker-entrypoint-initdb.d</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> \</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  mysql:8.0.27</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> watch-test-mysql</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 3317:3306</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> TZ=Asia/Shanghai</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> MYSQL_ROOT_PASSWORD=Watch@2025@Test</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /opt/docker/mysql_watch_test/data:/var/lib/mysql</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /opt/docker/mysql_watch_test/conf:/etc/mysql/conf.d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /opt/docker/mysql_watch_test/init:/docker-entrypoint-initdb.d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mysql:8.0.27</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-11-postgresql" tabindex="-1"><a class="header-anchor" href="#_5-11-postgresql"><span>5.11 PostgreSQL</span></a></h2>
<h1 id="_6-报错案例" tabindex="-1"><a class="header-anchor" href="#_6-报错案例"><span>6.报错案例</span></a></h1>
<h2 id="_6-1启动报tcp端口错误" tabindex="-1"><a class="header-anchor" href="#_6-1启动报tcp端口错误"><span>6.1启动报tcp端口错误</span></a></h2>
<p>日志如下：</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> start</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> emqx-device-cloud</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Error</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> response</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> daemon:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Ports</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> are</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> not</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> available:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> exposing</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> port</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> TCP</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 0.0.0.0:1883</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> -> </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">0.0.0.0:0:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> listen</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> tcp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 0.0.0.0:1883:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> bind:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> An</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> attempt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> was</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> made</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> access</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> a</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> socket</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> in</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> a</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> way</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> forbidden</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> by</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> its</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> access</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> permissions.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Error:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> failed</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> start</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> containers:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> emqx-device-cloud</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决方案：</p>
<p>https://blog.csdn.net/weixin_45967584/article/details/137023261</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 重启NAT网络就可以解决了，以管理员身份运行windows powershell执行下面两条命令：</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">net</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> stop</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> winnat</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">net</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> start</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> winnat</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_7-常用指令" tabindex="-1"><a class="header-anchor" href="#_7-常用指令"><span>7.常用指令</span></a></h1>
<h2 id="_7-1复制容器中文件到宿主机上" tabindex="-1"><a class="header-anchor" href="#_7-1复制容器中文件到宿主机上"><span>7.1复制容器中文件到宿主机上</span></a></h2>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 复制名称为 nginx 容器中 /etc/nginx/nginx.conf 文件夹到宿主机的 /docker/nginx 路径下</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> cp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> nginx:/etc/nginx/nginx.conf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /docker/nginx</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 复制名称为 nginx 容器中 /etc/nginx/conf.d 文件到宿主机的 /docker/nginx 路径下</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> cp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> nginx:/etc/nginx/conf.d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /docker/nginx</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


