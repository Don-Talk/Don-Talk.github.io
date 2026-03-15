<template><div><h1 id="在-ubuntu-24-04-上部署-jenkins-并设置开机启动" tabindex="-1"><a class="header-anchor" href="#在-ubuntu-24-04-上部署-jenkins-并设置开机启动"><span>在 Ubuntu 24.04 上部署 Jenkins 并设置开机启动</span></a></h1>
<p>以下是在 Ubuntu 24.04 上安装 Jenkins 并配置其开机自启的详细步骤。</p>
<h2 id="步骤-1-安装-jenkins" tabindex="-1"><a class="header-anchor" href="#步骤-1-安装-jenkins"><span>步骤 1：安装 Jenkins</span></a></h2>
<ol>
<li>
<p><strong>更新系统包索引</strong><br>
确保你的系统是最新的：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> update</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> upgrade</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -y</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>安装 Java（Jenkins 依赖 Java）</p>
<p>Jenkins 需要 Java 运行环境，安装 OpenJDK 17（推荐版本）：</p>
<p>bash</p>
<p>CollapseWrapCopy</p>
<p><code v-pre>sudo apt install openjdk-17-jre -y</code></p>
<p>检查 Java 是否安装成功：</p>
<p>bash</p>
<p>CollapseWrapCopy</p>
<p><code v-pre>java -version</code></p>
</li>
<li>
<p>添加 Jenkins 仓库</p>
<p>添加 Jenkins 官方 Debian/Ubuntu 软件源：</p>
<p>bash</p>
<p>CollapseWrapCopy</p>
<p><code v-pre>curl -fsSL https://pkg.jenkins.io/debian/jenkins.io-2023.key | sudo tee \  /usr/share/keyrings/jenkins-keyring.asc &gt; /dev/null echo &quot;deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] https://pkg.jenkins.io/debian binary/&quot; | sudo tee \  /etc/apt/sources.list.d/jenkins.list &gt; /dev/null</code></p>
</li>
<li>
<p>安装 Jenkins</p>
<p>更新包索引并安装 Jenkins：</p>
<p>bash</p>
<p>CollapseWrapCopy</p>
<p><code v-pre>sudo apt update sudo apt install jenkins -y</code></p>
</li>
<li>
<p>检查 Jenkins 服务状态</p>
<p>安装完成后，Jenkins 会自动启动。检查其状态：</p>
<p>bash</p>
<p>CollapseWrapCopy</p>
<p><code v-pre>sudo systemctl status jenkins</code></p>
<p>如果没有运行，可以手动启动：</p>
<p>bash</p>
<p>CollapseWrapCopy</p>
<p><code v-pre>sudo systemctl start jenkins</code></p>
</li>
</ol>
<h2 id="步骤-2-设置-jenkins-开机自启" tabindex="-1"><a class="header-anchor" href="#步骤-2-设置-jenkins-开机自启"><span>步骤 2：设置 Jenkins 开机自启</span></a></h2>
<p>Jenkins 安装后默认已配置为开机自启（通过 systemd）。确认一下：</p>
<p>bash</p>
<p>CollapseWrapCopy</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>sudo systemctl is-enabled jenkins</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>如果输出是 enabled，说明已设置好。如果不是，启用它：</p>
<p>bash</p>
<p>CollapseWrapCopy</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>sudo systemctl enable jenkins</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="步骤-3-初始配置-jenkins" tabindex="-1"><a class="header-anchor" href="#步骤-3-初始配置-jenkins"><span>步骤 3：初始配置 Jenkins</span></a></h2>
<ol>
<li>
<p>访问 Jenkins</p>
<p>Jenkins 默认运行在</p>
<p>8080</p>
<p>端口，在浏览器中输入：</p>
<p>text</p>
<p>CollapseWrapCopy</p>
<p><code v-pre>http://你的服务器IP:8080</code></p>
<p>例如：</p>
<p>text</p>
<p>CollapseWrapCopy</p>
<p><code v-pre>http://localhost:8080  # 如果在本地 http://192.168.1.100:8080  # 如果在远程服务器</code></p>
</li>
<li>
<p>获取初始管理员密码</p>
<p>首次访问时需要输入初始密码，从以下文件中获取：</p>
<p>bash</p>
<p>CollapseWrapCopy</p>
<p><code v-pre>sudo cat /var/lib/jenkins/secrets/initialAdminPassword</code></p>
<p>复制密码并粘贴到浏览器中。</p>
</li>
<li>
<p>完成安装向导</p>
<ul>
<li>选择“安装推荐插件”（Install suggested plugins）。</li>
<li>创建第一个管理员用户（用户名、密码等）。</li>
<li>配置实例（默认 URL 一般无需修改）。</li>
</ul>
</li>
<li>
<p><strong>登录 Jenkins</strong>
使用刚刚创建的管理员账户登录。</p>
</li>
</ol>
<h2 id="步骤-4-可选-调整防火墙" tabindex="-1"><a class="header-anchor" href="#步骤-4-可选-调整防火墙"><span>步骤 4：（可选）调整防火墙</span></a></h2>
<p>如果启用了防火墙（如 UFW），允许 8080 端口：</p>
<p>bash</p>
<p>CollapseWrapCopy</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>sudo ufw allow 8080 sudo ufw status</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="步骤-5-验证" tabindex="-1"><a class="header-anchor" href="#步骤-5-验证"><span>步骤 5：验证</span></a></h2>
<ul>
<li>
<p>重启系统：</p>
<p>bash</p>
<p>CollapseWrapCopy</p>
<p><code v-pre>sudo reboot</code></p>
</li>
<li>
<p>重启后，检查 Jenkins 是否自动启动：</p>
<p>bash</p>
<p>CollapseWrapCopy</p>
<p><code v-pre>sudo systemctl status jenkins</code></p>
</li>
<li>
<p>再次访问 http://你的服务器IP:8080，确保能正常打开。</p>
</li>
</ul>
<h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h2>
<ol>
<li>
<p>Java 版本兼容性</p>
<p>Jenkins 推荐使用 Java 11 或 17。如果遇到问题，可以尝试安装其他版本：</p>
<p>bash</p>
<p>CollapseWrapCopy</p>
<p><code v-pre>sudo apt install openjdk-11-jre -y</code></p>
</li>
<li>
<p>更改默认端口（可选）</p>
<p>如果想更改 Jenkins 默认端口（8080），编辑配置文件：</p>
<p>bash</p>
<p>CollapseWrapCopy</p>
<p><code v-pre>sudo nano /etc/default/jenkins</code></p>
<p>找到</p>
<p>HTTP_PORT=8080</p>
<p>，改为你想要的端口（如</p>
<p>8081</p>
<p>），然后重启服务：</p>
<p>bash</p>
<p>CollapseWrapCopy</p>
<p><code v-pre>sudo systemctl restart jenkins</code></p>
</li>
<li>
<p>安全性</p>
<ul>
<li>建议配置 HTTPS（需要 SSL 证书）。</li>
<li>不要直接暴露 Jenkins 到公网，考虑使用反向代理（如 Nginx）。</li>
</ul>
</li>
</ol>
</div></template>


