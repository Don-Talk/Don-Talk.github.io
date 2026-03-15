<template><div><h2 id="学习目标" tabindex="-1"><a class="header-anchor" href="#学习目标"><span>学习目标</span></a></h2>
<ul>
<li>[ ] 理解分模块开发的意义</li>
<li>[ ] 能够使用聚合工程快速构建项目</li>
<li>[ ] 能够使用继承简化项目配置</li>
<li>[ ] 能够根据需求配置生产、开发、测试环境，并在各环境间切换运行</li>
</ul>
<h2 id="一、分模块开发与设计" tabindex="-1"><a class="header-anchor" href="#一、分模块开发与设计"><span>一、分模块开发与设计</span></a></h2>
<h3 id="_1-分模块开发的意义" tabindex="-1"><a class="header-anchor" href="#_1-分模块开发的意义"><span>1. 分模块开发的意义</span></a></h3>
<h4 id="问题导入" tabindex="-1"><a class="header-anchor" href="#问题导入"><span>问题导入</span></a></h4>
<p>分模块开发对工程有什么好处？</p>
<h3 id="模块拆分原则" tabindex="-1"><a class="header-anchor" href="#模块拆分原则"><span>模块拆分原则</span></a></h3>
<p>目的：项目的扩展性变强了，方便其他项目引用相同的功能。</p>
<p><img src="@source/04-工程化与生产实践/01-构建工具/Maven/01.Maven基础&amp;私服搭建/assets/image-20210716092839618.png" alt="image-20210716092839618"></p>
<ul>
<li>将原始模块按照功能拆分成若干个子模块，方便模块间的相互调用，接口共享</li>
</ul>
<p><img src="@source/04-工程化与生产实践/01-构建工具/Maven/01.Maven基础&amp;私服搭建/assets/image-20210805122133568.png" alt="image-20210805122133568"></p>
<h3 id="_2-分模块开发-模块拆分" tabindex="-1"><a class="header-anchor" href="#_2-分模块开发-模块拆分"><span>2. 分模块开发（模块拆分）</span></a></h3>
<h4 id="问题导入-1" tabindex="-1"><a class="header-anchor" href="#问题导入-1"><span>问题导入</span></a></h4>
<p>一个完整的工程依据什么来进行模块的拆分？</p>
<h4 id="_2-1-创建maven模块" tabindex="-1"><a class="header-anchor" href="#_2-1-创建maven模块"><span>2.1 创建Maven模块</span></a></h4>
<p><img src="@source/04-工程化与生产实践/01-构建工具/Maven/01.Maven基础&amp;私服搭建/assets/image-20210805122213607.png" alt="image-20210805122213607"></p>
<h4 id="_2-2-书写模块代码" tabindex="-1"><a class="header-anchor" href="#_2-2-书写模块代码"><span>2.2 书写模块代码</span></a></h4>
<p>注意事项：</p>
<ol>
<li>分模块开发需要先针对模块功能进行设计，再进行编码。不会先将工程开发完毕，然后进行拆分</li>
</ol>
<h4 id="_2-3-通过maven指令安装模块到本地仓库-install指令" tabindex="-1"><a class="header-anchor" href="#_2-3-通过maven指令安装模块到本地仓库-install指令"><span>2.3 通过maven指令安装模块到本地仓库（install指令）</span></a></h4>
<div class="language-cmd line-numbers-mode" data-highlighter="shiki" data-ext="cmd" data-title="cmd" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">mvn install</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>注意事项：</p>
<ol>
<li>团队内部开发需要发布模块功能到团队内部可共享的仓库中（私服）</li>
</ol>
<h2 id="二、依赖管理" tabindex="-1"><a class="header-anchor" href="#二、依赖管理"><span>二、依赖管理</span></a></h2>
<ul>
<li>
<p>依赖管理指当前项目运行所需的jar，一个项目可以设置多个依赖</p>
</li>
<li>
<p>格式：</p>
</li>
</ul>
<div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">&#x3C;!--设置当前项目所依赖的所有jar--></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dependencies</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    &#x3C;!--设置具体的依赖--></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">        &#x3C;!--依赖所属群组id--></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>org.springframework&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">        &#x3C;!--依赖所属项目id--></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>spring-webmvc&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">        &#x3C;!--依赖版本号--></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>5.2.10.RELEASE&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dependencies</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-依赖传递" tabindex="-1"><a class="header-anchor" href="#_1-依赖传递"><span>1. 依赖传递</span></a></h3>
<h4 id="问题导入-2" tabindex="-1"><a class="header-anchor" href="#问题导入-2"><span>问题导入</span></a></h4>
<p>A依赖B，B依赖C，A是否依赖于C呢？</p>
<ul>
<li>依赖具有传递性
<ul>
<li>直接依赖：在当前项目中通过依赖配置建立的依赖关系</li>
<li>间接依赖：被依赖的资源如果依赖其他资源，当前项目间接依赖其他资源</li>
<li>特殊优先：当同级配置了相同资源的不同版本，后配置的覆盖先配置的</li>
</ul>
</li>
</ul>
<p><img src="@source/04-工程化与生产实践/01-构建工具/Maven/01.Maven基础&amp;私服搭建/assets/image-20210805122632136.png" alt="image-20210805122632136"></p>
<h3 id="_2-可选依赖" tabindex="-1"><a class="header-anchor" href="#_2-可选依赖"><span>2. 可选依赖</span></a></h3>
<h4 id="问题导入-3" tabindex="-1"><a class="header-anchor" href="#问题导入-3"><span>问题导入</span></a></h4>
<p>A依赖B，B依赖C，如果A不想将C依赖进来，是否可以做到？</p>
<ul>
<li>可选依赖指对外隐藏当前所依赖的资源————不透明</li>
</ul>
<div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>com.itheima&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>maven_03_pojo&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>1.0-SNAPSHOT&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    &#x3C;!--可选依赖是隐藏当前工程所依赖的资源，隐藏后对应资源将不具有依赖传递性--></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">optional</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>false&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">optional</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-排除依赖" tabindex="-1"><a class="header-anchor" href="#_3-排除依赖"><span>3. 排除依赖</span></a></h3>
<h4 id="问题导入-4" tabindex="-1"><a class="header-anchor" href="#问题导入-4"><span>问题导入</span></a></h4>
<p>A依赖B，B依赖C，如果A不想将C依赖进来，是否可以做到？</p>
<ul>
<li>排除依赖指主动断开依赖的资源，被排除的资源无需指定版本————不需要</li>
<li>排除依赖资源仅指定GA即可，无需指定V</li>
</ul>
<div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>com.itheima&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>maven_04_dao&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>1.0-SNAPSHOT&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    &#x3C;!--排除依赖是隐藏当前资源对应的依赖关系--></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">exclusions</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">exclusion</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>log4j&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>log4j&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">exclusion</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">exclusion</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>org.mybatis&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>mybatis&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">exclusion</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">exclusions</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-可选依赖和排除依赖的区别" tabindex="-1"><a class="header-anchor" href="#_4-可选依赖和排除依赖的区别"><span>4 可选依赖和排除依赖的区别</span></a></h3>
<p><img src="@source/04-工程化与生产实践/01-构建工具/Maven/01.Maven基础&amp;私服搭建/assets/image-20210513163239710.png" alt="image-20210513163239710"></p>
<h2 id="三、聚合与继承" tabindex="-1"><a class="header-anchor" href="#三、聚合与继承"><span>三、聚合与继承</span></a></h2>
<h3 id="_1-聚合工程" tabindex="-1"><a class="header-anchor" href="#_1-聚合工程"><span>1. 聚合工程</span></a></h3>
<h4 id="问题导入-5" tabindex="-1"><a class="header-anchor" href="#问题导入-5"><span>问题导入</span></a></h4>
<p>什么叫聚合？</p>
<ul>
<li>
<p>聚合：将多个模块组织成一个整体，同时进行项目构建的过程称为聚合</p>
</li>
<li>
<p>聚合工程：通常是一个不具有业务功能的”空“工程（有且仅有一个pom文件）</p>
</li>
<li>
<p>作用：使用聚合工程可以将多个工程编组，通过对聚合工程进行构建，实现对所包含的模块进行同步构建</p>
<ul>
<li>当工程中某个模块发生更新（变更）时，必须保障工程中与已更新模块关联的模块同步更新，此时可以使用聚合工程来解决批量模块同步构建的问题</li>
</ul>
</li>
</ul>
<p><img src="@source/04-工程化与生产实践/01-构建工具/Maven/01.Maven基础&amp;私服搭建/assets/image-20210805154428870.png" alt="image-20210805154428870"></p>
<h3 id="_2-聚合工程开发" tabindex="-1"><a class="header-anchor" href="#_2-聚合工程开发"><span>2. 聚合工程开发</span></a></h3>
<h4 id="问题导入-6" tabindex="-1"><a class="header-anchor" href="#问题导入-6"><span>问题导入</span></a></h4>
<p>工程的打包方式有哪几种？</p>
<h4 id="_2-1-创建maven模块-设置打包类型为pom" tabindex="-1"><a class="header-anchor" href="#_2-1-创建maven模块-设置打包类型为pom"><span>2.1 创建Maven模块，设置打包类型为pom</span></a></h4>
<div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">packaging</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>pom&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">packaging</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>注意事项：</p>
<ol>
<li>每个maven工程都有对应的打包方式，默认为jar，web工程打包方式为war</li>
</ol>
<h4 id="_2-2-设置当前聚合工程所包含的子模块名称" tabindex="-1"><a class="header-anchor" href="#_2-2-设置当前聚合工程所包含的子模块名称"><span>2.2 设置当前聚合工程所包含的子模块名称</span></a></h4>
<div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">modules</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">module</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>../maven_ssm&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">module</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">module</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>../maven_pojo&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">module</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">module</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>../maven_dao&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">module</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">modules</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意事项：</p>
<ol>
<li>聚合工程中所包含的模块在进行构建时会根据模块间的依赖关系设置构建顺序，与聚合工程中模块的配置书写位置无关。</li>
<li>参与聚合的工程无法向上感知是否参与聚合，只能向下配置哪些模块参与本工程的聚合。</li>
</ol>
<h3 id="_3-继承关系" tabindex="-1"><a class="header-anchor" href="#_3-继承关系"><span>3. 继承关系</span></a></h3>
<h4 id="问题导入-7" tabindex="-1"><a class="header-anchor" href="#问题导入-7"><span>问题导入</span></a></h4>
<p>什么叫继承？</p>
<ul>
<li>概念：
<ul>
<li>继承描述的是两个工程间的关系，与java中的继承相似，子工程可以继承父工程中的配置信息，常见于依赖关系的继承</li>
</ul>
</li>
<li>作用：
<ul>
<li>简化配置</li>
<li>减少版本冲突</li>
</ul>
</li>
</ul>
<p><img src="@source/04-工程化与生产实践/01-构建工具/Maven/01.Maven基础&amp;私服搭建/assets/image-20210805123427449.png" alt="image-20210805123427449"></p>
<h3 id="_4-继承关系开发" tabindex="-1"><a class="header-anchor" href="#_4-继承关系开发"><span>4. 继承关系开发</span></a></h3>
<h4 id="_4-1-创建maven模块-设置打包类型为pom" tabindex="-1"><a class="header-anchor" href="#_4-1-创建maven模块-设置打包类型为pom"><span>4.1 创建Maven模块，设置打包类型为pom</span></a></h4>
<div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">packaging</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>pom&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">packaging</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>注意事项：</p>
<ol>
<li>建议父工程打包方式设置为pom</li>
</ol>
<h4 id="_4-2-在父工程的pom文件中配置依赖关系-子工程将沿用父工程中的依赖关系" tabindex="-1"><a class="header-anchor" href="#_4-2-在父工程的pom文件中配置依赖关系-子工程将沿用父工程中的依赖关系"><span>4.2 在父工程的pom文件中配置依赖关系（子工程将沿用父工程中的依赖关系）</span></a></h4>
<div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dependencies</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>org.springframework&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>spring-webmvc&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>5.2.10.RELEASE&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    ……</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dependencies</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-3-配置子工程中可选的依赖关系" tabindex="-1"><a class="header-anchor" href="#_4-3-配置子工程中可选的依赖关系"><span>4.3 配置子工程中可选的依赖关系</span></a></h4>
<div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dependencyManagement</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dependencies</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>com.alibaba&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>druid&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>1.1.16&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        ……</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dependencies</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dependencyManagement</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-3-在子工程中配置当前工程所继承的父工程" tabindex="-1"><a class="header-anchor" href="#_4-3-在子工程中配置当前工程所继承的父工程"><span>4.3 在子工程中配置当前工程所继承的父工程</span></a></h4>
<div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">&#x3C;!--定义该工程的父工程--></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">parent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>com.itheima&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>maven_parent&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>1.0-SNAPSHOT&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    &#x3C;!--填写父工程的pom文件，根据实际情况填写--></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">relativePath</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>../maven_parent/pom.xml&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">relativePath</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">parent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-5-在子工程中配置使用父工程中可选依赖的坐标" tabindex="-1"><a class="header-anchor" href="#_4-5-在子工程中配置使用父工程中可选依赖的坐标"><span>4.5 在子工程中配置使用父工程中可选依赖的坐标</span></a></h4>
<div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dependencies</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>com.alibaba&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>druid&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dependencies</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意事项：</p>
<ol>
<li>子工程中使用父工程中的可选依赖时，仅需要提供群组id和项目id，无需提供版本，版本由父工程统一提供，避免版本冲突</li>
<li>子工程中还可以定义父工程中没有定义的依赖关系</li>
</ol>
<h3 id="_5-聚合与继承的区别" tabindex="-1"><a class="header-anchor" href="#_5-聚合与继承的区别"><span>5. 聚合与继承的区别</span></a></h3>
<h4 id="问题导入-8" tabindex="-1"><a class="header-anchor" href="#问题导入-8"><span>问题导入</span></a></h4>
<p>聚合和继承的作用？</p>
<ul>
<li>作用
<ul>
<li>聚合用于快速构建项目</li>
<li>继承用于快速配置</li>
</ul>
</li>
<li>相同点：
<ul>
<li>聚合与继承的pom.xml文件打包方式均为pom，可以将两种关系制作到同一个pom文件中</li>
<li>聚合与继承均属于设计型模块，并无实际的模块内容</li>
</ul>
</li>
<li>不同点：
<ul>
<li>聚合是在当前模块中配置关系，聚合可以感知到参与聚合的模块有哪些</li>
<li>继承是在子模块中配置关系，父模块无法感知哪些子模块继承了自己</li>
</ul>
</li>
</ul>
<h2 id="四、属性管理" tabindex="-1"><a class="header-anchor" href="#四、属性管理"><span>四、属性管理</span></a></h2>
<h3 id="_1-属性" tabindex="-1"><a class="header-anchor" href="#_1-属性"><span>1. 属性</span></a></h3>
<h4 id="问题导入-9" tabindex="-1"><a class="header-anchor" href="#问题导入-9"><span>问题导入</span></a></h4>
<p>定义属性有什么好处？</p>
<p><img src="@source/04-工程化与生产实践/01-构建工具/Maven/01.Maven基础&amp;私服搭建/assets/image-20210805124018028.png" alt="image-20210805124018028"></p>
<h4 id="_1-1-属性配置与使用" tabindex="-1"><a class="header-anchor" href="#_1-1-属性配置与使用"><span>1.1 属性配置与使用</span></a></h4>
<h5 id="_1-定义属性" tabindex="-1"><a class="header-anchor" href="#_1-定义属性"><span>①：定义属性</span></a></h5>
<div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">&#x3C;!--定义自定义属性--></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">properties</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">spring.version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>5.2.10.RELEASE&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">spring.version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">junit.version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>4.12&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">junit.version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">properties</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-引用属性" tabindex="-1"><a class="header-anchor" href="#_2-引用属性"><span>②：引用属性</span></a></h5>
<div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>org.springframework&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>spring-context&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>${spring.version}&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-资源文件引用属性" tabindex="-1"><a class="header-anchor" href="#_1-2-资源文件引用属性"><span>1.2 资源文件引用属性</span></a></h4>
<h5 id="_1-定义属性-1" tabindex="-1"><a class="header-anchor" href="#_1-定义属性-1"><span>①：定义属性</span></a></h5>
<div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">&#x3C;!--定义自定义属性--></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">properties</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">spring.version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>5.2.10.RELEASE&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">spring.version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">junit.version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>4.12&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">junit.version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">jdbc.url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>jdbc:mysql://127.0.0.1:3306/ssm_db&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">jdbc.url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">properties</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-配置文件中引用属性" tabindex="-1"><a class="header-anchor" href="#_2-配置文件中引用属性"><span>②：配置文件中引用属性</span></a></h5>
<div class="language-properties line-numbers-mode" data-highlighter="shiki" data-ext="properties" data-title="properties" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD">jdbc.driver</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379">com.mysql.jdbc.Driver</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD">jdbc.url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379">${jdbc.url}</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD">jdbc.username</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379">root</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD">jdbc.password</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379">root</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-开启资源文件目录加载属性的过滤器" tabindex="-1"><a class="header-anchor" href="#_3-开启资源文件目录加载属性的过滤器"><span>③：开启资源文件目录加载属性的过滤器</span></a></h5>
<div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">build</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">resources</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">resource</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">directory</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>${project.basedir}/src/main/resources&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">directory</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">filtering</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>true&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">filtering</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">resource</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">resources</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">build</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-配置maven打war包时-忽略web-xml检查" tabindex="-1"><a class="header-anchor" href="#_4-配置maven打war包时-忽略web-xml检查"><span>④：配置maven打war包时，忽略web.xml检查</span></a></h5>
<div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">plugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>org.apache.maven.plugins&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>maven-war-plugin&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>3.2.3&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">configuration</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">failOnMissingWebXml</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>false&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">failOnMissingWebXml</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">configuration</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">plugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-3-其他属性-了解" tabindex="-1"><a class="header-anchor" href="#_1-3-其他属性-了解"><span>1.3 其他属性（了解）</span></a></h4>
<ul>
<li>属性列表
<ul>
<li>自定义属性（常用）</li>
<li>内置属性</li>
<li>Setting属性</li>
<li>Java系统属性</li>
<li>环境变量属性</li>
</ul>
</li>
</ul>
<p><img src="@source/04-工程化与生产实践/01-构建工具/Maven/01.Maven基础&amp;私服搭建/assets/image-20210805124411768.png" alt="image-20210805124411768"></p>
<h3 id="_2-版本管理" tabindex="-1"><a class="header-anchor" href="#_2-版本管理"><span>2. 版本管理</span></a></h3>
<h4 id="问题导入-10" tabindex="-1"><a class="header-anchor" href="#问题导入-10"><span>问题导入</span></a></h4>
<p>项目开发的版本可以分为哪几种？</p>
<h4 id="_2-1-工程版本" tabindex="-1"><a class="header-anchor" href="#_2-1-工程版本"><span>2.1 工程版本</span></a></h4>
<ul>
<li>SNAPSHOT（快照版本）
<ul>
<li>项目开发过程中临时输出的版本，称为快照版本</li>
<li>快照版本会随着开发的进展不断更新</li>
</ul>
</li>
<li>RELEASE（发布版本）
<ul>
<li>项目开发到进入阶段里程碑后，向团队外部发布较为稳定的版本，这种版本所对应的构件文件是稳定的</li>
<li>即便进行功能的后续开发，也不会改变当前发布版本内容，这种版本称为发布版本</li>
</ul>
</li>
</ul>
<p><img src="@source/04-工程化与生产实践/01-构建工具/Maven/01.Maven基础&amp;私服搭建/assets/image-20210805124506165.png" alt="image-20210805124506165"></p>
<h4 id="_2-2-发布版本" tabindex="-1"><a class="header-anchor" href="#_2-2-发布版本"><span>2.2 发布版本</span></a></h4>
<ul>
<li>alpha版</li>
<li>beta版</li>
<li>纯数字版</li>
</ul>
<h2 id="五、多环境配置与应用" tabindex="-1"><a class="header-anchor" href="#五、多环境配置与应用"><span>五、多环境配置与应用</span></a></h2>
<h3 id="_1-多环境配置作用" tabindex="-1"><a class="header-anchor" href="#_1-多环境配置作用"><span>1. 多环境配置作用</span></a></h3>
<h4 id="问题导入-11" tabindex="-1"><a class="header-anchor" href="#问题导入-11"><span>问题导入</span></a></h4>
<p>多环境配置有什么好处？</p>
<ul>
<li>maven提供配置多种环境的设定，帮助开发者使用过程中快速切换环境</li>
</ul>
<p><img src="@source/04-工程化与生产实践/01-构建工具/Maven/01.Maven基础&amp;私服搭建/assets/image-20210805124805979.png" alt="image-20210805124805979"></p>
<h3 id="_2-多环境配置步骤" tabindex="-1"><a class="header-anchor" href="#_2-多环境配置步骤"><span>2. 多环境配置步骤</span></a></h3>
<h4 id="_2-1-定义多环境" tabindex="-1"><a class="header-anchor" href="#_2-1-定义多环境"><span>2.1 定义多环境</span></a></h4>
<div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">&#x3C;!--定义多环境--></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">profiles</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    &#x3C;!--定义具体的环境：生产环境--></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">profile</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">        &#x3C;!--定义环境对应的唯一名称--></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>env_dep&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">        &#x3C;!--定义环境中专用的属性值--></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">properties</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">jdbc.url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>jdbc:mysql://127.0.0.1:3306/ssm_db&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">jdbc.url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">properties</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">        &#x3C;!--设置默认启动--></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">activation</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">activeByDefault</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>true&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">activeByDefault</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">activation</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">profile</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    &#x3C;!--定义具体的环境：开发环境--></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">profile</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>env_pro&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        ……</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">profile</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">profiles</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-使用多环境-构建过程" tabindex="-1"><a class="header-anchor" href="#_2-2-使用多环境-构建过程"><span>2.2 使用多环境（构建过程）</span></a></h4>
<div class="language-cmd line-numbers-mode" data-highlighter="shiki" data-ext="cmd" data-title="cmd" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">【命令】：</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">mvn 指令 –P 环境定义id</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">【范例】：</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">mvn install –P pro_env</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-跳过测试-了解" tabindex="-1"><a class="header-anchor" href="#_2-跳过测试-了解"><span>2. 跳过测试（了解）</span></a></h3>
<h4 id="问题导入-12" tabindex="-1"><a class="header-anchor" href="#问题导入-12"><span>问题导入</span></a></h4>
<p>跳过测试会不会影响项目的构建过程？</p>
<h4 id="_2-1-应用场景" tabindex="-1"><a class="header-anchor" href="#_2-1-应用场景"><span>2.1 应用场景</span></a></h4>
<ul>
<li>功能更新中并且没有开发完毕</li>
<li>快速打包</li>
<li>……</li>
</ul>
<h4 id="_2-2-跳过测试命令" tabindex="-1"><a class="header-anchor" href="#_2-2-跳过测试命令"><span>2.2 跳过测试命令</span></a></h4>
<ul>
<li>mvn install –D skipTests</li>
</ul>
<p>注意事项：</p>
<ol>
<li>执行的项目构建指令必须包含测试生命周期，否则无效果。例如执行compile生命周期，不经过test生命周期。</li>
</ol>
<h4 id="_2-3-细粒度控制跳过测试" tabindex="-1"><a class="header-anchor" href="#_2-3-细粒度控制跳过测试"><span>2.3 细粒度控制跳过测试</span></a></h4>
<div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">plugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>maven-surefire-plugin&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>2.22.1&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">configuration</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">skipTests</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>true&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">skipTests</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">        &#x3C;!--设置跳过测试--></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">includes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">            &#x3C;!--包含指定的测试用例--></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">include</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>**/User*Test.java&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">include</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">includes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">excludes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">            &#x3C;!--排除指定的测试用例--></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">exclude</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>**/User*TestCase.java&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">exclude</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">excludes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">configuration</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">plugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六、私服" tabindex="-1"><a class="header-anchor" href="#六、私服"><span>六、私服</span></a></h2>
<h3 id="_1-私服介绍" tabindex="-1"><a class="header-anchor" href="#_1-私服介绍"><span>1. 私服介绍</span></a></h3>
<h4 id="问题导入-13" tabindex="-1"><a class="header-anchor" href="#问题导入-13"><span>问题导入</span></a></h4>
<p>这里的私服和平时我们听的国服、体验服、欧服等等有什么区别？</p>
<h4 id="_1-1-介绍" tabindex="-1"><a class="header-anchor" href="#_1-1-介绍"><span>1.1 介绍</span></a></h4>
<ul>
<li>
<p>团队开发现状分析</p>
</li>
<li>
<p>私服是一台独立的服务器，用于解决团队内部的资源共享与资源同步问题</p>
</li>
<li>
<p>Nexus</p>
<ul>
<li>Sonatype公司的一款maven私服产品</li>
<li>下载地址：https://help.sonatype.com/repomanager3/download</li>
</ul>
</li>
</ul>
<p><img src="@source/04-工程化与生产实践/01-构建工具/Maven/01.Maven基础&amp;私服搭建/assets/image-20210805125240781.png" alt="image-20210805125240781"></p>
<h4 id="_1-2-nexus安装与启动" tabindex="-1"><a class="header-anchor" href="#_1-2-nexus安装与启动"><span>1.2 Nexus安装与启动</span></a></h4>
<ul>
<li>
<p>启动服务器（命令行启动）</p>
<ul>
<li>nexus.exe /run nexus</li>
</ul>
</li>
<li>
<p>访问服务器（默认端口：8081）</p>
<ul>
<li>http://localhost:8081</li>
</ul>
</li>
<li>
<p>修改基础配置信息</p>
<ul>
<li>安装路径下etc目录中nexus-default.properties文件保存有nexus基础配置信息，例如默认访问端口。</li>
</ul>
</li>
<li>
<p>修改服务器运行配置信息</p>
<ul>
<li>安装路径下bin目录中nexus.vmoptions文件保存有nexus服务器启动对应的配置信息，例如默认占用内存空间。</li>
</ul>
</li>
</ul>
<h4 id="_1-3-私服资源操作流程分析" tabindex="-1"><a class="header-anchor" href="#_1-3-私服资源操作流程分析"><span>1.3 私服资源操作流程分析</span></a></h4>
<p><img src="@source/04-工程化与生产实践/01-构建工具/Maven/01.Maven基础&amp;私服搭建/assets/image-20210805125509894.png" alt="image-20210805125509894"></p>
<h3 id="_2-私服仓库分类" tabindex="-1"><a class="header-anchor" href="#_2-私服仓库分类"><span>2. 私服仓库分类</span></a></h3>
<h4 id="问题导入-14" tabindex="-1"><a class="header-anchor" href="#问题导入-14"><span>问题导入</span></a></h4>
<p>私服仓库分为哪几种？</p>
<p><img src="@source/04-工程化与生产实践/01-构建工具/Maven/01.Maven基础&amp;私服搭建/assets/image-20210805125522304.png" alt="image-20210805125522304"></p>
<h3 id="_3-资源上传与下载" tabindex="-1"><a class="header-anchor" href="#_3-资源上传与下载"><span>3. 资源上传与下载</span></a></h3>
<h4 id="问题导入-15" tabindex="-1"><a class="header-anchor" href="#问题导入-15"><span>问题导入</span></a></h4>
<p>往私服上传资源是否需要身份认证？在哪里设置认证信息？</p>
<p><img src="@source/04-工程化与生产实践/01-构建工具/Maven/01.Maven基础&amp;私服搭建/assets/image-20210805125541963.png" alt="image-20210805125541963"></p>
<h4 id="_3-1-从私服中下载依赖" tabindex="-1"><a class="header-anchor" href="#_3-1-从私服中下载依赖"><span>3.1 从私服中下载依赖</span></a></h4>
<p>【第一步】在maven的settings.xml中&lt;mirrors&gt;标签中配置，此时就需要注释掉aliyun的配置。</p>
<div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">mirror</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>nexus-heima&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">mirrorOf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>*&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">mirrorOf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>http://localhost:8081/repository/maven-public/&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">mirror</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【第二步】在nexus中设置允许匿名下载，如果不允许将不会从私服中下载依赖</p>
<p><img src="@source/04-工程化与生产实践/01-构建工具/Maven/01.Maven基础&amp;私服搭建/assets/image-20201119201910078.png" alt="image-20201119201910078"></p>
<p>如果私服中没有对应的jar，会去中央仓库下载，速度很慢。可以配置让私服去阿里云中下载依赖。</p>
<p><img src="@source/04-工程化与生产实践/01-构建工具/Maven/01.Maven基础&amp;私服搭建/assets/image-20210817102823906.png" alt="image-20210817102823906"></p>
<h4 id="_3-2-上传依赖到私服中" tabindex="-1"><a class="header-anchor" href="#_3-2-上传依赖到私服中"><span>3.2 上传依赖到私服中</span></a></h4>
<p>【第一步】配置本地仓库访问私服的权限（在maven的settings.xml的servers标签中配置）</p>
<div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">server</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  &#x3C;!--id任意，多个server的id不重复就行，后面会用到--></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>heima-nexus&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">username</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>admin&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">username</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">password</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>123456&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">password</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">&#x3C;!--填写自己nexus设定的登录秘密--></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">server</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【第一步】配置当前项目访问私服上传资源的保存位置（项目的pom.xml文件中配置）</p>
<div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">distributionManagement</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">repository</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">      	&#x3C;!--和maven/settings.xml中server中的id一致，表示使用该id对应的用户名和密码--></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>heima-nexus&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">      	&#x3C;!--如果jar的版本是release版本，那么就上传到这个仓库，根据自己情况修改--></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>http://localhost:8081/repository/heima-releases/&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">repository</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">snapshotRepository</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">      	&#x3C;!--和maven/settings.xml中server中的id一致，表示使用该id对应的用户名和密码--></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>heima-nexus&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">      	&#x3C;!--如果jar的版本是snapshot版本，那么就上传到这个仓库，根据自己情况修改--></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>http://localhost:8081/repository/heima-snapshots/&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">snapshotRepository</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">distributionManagement</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>==注意：要和maven的settings.xml中server中定义的&lt;id&gt;heima-nexus&lt;/id&gt;对应==</strong></p>
<p>【第三步】发布资源到私服命令</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>mvn deploy</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


