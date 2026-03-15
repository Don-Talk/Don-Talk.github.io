<template><div><h1 id="对象与内存管理" tabindex="-1"><a class="header-anchor" href="#对象与内存管理"><span>对象与内存管理</span></a></h1>
<h2 id="对象创建的过程了解吗" tabindex="-1"><a class="header-anchor" href="#对象创建的过程了解吗"><span><strong>对象创建的过程了解吗？</strong></span></a></h2>
<h2 id="对象的销毁过程了解吗" tabindex="-1"><a class="header-anchor" href="#对象的销毁过程了解吗"><span><strong>对象的销毁过程了解吗？</strong></span></a></h2>
<h2 id="堆内存是如何分配的-指针碰撞、空闲列表" tabindex="-1"><a class="header-anchor" href="#堆内存是如何分配的-指针碰撞、空闲列表"><span><strong>堆内存是如何分配的？</strong> (指针碰撞、空闲列表)</span></a></h2>
<h2 id="new-对象时-堆会发生抢占吗-jvm-怎么解决-tlab" tabindex="-1"><a class="header-anchor" href="#new-对象时-堆会发生抢占吗-jvm-怎么解决-tlab"><span><strong>new 对象时，堆会发生抢占吗？JVM 怎么解决？</strong> (TLAB)</span></a></h2>
<h2 id="能说一下对象的内存布局吗-对象头、实例数据、对齐填充" tabindex="-1"><a class="header-anchor" href="#能说一下对象的内存布局吗-对象头、实例数据、对齐填充"><span><strong>能说一下对象的内存布局吗？</strong> (对象头、实例数据、对齐填充)</span></a></h2>
<h2 id="new-object-对象的内存大小是多少-对象的引用大小呢" tabindex="-1"><a class="header-anchor" href="#new-object-对象的内存大小是多少-对象的引用大小呢"><span><strong>new Object() 对象的内存大小是多少？对象的引用大小呢？</strong></span></a></h2>
<h2 id="jvm-怎么访问对象的-句柄-vs-直接指针" tabindex="-1"><a class="header-anchor" href="#jvm-怎么访问对象的-句柄-vs-直接指针"><span><strong>JVM 怎么访问对象的？</strong> (句柄 vs 直接指针)</span></a></h2>
<h2 id="说说-java-的四种引用-强、软、弱、虚" tabindex="-1"><a class="header-anchor" href="#说说-java-的四种引用-强、软、弱、虚"><span><strong>说说 Java 的四种引用？</strong> (强、软、弱、虚)</span></a></h2>
<h2 id="java-堆的内存分区了解吗-新生代、老年代、eden、survivor" tabindex="-1"><a class="header-anchor" href="#java-堆的内存分区了解吗-新生代、老年代、eden、survivor"><span><strong>Java 堆的内存分区了解吗？</strong> (新生代、老年代、Eden、Survivor)</span></a></h2>
<h2 id="对象什么时候会进入老年代-长期存活、大对象、动态年龄判定" tabindex="-1"><a class="header-anchor" href="#对象什么时候会进入老年代-长期存活、大对象、动态年龄判定"><span><strong>对象什么时候会进入老年代？</strong> (长期存活、大对象、动态年龄判定)</span></a></h2>
<h2 id="对象一定分配在堆中吗-逃逸分析与栈上分配" tabindex="-1"><a class="header-anchor" href="#对象一定分配在堆中吗-逃逸分析与栈上分配"><span><strong>对象一定分配在堆中吗？</strong> (逃逸分析与栈上分配)</span></a></h2>
<h2 id="什么是逃逸分析-它会带来什么好处" tabindex="-1"><a class="header-anchor" href="#什么是逃逸分析-它会带来什么好处"><span>什么是逃逸分析？它会带来什么好处？</span></a></h2>
<h2 id="内存溢出和内存泄漏了解吗-区别与原因" tabindex="-1"><a class="header-anchor" href="#内存溢出和内存泄漏了解吗-区别与原因"><span>内存溢出和内存泄漏了解吗？ (区别与原因)</span></a></h2>
<h2 id="能手写内存溢出的例子吗-如堆内存溢出" tabindex="-1"><a class="header-anchor" href="#能手写内存溢出的例子吗-如堆内存溢出"><span><strong>能手写内存溢出的例子吗？</strong> (如堆内存溢出)</span></a></h2>
<h2 id="什么情况下会发生栈溢出" tabindex="-1"><a class="header-anchor" href="#什么情况下会发生栈溢出"><span><strong>什么情况下会发生栈溢出？</strong></span></a></h2>
<h3 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h3>
</div></template>


