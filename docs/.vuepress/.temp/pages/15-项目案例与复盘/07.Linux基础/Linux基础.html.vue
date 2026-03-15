<template><div><h1 id="linux基础" tabindex="-1"><a class="header-anchor" href="#linux基础"><span>Linux基础</span></a></h1>
<h2 id="_01-linux运行jar包命令" tabindex="-1"><a class="header-anchor" href="#_01-linux运行jar包命令"><span>01.linux运行jar包命令</span></a></h2>
<p>linux运行jar包
要运行java的项目需要先将项目打包成war包或者jar包，打包成war包需要将war包部署到tomcat服务器上才能运行。而打包成jar包可以直接使用java命令执行。在linux系统中运行jar包主要有以下四种方式。</p>
<p>一、java -jar xxx.jar</p>
<p>这是最基本的jar包执行方式，但是当我们是当我们用ctrl+c中断或者关闭窗口时时，程序也会中断执行，当然关闭或重启虚拟机也同样如此。</p>
<p>二、java -jar xxx.jar &amp;</p>
<p>&amp;代表在后台运行，使用ctrl+c不会中断程序的运行，但是关闭窗口会中断程序的运行。</p>
<p>三、nohup java -jar xxx.jar &amp;</p>
<p>使用这种方式运行的程序日志会输出到当前目录下的nohup.out文件，使用ctrl+c中断或者关闭窗口都不会中断程序的执行。</p>
<p>四、nohup java -jar xxx.jar &gt;temp.log &amp;</p>
<p>temp.out的意思是将日志输出重定向到temp.log文件，使用ctrl+c中断或者关闭窗口都不会中断程序的执行。</p>
<p>nohup java -jar xxx.jar &gt;temp.log &amp;</p>
<p>查看jar包进程</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ps</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> aux</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">|</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> xxx.jar</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ps</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -ef</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> java</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>将会看到此jar的进程信息：
root 2373 0.9 15.8 2575356 296448 pts/0 Sl+ 16:28 1:18 java -jar erp-0.5.1.2.jar
或
root 2373 2004 0 16:28 pts/0 00:01:18 java -jar erp-0.5.1.2.jar</p>
<p>停止jar包
也就是杀死进程
找到jar的pid，杀掉命令为：</p>
<p>kill -9 pid
pkill 进程名</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 查询占用8080端口号的进程</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">netstat</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -apn</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 8080</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 删除进程</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">kill</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -9</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 8080</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 关闭进程</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ps</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -aux</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> java</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">kill</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -s</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 9</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 24204</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-内存" tabindex="-1"><a class="header-anchor" href="#_02-内存"><span>02.内存</span></a></h2>
<h3 id="查看内存使用情况" tabindex="-1"><a class="header-anchor" href="#查看内存使用情况"><span>查看内存使用情况</span></a></h3>
<h3 id="_1-使用free命令" tabindex="-1"><a class="header-anchor" href="#_1-使用free命令"><span>1.使用free命令</span></a></h3>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 以MB为单位来展示内存使用信息</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">free</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -m</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 以MB为单位来展示内存使用信息</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">free</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -h</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-查看-proc-meminfo" tabindex="-1"><a class="header-anchor" href="#_2-查看-proc-meminfo"><span>2.查看/proc/meminfo</span></a></h3>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /proc/meminfo</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_3-使用vmstat命令" tabindex="-1"><a class="header-anchor" href="#_3-使用vmstat命令"><span>3.使用vmstat命令</span></a></h3>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">vmstat</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -s</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_4-使用top命令" tabindex="-1"><a class="header-anchor" href="#_4-使用top命令"><span>4.使用top命令</span></a></h3>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># CentOS</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">top</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -o</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> %MEM</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">top</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -o</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> %CPU</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-htop命令" tabindex="-1"><a class="header-anchor" href="#_5-htop命令"><span>5.htop命令</span></a></h3>
<blockquote>
<p>用法与top一样，但是界面更友好，需要先安装</p>
</blockquote>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 安装 htop</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">yum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> htop</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -y</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">htop</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -o</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> %MEM</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_03-缓存相关" tabindex="-1"><a class="header-anchor" href="#_03-缓存相关"><span>03.缓存相关</span></a></h2>
<ol>
<li>
<h3 id="使用sync和echo命令清除ram缓存和交换空间" tabindex="-1"><a class="header-anchor" href="#使用sync和echo命令清除ram缓存和交换空间"><span>使用sync和echo命令清除RAM缓存和交换空间</span></a></h3>
</li>
</ol>
<ul>
<li>
<p>清除页面缓存（Page Cache）:</p>
</li>
<li>
<p><strong>清除目录项和inode</strong>:</p>
</li>
<li>
<p>sync; echo 1 &gt; /proc/sys/vm/drop_caches
这个命令会清除页面缓存，但不会中断任何正在运行的进程或服务。</p>
</li>
</ul>
<p>清除目录项和inode:</p>
<ul>
<li>
<p>sync; echo 2 &gt; /proc/sys/vm/drop_caches
这个命令会清除目录项和inode，适用于需要清理文件系统元数据的情况。</p>
</li>
<li>
<p>sync; echo 3 &gt; /proc/sys/vm/drop_caches</p>
</li>
</ul>
<h2 id="_04-日志文件" tabindex="-1"><a class="header-anchor" href="#_04-日志文件"><span>04.日志文件</span></a></h2>
<blockquote>
<p>查看日志文件最后一百行</p>
</blockquote>
<ul>
<li>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
<p>tail -n 100 log文件路径</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 05.防火墙</span></span>
<span class="line"><span></span></span>
<span class="line"><span>> https://blog.51cto.com/u_15127627/2732834</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 查看防火墙状态</span></span>
<span class="line"><span></span></span>
<span class="line"><span> ```shell</span></span>
<span class="line"><span> firewall-cmd --state</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>
<p>开启防火墙</p>
</li>
<li>
<p>设置开机自启</p>
</li>
<li>
<p>重启防火墙</p>
</li>
<li>
<p>查看防火墙设置开机自启是否成功</p>
</li>
</ol>
<p>公司本地测试服务器183.233.197.205</p>
<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 查看防火墙状态</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> service</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ufw</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> status</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ufw</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> status</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ufw</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> allow</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 8000/tcp</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ufw</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> deny</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 8000/tcp</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ufw</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> enable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 8000/tcp</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> ufw</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> disable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 8000/tcp</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_06-用户权限" tabindex="-1"><a class="header-anchor" href="#_06-用户权限"><span>06.用户权限</span></a></h2>
</div></template>


