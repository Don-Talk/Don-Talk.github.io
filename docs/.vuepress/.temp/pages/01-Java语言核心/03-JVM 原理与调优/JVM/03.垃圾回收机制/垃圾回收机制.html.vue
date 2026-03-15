<template><div><h1 id="垃圾回收机制" tabindex="-1"><a class="header-anchor" href="#垃圾回收机制"><span>垃圾回收机制</span></a></h1>
<h2 id="讲讲-jvm-的垃圾回收机制" tabindex="-1"><a class="header-anchor" href="#讲讲-jvm-的垃圾回收机制"><span><strong>讲讲 JVM 的垃圾回收机制？</strong></span></a></h2>
<h2 id="如何判断对象仍然存活-可达性分析-vs-引用计数法" tabindex="-1"><a class="header-anchor" href="#如何判断对象仍然存活-可达性分析-vs-引用计数法"><span><strong>如何判断对象仍然存活？</strong> (可达性分析 vs 引用计数法)</span></a></h2>
<h2 id="java-中可作为-gc-roots-的引用有哪几种" tabindex="-1"><a class="header-anchor" href="#java-中可作为-gc-roots-的引用有哪几种"><span><strong>Java 中可作为 GC Roots 的引用有哪几种？</strong></span></a></h2>
<h2 id="finalize-方法了解吗-对象-自救-机制" tabindex="-1"><a class="header-anchor" href="#finalize-方法了解吗-对象-自救-机制"><span><strong>finalize()方法了解吗？</strong> (对象“自救”机制)</span></a></h2>
<h2 id="垃圾收集算法了解吗-标记-清除、复制、整理、分代" tabindex="-1"><a class="header-anchor" href="#垃圾收集算法了解吗-标记-清除、复制、整理、分代"><span><strong>垃圾收集算法了解吗？</strong> (标记-清除、复制、整理、分代)</span></a></h2>
<h2 id="minor-gc、major-gc、mixed-gc、full-gc-都是什么意思" tabindex="-1"><a class="header-anchor" href="#minor-gc、major-gc、mixed-gc、full-gc-都是什么意思"><span><strong>Minor GC、Major GC、Mixed GC、Full GC 都是什么意思？</strong></span></a></h2>
<h2 id="young-gc-什么时候触发" tabindex="-1"><a class="header-anchor" href="#young-gc-什么时候触发"><span><strong>Young GC 什么时候触发？</strong></span></a></h2>
<h2 id="什么时候会触发-full-gc-空间分配担保" tabindex="-1"><a class="header-anchor" href="#什么时候会触发-full-gc-空间分配担保"><span><strong>什么时候会触发 Full GC？</strong> (空间分配担保)</span></a></h2>
<h2 id="知道哪些垃圾收集器-serial-parnew-cms-g1-zgc等" tabindex="-1"><a class="header-anchor" href="#知道哪些垃圾收集器-serial-parnew-cms-g1-zgc等"><span><strong>知道哪些垃圾收集器？</strong> (Serial, ParNew, CMS, G1, ZGC等)</span></a></h2>
<h2 id="能详细说一下-cms-的垃圾收集过程吗-初始标记、并发标记、重新标记、并发清除" tabindex="-1"><a class="header-anchor" href="#能详细说一下-cms-的垃圾收集过程吗-初始标记、并发标记、重新标记、并发清除"><span><strong>能详细说一下 CMS 的垃圾收集过程吗？</strong> (初始标记、并发标记、重新标记、并发清除)</span></a></h2>
<h2 id="什么是三色标记法" tabindex="-1"><a class="header-anchor" href="#什么是三色标记法"><span><strong>什么是三色标记法？</strong></span></a></h2>
<h2 id="g1-垃圾收集器了解吗-region划分、mixed-gc" tabindex="-1"><a class="header-anchor" href="#g1-垃圾收集器了解吗-region划分、mixed-gc"><span><strong>G1 垃圾收集器了解吗？</strong> (Region划分、Mixed GC)</span></a></h2>
<h2 id="有了-cms-为什么还要引入-g1" tabindex="-1"><a class="header-anchor" href="#有了-cms-为什么还要引入-g1"><span><strong>有了 CMS，为什么还要引入 G1？</strong></span></a></h2>
<h2 id="垃圾收集器应该如何选择" tabindex="-1"><a class="header-anchor" href="#垃圾收集器应该如何选择"><span><strong>垃圾收集器应该如何选择？</strong></span></a></h2>
<h3 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h3>
</div></template>


