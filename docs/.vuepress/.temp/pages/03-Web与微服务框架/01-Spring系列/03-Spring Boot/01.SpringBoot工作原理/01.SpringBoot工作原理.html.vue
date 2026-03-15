<template><div><h1 id="springboot工作原理" tabindex="-1"><a class="header-anchor" href="#springboot工作原理"><span>SpringBoot工作原理</span></a></h1>
<h2 id="_1spring技术生态" tabindex="-1"><a class="header-anchor" href="#_1spring技术生态"><span>1Spring技术生态</span></a></h2>
<h3 id="_1-1概览" tabindex="-1"><a class="header-anchor" href="#_1-1概览"><span>1.1概览</span></a></h3>
<p><img src="@source/03-Web与微服务框架/01-Spring系列/03-Spring Boot/01.SpringBoot工作原理/imgs/1.png" alt=""></p>
<ul>
<li>Spring框架的七大核心技术体系：微服务架构、响应式编程、云原生、Web应用、Serverless架构、事件驱动以及批处理。</li>
<li>这些技术体系各自独立但也有一定交集，在具备特定的技术特点之外，这些技术体系页各有其应用场景。</li>
</ul>
<p>Spring家族技术体系都是在Spring Framework的基础上逐步演进而来的：</p>
<p><img src="@source/03-Web与微服务框架/01-Spring系列/03-Spring Boot/01.SpringBoot工作原理/imgs/2.png" alt=""></p>
<h3 id="_1-2spring-boot-与web应用" tabindex="-1"><a class="header-anchor" href="#_1-2spring-boot-与web应用"><span>1.2Spring Boot 与Web应用</span></a></h3>
<p>Spring Boot构建再在Spring Framework的基础之上，是新一代的Web应用程序开发框架。我们可以通过下面这张图来了解Spring Boot的全貌：</p>
<p><img src="@source/03-Web与微服务框架/01-Spring系列/03-Spring Boot/01.SpringBoot工作原理/imgs/3.png" alt=""></p>
<p>通过Spring的官网（https://spring.io/projects/spring-boot#support），我们可以看到Spring Boot已经成为Spring中的顶级子项目。</p>
<p>自2014年4月发布1.0.0版本以来，Spring Boot俨然已经成为Java EE领域的开发Web应用程序的首选框架。</p>
<table>
<thead>
<tr>
<th style="text-align:left">Branch</th>
<th style="text-align:left">Initial Release</th>
<th style="text-align:left">End of Support</th>
<th style="text-align:left">End Commercial Support *</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">3.3.x</td>
<td style="text-align:left">2024-05-23</td>
<td style="text-align:left">2025-05-23</td>
<td style="text-align:left">2026-08-23</td>
</tr>
<tr>
<td style="text-align:left">3.2.x</td>
<td style="text-align:left">2023-11-23</td>
<td style="text-align:left">2024-11-23</td>
<td style="text-align:left">2026-02-23</td>
</tr>
<tr>
<td style="text-align:left">3.1.x</td>
<td style="text-align:left">2023-05-18</td>
<td style="text-align:left">2024-05-18</td>
<td style="text-align:left">2025-08-18</td>
</tr>
<tr>
<td style="text-align:left">3.0.x</td>
<td style="text-align:left">2022-11-24</td>
<td style="text-align:left">2023-11-24</td>
<td style="text-align:left">2025-02-24</td>
</tr>
<tr>
<td style="text-align:left">2.7.x</td>
<td style="text-align:left">2022-05-19</td>
<td style="text-align:left">2023-11-24</td>
<td style="text-align:left">2025-08-24</td>
</tr>
<tr>
<td style="text-align:left">2.6.x</td>
<td style="text-align:left">2021-11-17</td>
<td style="text-align:left">2022-11-24</td>
<td style="text-align:left">2024-02-24</td>
</tr>
<tr>
<td style="text-align:left">2.5.x</td>
<td style="text-align:left">2021-05-20</td>
<td style="text-align:left">2022-05-19</td>
<td style="text-align:left">2023-08-24</td>
</tr>
<tr>
<td style="text-align:left">2.4.x</td>
<td style="text-align:left">2020-11-12</td>
<td style="text-align:left">2021-11-18</td>
<td style="text-align:left">2023-02-23</td>
</tr>
<tr>
<td style="text-align:left">2.3.x</td>
<td style="text-align:left">2020-05-15</td>
<td style="text-align:left">2021-05-20</td>
<td style="text-align:left">2022-08-20</td>
</tr>
<tr>
<td style="text-align:left">2.2.x</td>
<td style="text-align:left">2019-10-16</td>
<td style="text-align:left">2020-10-16</td>
<td style="text-align:left">2022-01-16</td>
</tr>
<tr>
<td style="text-align:left">2.1.x</td>
<td style="text-align:left">2018-10-30</td>
<td style="text-align:left">2019-10-30</td>
<td style="text-align:left">2021-01-30</td>
</tr>
<tr>
<td style="text-align:left">2.0.x</td>
<td style="text-align:left">2018-03-01</td>
<td style="text-align:left">2019-03-01</td>
<td style="text-align:left">2020-06-01</td>
</tr>
<tr>
<td style="text-align:left">1.5.x</td>
<td style="text-align:left">2017-01-30</td>
<td style="text-align:left">2019-08-06</td>
<td style="text-align:left">2020-11-06</td>
</tr>
</tbody>
</table>
<p><img src="@source/03-Web与微服务框架/01-Spring系列/03-Spring Boot/01.SpringBoot工作原理/imgs/4.png" alt=""></p>
<h3 id="_1-3spring-cloud-与微服务架构" tabindex="-1"><a class="header-anchor" href="#_1-3spring-cloud-与微服务架构"><span>1.3Spring Cloud 与微服务架构</span></a></h3>
<p><img src="@source/03-Web与微服务框架/01-Spring系列/03-Spring Boot/01.SpringBoot工作原理/imgs/5.png" alt=""></p>
<h3 id="_1-4-构建spring-web应用程序" tabindex="-1"><a class="header-anchor" href="#_1-4-构建spring-web应用程序"><span>1.4 构建Spring Web应用程序</span></a></h3>
<p>在典型的Web应用程序中，前后端通常采用HTTP协议来完成请求和响应，开发过程中需要完成URL地址的映射、HTTP请求的构建、数据的序列化和反序列化以及实现各个服务自身内部的业务逻辑。</p>
<p><img src="@source/03-Web与微服务框架/01-Spring系列/03-Spring Boot/01.SpringBoot工作原理/imgs/6.png" alt=""></p>
<p>基于Spring MVC的开发流程：</p>
<p><img src="@source/03-Web与微服务框架/01-Spring系列/03-Spring Boot/01.SpringBoot工作原理/imgs/7.png" alt=""></p>
<p>基于传统的Spring MVC框架开发Web应用比较典型的问题就是配置工作过于复杂和繁重，以及缺少必要的应用程序管理和监控机制。</p>
<p>如果想要优化这一套开发过程，有几个点值得我们去改进，比如说减少不必要的配置工作、启动依赖项的自动管理、简化部署并提供应用监控等。</p>
<p>这些优化点就推动了以Spring Boot为代表的新一代开发框架的诞生，基于Spring Boot的开发流程如下：</p>
<p><img src="@source/03-Web与微服务框架/01-Spring系列/03-Spring Boot/01.SpringBoot工作原理/imgs/8.png" alt="8"></p>
<p>Spring Boot与基于Spring MVC的开发流程在配置信息的管理、服务部署和监控等方面有明显不同。</p>
<p>作为Spring家族新的一员，Spring Boot提供了令人兴奋的特性，这些特性的核心价值在于确保了开发过程的简单性，具体体现在编码、配置、部署、监控等多个方面。</p>
<ol>
<li>
<p>Spring Boot编码更简单。 我们只需在Maven中添加一项依赖并实现一个方法就可以提供微服务架构中所推崇的Restful风格接口。</p>
</li>
<li>
<p>Spring Boot使配置更简单。他把Spring中基于XML的功能配置方式转换为Java Config，同时提供了.yml文件来优化原有基于.properties和.xml文件的配置方案，yml文件对配置信息的组织更为直观方便，语义也更为强大。同时，基于Spring Boot的自动配置特性，对常见的各种工具和框架均提供了默认的starter组件来简化配置。</p>
</li>
<li>
<p>在部署方案上，Spring Boot也创造了一键启动的新模式。Spring Boot部署包结构参考下图：</p>
<p><img src="@source/03-Web与微服务框架/01-Spring系列/03-Spring Boot/01.SpringBoot工作原理/imgs/9.png" alt="9"></p>
<p>相较于传统模式下的war包，Spring Boot部署包既包含了业务代码和各种第三方类库，同时也内嵌了HTTP容器。</p>
<p>这种包结构支持<code v-pre>java -jar application.jar</code>方式的一键启动，不需要部署独立的应用服务器，通过默认内嵌Tomcat就可以运行整个应用程序。</p>
</li>
<li>
<p>最后，Spring Boot提供的Actuator组件，可以帮助开发和运维人员通过Restful接口获取应用程序当前的运行时状态并对这些状态背后的度量指标进行监控和报警。</p>
</li>
</ol>
<h3 id="_1-5解剖一个web应用" tabindex="-1"><a class="header-anchor" href="#_1-5解剖一个web应用"><span>1.5解剖一个Web应用</span></a></h3>
<h4 id="项目结构" tabindex="-1"><a class="header-anchor" href="#项目结构"><span><strong>项目结构：</strong></span></a></h4>
<p>略</p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">com</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> +-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> example</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">     +-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> myapplication</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">         +-</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> MyApplication</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">java</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">         |</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">         +-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> customer</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">         |</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">   +-</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> Customer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">java</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">         |</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">   +-</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> CustomerController</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">java</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">         |</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">   +-</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> CustomerService</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">java</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">         |</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">   +-</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> CustomerRepository</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">java</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">         |</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">         +-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> order</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">             +-</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> Order</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">java</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">             +-</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> OrderController</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">java</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">             +-</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> OrderService</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">java</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">             +-</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> OrderRepository</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">java</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="启动类" tabindex="-1"><a class="header-anchor" href="#启动类"><span><strong>启动类</strong></span></a></h4>
<p>Bootstrap启动类结构简单且固化</p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">package</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD"> com.dt.auth</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> org.springframework.boot.SpringApplication</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> org.springframework.boot.autoconfigure.SpringBootApplication</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">SpringBootApplication</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> TestApplication</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">        SpringApplication</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">run</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">ChinasoftiAuthApplication</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, args);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里引入了一个全新的注解@SpringBootApplication。在Spring Boot中，添加了该注解的类就是整个应用程序的入口，</p>
<p>一方面会启动整个容器，</p>
<p>另一方面会自动扫描代码包结构下的@Component、@Service、@Controller、@Repository等注解，并把这些注解对应的类转化为Bean对象全部加载到Spring容器中。</p>
<h4 id="控制器类" tabindex="-1"><a class="header-anchor" href="#控制器类"><span><strong>控制器类</strong></span></a></h4>
<p>Bootstrap类为我们提供了Spring Boot应用程序的入口，相当于应用程序已经有了最基本的骨架。</p>
<p>接下来我们就可以添加HTTP请求的访问入口，表现在Spring Boot中就是一系列的Controller类。</p>
<p>这里的Controller与Spring MVC中的Controller在概念上是一致的。</p>
<p>一个典型的Controller如下：</p>
<p><img src="@source/03-Web与微服务框架/01-Spring系列/03-Spring Boot/01.SpringBoot工作原理/imgs/10.png" alt=""></p>
<p>以上代码中包含了@RestController，@RequestMapping和@GetMapping这三个注解。</p>
<ul>
<li>@RequestMapping：用于指定请求地址的映射关系</li>
<li>@GetMapping：等同于指定了GET请求的@RequestMapping注解</li>
<li>@RestController：是传统的Spring MVC的@Controller的升级版，相当于是@Controller和@ResponseEntity的结合体，会自动使用JSON实现序列化、反序列化操作</li>
</ul>
<h4 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件"><span>配置文件</span></a></h4>
<p>在src/main/resources目录下存在一个application.yml文件，这就是Spring Boot中的主配置文件。</p>
<p>例如，我们可以将如下所示的端口、服务名称以及数据库访问等配置信息添加到这个配置文中：</p>
<div class="language-yml line-numbers-mode" data-highlighter="shiki" data-ext="yml" data-title="yml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">server</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	port</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">8080</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">spring</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	application</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">		name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">testModule</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	datasource</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">		driver-class-name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">com.muysql.cj.jdbc.Driver</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">		url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">jdbc:mysql//127.0.0.1:3306/test_db</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">		username</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">root</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">		password</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">root</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>事实上，Spring Boot提供了强大的自动配置机制，如果没有特殊的配置需求，开发人员完全可以基于Spring Boot内置的配置体系完成诸如数据库访问相关配置信息的自动集成。</p>
<h4 id="pom依赖" tabindex="-1"><a class="header-anchor" href="#pom依赖"><span>pom依赖</span></a></h4>
<h3 id="_1-6设计理念和目标" tabindex="-1"><a class="header-anchor" href="#_1-6设计理念和目标"><span>1.6设计理念和目标</span></a></h3>
<p>随着项目的发展，Spring慢慢地集成了更多的开源软件，引入大量配置文件，这会导致程序储存率高、运行效率地下的问题。</p>
<p>为了解决这些问题，Spring Boot 应运而生。</p>
<p>Spring Boot本身并不提供Spring的核心功能，而是作为Spring的脚手架框架，以达到快速构建项目、预置三方配置、开箱即用的目的。</p>
<p><strong>设计理念：</strong></p>
<p><strong>约定由于配置（Convertion Over Configuration）</strong>，又称按约定编程，是一种软件设计范式，旨在减少开发人员需要做决定的数量，执行起来简单而又不失灵活。</p>
<p>Spring Boot的核心设计完美遵从了此范式。</p>
<p>Spring Boot的功能从细节到整体都是基于“约定优于配置”开发的，从基础框架的搭建、配置文件、中间件的集成、内置容器以及其生态中各种Starters，都遵从这个设计范式。</p>
<p>Starter作为Spring Boot的核心功能之一，基于自动配置代码提供了自动配置模块及依赖，让软件集成变得简单。</p>
<p><strong>设计目标：</strong></p>
<p>Spring Boot的研发团队——Pivotal公司。</p>
<p>Pivotal公司的企业目标是”致力于改变世界构造软件的方式 (We are transforming how the world builds software)&quot;。Pivotal公司向企业客户提供云原生应用开发Paas平台及服务，采用敏捷软件开发方法论帮助企业客户开发软件，从而提高软件开发人员工作效率、减少软件运维成本，实现企业数字化转型、仃创新，帮助企业客户最终实现业务创新。Spring Boot框架的设计理念完美遵从了它所属企业的目标。Spring Boot不是为已解决的问题提供新的解决方案，而是为平台和开发者带来一种全新的体验:整合成熟技术框架、屏蔽系统复杂性、简化已有技术的使用，从而降低软件的使用门槛，提升软件开发和运维的效率。</p>
<h2 id="_2-spring-boot体系结构" tabindex="-1"><a class="header-anchor" href="#_2-spring-boot体系结构"><span>2.Spring Boot体系结构</span></a></h2>
<p><img src="@source/03-Web与微服务框架/01-Spring系列/03-Spring Boot/01.SpringBoot工作原理/imgs/11.png" alt="11"> <img src="@source/03-Web与微服务框架/01-Spring系列/03-Spring Boot/01.SpringBoot工作原理/imgs/12.png" alt="12"></p>
<ul>
<li>Presentation Layer ：表示层。处理HTTP请求，将JSON参数转换为对象，并对请求进行身份验证并将其传输到业务层。简而言之，其包括视图，即前端部分</li>
<li>Business Layer：业务层。处理所有业务逻辑。它由服务类组成，并使用数据访问层提供的服务。它还执行授权和验证。</li>
<li>Persistence Layer：持久层。包含所有的存储逻辑，并将业务对象和数据库进行相互转换。</li>
<li>Database：数据库层。执行CRUD操作。</li>
</ul>
<h2 id="_3-依赖原理剖析" tabindex="-1"><a class="header-anchor" href="#_3-依赖原理剖析"><span>3.依赖原理剖析</span></a></h2>
<h3 id="_3-1依赖管理概述" tabindex="-1"><a class="header-anchor" href="#_3-1依赖管理概述"><span>3.1依赖管理概述</span></a></h3>
<p>Spring Boot自动管理依赖关系和配置，每个Spring Boot版本都提供了它所支持的依赖项列表。</p>
<p>依赖关系列表是可与Maven一起使用的**物料清单(spring-boot-dependencies)**的一部分，因此我们无需在配置中指定依赖项的版本。</p>
<p>Spring Boot 自行管理，当更新Spring Boot版本时，Spring Boot将以一致的方式自动升级所有依赖项。</p>
<p>依赖管理的优点：</p>
<ul>
<li>只需在一处指定Spring Boot的版本，它提供了依赖性信息的集中化</li>
<li>当从一个版本切换到另一个版本是时，只需切换Spring Boot的版本</li>
<li>避免了不同版本的Spring Boot库的不匹配</li>
</ul>
<blockquote>
<p>注意：如果需要，Spring Boot还允许覆盖依赖项的版本</p>
</blockquote>
<p>Spring Boot其实是通过starter的形式，对spring-framwork进行装箱，消除了（但是兼容和保留）原来的XML配置，目的是更加便捷地集成其他框架，打造一个完成高效的开发生态。</p>
<h3 id="_3-2依赖管理系统" tabindex="-1"><a class="header-anchor" href="#_3-2依赖管理系统"><span>3.2依赖管理系统</span></a></h3>
<p>如果使用Spring Initializr创建一个Spring Boot项目的话，会发现pom文件中会加入了一个parent元素，这种做法其实本质上是把当前项目作为spring-boot-starter-parent的子项目。</p>
<div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">parent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>org.springframework.boot&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>spring-boot-starter-parent&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    &#x3C;!--   在这里指定了 spring boot 的版本     --></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>2.7.2&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">relativePath</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">/> </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">&#x3C;!-- lookup parent from repository --></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">parent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dependencies</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>org.springframework.boot&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>spring-boot-starter-web&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>org.springframework.boot&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>spring-boot-starter-test&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">scope</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>test&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">scope</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  			...</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dependencies</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Maven项目从spring-boot-starter-parent继承了以下功能：</p>
<ul>
<li>默认的Java编译器版本</li>
<li>UTF-8源编码</li>
<li>依赖关系，继承自spring-boot-dependencies POM</li>
<li>资源过滤</li>
<li>插件配置</li>
</ul>
<p>父项目spring-boot-dependencies中几乎声明了所有开发中常用依赖的版本：</p>
<p><img src="@source/03-Web与微服务框架/01-Spring系列/03-Spring Boot/01.SpringBoot工作原理/imgs/13.png" alt="13"></p>
<p>spring-boot-dependencies的dependencyManagement节点，dependencies定义了Spring Boot版本的依赖的组件及其相应版本。</p>
<p>spring-boot-starter-parent通过继承spring-boot-dependencies实现了Spring Boot的版本依赖管理，所以Spring Boot工程继承spring-boot-starter-parent后已经具备版本锁定等配置了，这也就是Spring Boot项目中不需要些版本号的原因。</p>
<p>然后需要用到其他starter的时候，只需要在dependencies中直接引入即可，不再需要指定版本号，版本号由dependencyManagement中定义的版本号统一管理。</p>
<div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dependencies</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>org.springframework.boot&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>spring-boot-starter&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>org.springframework.boot&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>spring-boot-starter-test&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">scope</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>test&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">scope</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dependencies</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3依赖覆盖" tabindex="-1"><a class="header-anchor" href="#_3-3依赖覆盖"><span>3.3依赖覆盖</span></a></h3>
<p>有些特殊的情况，可能项目中大部分的starter使用的是相对低的版本，但是由于部分功能需要使用到更高版本的个别starter，</p>
<p>就需要强制引入这个starter的更高版本，使用&lt;java.version&gt;标记来更改Java版本</p>
<div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">properties</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">java.version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>11&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">java.version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">properties</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以直接指定引入依赖的版本覆盖掉全局的Spring Boot组件版本，这里应用了Maven的依赖调解原则：</p>
<div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>org.springframwork.boot&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>spring-boot-starter-data-elasticsearch&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>2.3.1&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4相关依赖" tabindex="-1"><a class="header-anchor" href="#_3-4相关依赖"><span>3.4相关依赖</span></a></h3>
<p>在Spring Boot项目中只是引入了spring-boot-starter-web，并没有引入相关依赖，为何服务可以正常运行？</p>
<p>spring-boot-starter-web依赖启动器的主要作用是为了打包Web开发场景所需的底层所有依赖。</p>
<p>Spring Boot除了提供有上述介绍的Web依赖启动器外，还提供了其他许多开发场景的相关依赖。</p>
<table>
<thead>
<tr>
<th style="text-align:left">Name</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>spring-boot-starter</code></td>
<td style="text-align:left">Core starter, including auto-configuration support, logging and YAML</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>spring-boot-starter-activemq</code></td>
<td style="text-align:left">Starter for JMS messaging using Apache ActiveMQ</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>spring-boot-starter-amqp</code></td>
<td style="text-align:left">Starter for using Spring AMQP and Rabbit MQ</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>spring-boot-starter-aop</code></td>
<td style="text-align:left">Starter for aspect-oriented programming with Spring AOP and AspectJ</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>spring-boot-starter-artemis</code></td>
<td style="text-align:left">Starter for JMS messaging using Apache Artemis</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>spring-boot-starter-batch</code></td>
<td style="text-align:left">Starter for using Spring Batch</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>spring-boot-starter-cache</code></td>
<td style="text-align:left">Starter for using Spring Framework’s caching support</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>spring-boot-starter-data-cassandra</code></td>
<td style="text-align:left">Starter for using Cassandra distributed database and Spring Data Cassandra</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>spring-boot-starter-data-cassandra-reactive</code></td>
<td style="text-align:left">Starter for using Cassandra distributed database and Spring Data Cassandra Reactive</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>spring-boot-starter-data-couchbase</code></td>
<td style="text-align:left">Starter for using Couchbase document-oriented database and Spring Data Couchbase</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>spring-boot-starter-data-couchbase-reactive</code></td>
<td style="text-align:left">Starter for using Couchbase document-oriented database and Spring Data Couchbase Reactive</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>spring-boot-starter-data-elasticsearch</code></td>
<td style="text-align:left">Starter for using Elasticsearch search and analytics engine and Spring Data Elasticsearch</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>spring-boot-starter-data-jdbc</code></td>
<td style="text-align:left">Starter for using Spring Data JDBC</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>spring-boot-starter-data-jpa</code></td>
<td style="text-align:left">Starter for using Spring Data JPA with Hibernate</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>spring-boot-starter-data-ldap</code></td>
<td style="text-align:left">Starter for using Spring Data LDAP</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>spring-boot-starter-data-mongodb</code></td>
<td style="text-align:left">Starter for using MongoDB document-oriented database and Spring Data MongoDB</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>spring-boot-starter-data-mongodb-reactive</code></td>
<td style="text-align:left">Starter for using MongoDB document-oriented database and Spring Data MongoDB Reactive</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>spring-boot-starter-data-neo4j</code></td>
<td style="text-align:left">Starter for using Neo4j graph database and Spring Data Neo4j</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>spring-boot-starter-data-r2dbc</code></td>
<td style="text-align:left">Starter for using Spring Data R2DBC</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>spring-boot-starter-data-redis</code></td>
<td style="text-align:left">Starter for using Redis key-value data store with Spring Data Redis and the Lettuce client</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>spring-boot-starter-data-redis-reactive</code></td>
<td style="text-align:left">Starter for using Redis key-value data store with Spring Data Redis reactive and the Lettuce client</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>spring-boot-starter-data-rest</code></td>
<td style="text-align:left">Starter for exposing Spring Data repositories over REST using Spring Data REST and Spring MVC</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>spring-boot-starter-freemarker</code></td>
<td style="text-align:left">Starter for building MVC web applications using FreeMarker views</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>spring-boot-starter-graphql</code></td>
<td style="text-align:left">Starter for building GraphQL applications with Spring GraphQL</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>spring-boot-starter-groovy-templates</code></td>
<td style="text-align:left">Starter for building MVC web applications using Groovy Templates views</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>spring-boot-starter-hateoas</code></td>
<td style="text-align:left">Starter for building hypermedia-based RESTful web application with Spring MVC and Spring HATEOAS</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>spring-boot-starter-integration</code></td>
<td style="text-align:left">Starter for using Spring Integration</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>spring-boot-starter-jdbc</code></td>
<td style="text-align:left">Starter for using JDBC with the HikariCP connection pool</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>spring-boot-starter-jersey</code></td>
<td style="text-align:left">Starter for building RESTful web applications using JAX-RS and Jersey. An alternative to <a href="https://docs.spring.io/spring-boot/reference/using/build-systems.html#spring-boot-starter-web" target="_blank" rel="noopener noreferrer"><code v-pre>spring-boot-starter-web</code></a></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>spring-boot-starter-jooq</code></td>
<td style="text-align:left">Starter for using jOOQ to access SQL databases with JDBC. An alternative to <a href="https://docs.spring.io/spring-boot/reference/using/build-systems.html#spring-boot-starter-data-jpa" target="_blank" rel="noopener noreferrer"><code v-pre>spring-boot-starter-data-jpa</code></a> or <a href="https://docs.spring.io/spring-boot/reference/using/build-systems.html#spring-boot-starter-jdbc" target="_blank" rel="noopener noreferrer"><code v-pre>spring-boot-starter-jdbc</code></a></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>spring-boot-starter-json</code></td>
<td style="text-align:left">Starter for reading and writing json</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>spring-boot-starter-mail</code></td>
<td style="text-align:left">Starter for using Java Mail and Spring Framework’s email sending support</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>spring-boot-starter-mustache</code></td>
<td style="text-align:left">Starter for building web applications using Mustache views</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>spring-boot-starter-oauth2-authorization-server</code></td>
<td style="text-align:left">Starter for using Spring Authorization Server features</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>spring-boot-starter-oauth2-client</code></td>
<td style="text-align:left">Starter for using Spring Security’s OAuth2/OpenID Connect client features</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>spring-boot-starter-oauth2-resource-server</code></td>
<td style="text-align:left">Starter for using Spring Security’s OAuth2 resource server features</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>spring-boot-starter-pulsar</code></td>
<td style="text-align:left">Starter for using Spring for Apache Pulsar</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>spring-boot-starter-pulsar-reactive</code></td>
<td style="text-align:left">Starter for using Spring for Apache Pulsar Reactive</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>spring-boot-starter-quartz</code></td>
<td style="text-align:left">Starter for using the Quartz scheduler</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>spring-boot-starter-rsocket</code></td>
<td style="text-align:left">Starter for building RSocket clients and servers</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>spring-boot-starter-security</code></td>
<td style="text-align:left">Starter for using Spring Security</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>spring-boot-starter-test</code></td>
<td style="text-align:left">Starter for testing Spring Boot applications with libraries including JUnit Jupiter, Hamcrest and Mockito</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>spring-boot-starter-thymeleaf</code></td>
<td style="text-align:left">Starter for building MVC web applications using Thymeleaf views</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>spring-boot-starter-validation</code></td>
<td style="text-align:left">Starter for using Java Bean Validation with Hibernate Validator</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>spring-boot-starter-web</code></td>
<td style="text-align:left">Starter for building web, including RESTful, applications using Spring MVC. Uses Tomcat as the default embedded container</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>spring-boot-starter-web-services</code></td>
<td style="text-align:left">Starter for using Spring Web Services</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>spring-boot-starter-webflux</code></td>
<td style="text-align:left">Starter for building WebFlux applications using Spring Framework’s Reactive Web support</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>spring-boot-starter-websocket</code></td>
<td style="text-align:left">Starter for building WebSocket applications using Spring Framework’s MVC WebSocket support</td>
</tr>
</tbody>
</table>
<h2 id="_4-自动配置原理剖析" tabindex="-1"><a class="header-anchor" href="#_4-自动配置原理剖析"><span>4.自动配置原理剖析</span></a></h2>
<p>自动配置：根据我们添加的依赖，会自动将一些配置类的bean注册进ioc容器，可以使用@Autowired或者@Resource等注解来使用它。</p>
<h3 id="_4-1springbootapplication" tabindex="-1"><a class="header-anchor" href="#_4-1springbootapplication"><span>4.1SpringBootApplication</span></a></h3>
<p>Spring Boot 项目创建完会默认生成一个Application的入口类</p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">package</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD"> org.example.myspringbootdemo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> org.springframework.boot.SpringApplication</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> org.springframework.boot.autoconfigure.SpringBootApplication</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 启动类</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">SpringBootApplication</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> MySpringBootDemoApplication</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">        SpringApplication</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">run</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">MySpringBootDemoApplication</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, args);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>@SpringBootApplication是一个“三体”结构，实际上它是一个符合Annotation：</p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">package</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD"> org.springframework.boot.autoconfigure</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">Target</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">({</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">ElementType</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">TYPE</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">})  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 注解的适用范围， Type表示注解可以描述在类、接口、注解或枚举中</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">Retention</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">RetentionPolicy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">RUNTIME</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">)  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 表示注解的生命周期，Runtime运行时</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">Documented</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	// 表示注解可以记录在javadoc中</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">Inherited</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	// 表示可以被子类继承该注解</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">SpringBootConfiguration</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	// 表明该类为配置类</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">EnableAutoConfiguration</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	// 启动自动配置功能</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">ComponentScan</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    excludeFilters</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> {</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">Filter</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    type</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> FilterType</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">CUSTOM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    classes</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> {</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">TypeExcludeFilter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">class</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">Filter</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    type</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> FilterType</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">CUSTOM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">    classes</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> {</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">AutoConfigurationExcludeFilter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">class</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">)}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> @</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">interface</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B"> SpringBootApplication</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // 根据class来排除特定的自动配置类，使其不能加入Spring 容器，传入参数value类型是class类型</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">AliasFor</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">        annotation</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> EnableAutoConfiguration</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">class</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">    )</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">    Class</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">&#x3C;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">?</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">></span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">[] </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">exclude</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">() </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">default</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> {}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // 根据classname来排除特定的类，使其不能加入Spring容器，传入参数value类型是class的全类名字字符串数组</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">AliasFor</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">        annotation</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> EnableAutoConfiguration</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">class</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">    )</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">    String</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">[] </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">excludeName</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">() </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">default</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> {}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // 扫描指定包，参数是包名的字符串数组，用于激活@Component等注解类的初始化</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">AliasFor</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">        annotation</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> ComponentScan</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">        attribute</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "basePackages"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">    )</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">    String</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">[] </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">scanBasePackages</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">() </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">default</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> {}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // 扫描特定的包，参数是Class类型数组</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">AliasFor</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">        annotation</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> ComponentScan</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">        attribute</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "basePackageClasses"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">    )</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">    Class</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">&#x3C;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">?</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">></span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">[] </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">scanBasePackageClasses</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">() </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">default</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> {}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // bean名称生成器，用于命名被扫描并注册成Spring容器中的bean的bean名称</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">AliasFor</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">        annotation</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> ComponentScan</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">        attribute</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "nameGenerator"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">    )</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">    Class</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">&#x3C;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">?</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> extends BeanNameGenerator</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">></span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> nameGenerator</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">() </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">default</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> BeanNameGenerator</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // 注解的意思是proxyBeanMethod配置类是用来指定@Bean注解标注的方法是否使用代理，默认是true使用代理</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // （proxyBeanMethod = true）[保证每个@Bean方法被调用多少次返回的组件都是单实例的]</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // （proxyBeanMethod = false）[每个@Bean方法被调用多少次返回的组件都是新创建的]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">    </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">AliasFor</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">        annotation</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> Configuration</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">class</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">    )</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    boolean</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> proxyBeanMethods</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">() </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">default</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先引出两个概念：Full全模式，Lite轻量级模式</p>
<ul>
<li>
<p>Full(ProxyBeanMethods = true) ： proxyBeanMethods参数设置为true时，即为Full全模式。</p>
<p>该模式下，注入容器中的同一个组件无论被取出多少次都是同一个bean实例，即单例对象，在该模式下，Spring Boot每次启动都会判断检查容器中是否存在该组件。</p>
</li>
<li>
<p>Lite(proxyBeanMethods = false)：proxyBeanMethods参数设置为false时，即为Lite轻量级模式。</p>
<p>该模式下注入容器中的同一个组件无论被取出多少次都是不同的bean实例，即多实例对象，该模式下Spring Boot容器每次启动的时候会跳过检查容器中是否存在该组件</p>
</li>
</ul>
<p>什么时候用Full全模式，什么时候用Lite轻量级模式？</p>
<ul>
<li>当在你的同一个Configuration配置类中，注入到容器的bean实例之间有依赖关系时，建议使用Full模式</li>
<li>当在你的同一个Configuration配置类中，注入到容器的bean实例之间没有依赖关系时，建议使用Lite轻量级模式，以提高Spring Boot 的启动速度和性能</li>
</ul>
<p>@AliasFor注解，注解用于桥接到其他注解，该注解的属性中制定了所桥接的注解类，@SpringBootApplication定义的属性再“三体”组合注解中已经定义过了，之所以使用@AliasFor注解并重新在@SpringBootApplication进行定义，更多的为了减少用户使用多注解带来的麻烦。</p>
<p>虽然@SpringBootApplication的定义使用了多个Annotation进行元信息标注，但实际上对于Spring Boot应用来说，重要的只有三个Annotation，而“三体”结构实际上指的就是这三个Annotation：</p>
<ul>
<li>SpringBootConfiguration</li>
<li>EnableAutoConfiguration</li>
<li>ComponentScan</li>
</ul>
<p>所以，如果我们使用如下的SpringBoot启动类，整个Spring Boot应用依然可以与之前的启动类功能对等：</p>
<h3 id="_4-2springbootconfiguration" tabindex="-1"><a class="header-anchor" href="#_4-2springbootconfiguration"><span>4.2SpringBootConfiguration</span></a></h3>
<p>@SpringBootConfiguration：Spring Boot的配置类，标注在某个类上，表示这是一个Spring Boot的配置类。</p>
<p>查看@SpringBootConfiguration注解源码，核心代码具体如下：</p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">Target</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">ElementType</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">TYPE</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">Retention</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">RetentionPolicy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">RUNTIME</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">Documented</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">Configuration</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">Indexed</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> @</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">interface</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B"> SpringBootConfiguration</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">AliasFor</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">annotation</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> Configuration</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">class</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    boolean</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> proxyBeanMethods</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">() </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">default</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上述源码可以看出，@SpringBootConfiguration注解内部有一个核心注解@Configuration，该注解是Spring框架提供的，表示当前类是一个配置类（XML配置文件的注解表现形式），并可以被组件扫描器扫描。</p>
<blockquote>
<p>这里的@Configuration对我们来说并不陌生，他就是JavaConfig形式的Spring IOC容器的配置类使用的那个@Configuration，既然SpringBoot应用骨子里就是一个Spring应用，那么，自然需要加载某个IOC容器的配置，而SpringBoot社区推荐使用基于JavaConfig的配置形式，所以，很明显这里的启动类标注了@Configuration之后，本身其实也是一个IOC容器的配置类！</p>
</blockquote>
<p>由此可见，@SpringBootConfiguration注解的作用与@Configuration注解相同，都是标识一个可以被组件扫描器扫描的配置类，只不过@SpringBootConfiguration是被Spring Boot进行了重新封装命名而已。</p>
<p>很多SpringBootConfiguration的代码示例都喜欢在启动类上直接标注@Configuration或者@SpringBootApplication，对于初接触SpringBoot的开发者来说，其实这种做法不便于理解，如果我们将上面的SpringBootApplication启动类拆分为两个独立的Java类，整个形势就明朗了：</p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">Configuration</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">EnableAutoConfiguration</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">ComponentScan</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> HelloConfiguration</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">Bean</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    public</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> HelloController</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> controller</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        return</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> HelloController</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> DemoApplication</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">        SpringApplication</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">run</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">HelloConfiguration</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, args);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以，启动类DemoApplication其实就是一个标准的standalone类型的Java程序的main函数启动类，没有什么特殊的。</p>
<p>而@Configuration标注的DemoConfiguration定义其实也是个普通的JavaConfig形势的IOC容器配置类，没啥新东西，全是Spring框架里的概念。</p>
</div></template>


