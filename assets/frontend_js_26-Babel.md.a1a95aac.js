import{_ as s,o as a,c as n,a as l}from"./app.30de61ef.js";const A=JSON.parse('{"title":"Babel","description":"","frontmatter":{},"headers":[{"level":2,"title":"1.Babel初识","slug":"_1-babel初识","link":"#_1-babel初识","children":[{"level":3,"title":"1.认识 Babel","slug":"_1-认识-babel","link":"#_1-认识-babel","children":[]},{"level":3,"title":"2.使用 Babel","slug":"_2-使用-babel","link":"#_2-使用-babel","children":[]},{"level":3,"title":"3.解释编译结果","slug":"_3-解释编译结果","link":"#_3-解释编译结果","children":[]}]},{"level":2,"title":"2.Babel的使用方式","slug":"_2-babel的使用方式","link":"#_2-babel的使用方式","children":[]},{"level":2,"title":"3.使用 Babel前的准备工作","slug":"_3-使用-babel前的准备工作","link":"#_3-使用-babel前的准备工作","children":[{"level":3,"title":"1.什么是 Node.js 和 npm","slug":"_1-什么是-node-js-和-npm","link":"#_1-什么是-node-js-和-npm","children":[]},{"level":3,"title":"2.安装 Node.js","slug":"_2-安装-node-js","link":"#_2-安装-node-js","children":[]},{"level":3,"title":"3.初始化项目","slug":"_3-初始化项目","link":"#_3-初始化项目","children":[]},{"level":3,"title":"4.安装 Babel 需要的包","slug":"_4-安装-babel-需要的包","link":"#_4-安装-babel-需要的包","children":[]}]},{"level":2,"title":"4.使用Babel编译ES6代码","slug":"_4-使用babel编译es6代码","link":"#_4-使用babel编译es6代码","children":[{"level":3,"title":"1.执行编译的命令","slug":"_1-执行编译的命令","link":"#_1-执行编译的命令","children":[]},{"level":3,"title":"2.Babel 的配置文件","slug":"_2-babel-的配置文件","link":"#_2-babel-的配置文件","children":[]}]}],"relativePath":"frontend/js/26-Babel.md","lastUpdated":1677482837000}'),p={name:"frontend/js/26-Babel.md"},o=l(`<h1 id="babel" tabindex="-1">Babel <a class="header-anchor" href="#babel" aria-hidden="true">#</a></h1><blockquote><p>Babel是什么</p><p><strong>Babel的使用方式</strong></p><p><strong>使用Babel前的准备工作</strong></p><p><strong>使用 Babel编译ES6代码</strong></p></blockquote><h2 id="_1-babel初识" tabindex="-1">1.Babel初识 <a class="header-anchor" href="#_1-babel初识" aria-hidden="true">#</a></h2><ul><li>认识Babel</li><li>使用Babel</li><li>解释编译结果</li></ul><h3 id="_1-认识-babel" tabindex="-1">1.认识 Babel <a class="header-anchor" href="#_1-认识-babel" aria-hidden="true">#</a></h3><blockquote><p>官网：<a href="https://babeljs.io/" target="_blank" rel="noreferrer">https://babeljs.io/</a></p><p>在线编译：<a href="https://babeljs.io/repl" target="_blank" rel="noreferrer">https://babeljs.io/repl</a></p><p>Babel 是 JavaScript 的编译器，用来将 ES6 的代码，转换成 ES6 之前的代码</p></blockquote><h3 id="_2-使用-babel" tabindex="-1">2.使用 Babel <a class="header-anchor" href="#_2-使用-babel" aria-hidden="true">#</a></h3><p><a href="https://imgchr.com/i/DfwgIJ" target="_blank" rel="noreferrer"><img src="https://s3.ax1x.com/2020/12/01/DfwgIJ.png" alt="DfwgIJ.png"></a></p><p><strong>ES6代码</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// ES6</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tian</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> age </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> add </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">y</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> y</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Set Map</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">resolve</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">reject</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">成功</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Array</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">from</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">age</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">assign</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">age</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Person</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tian</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./index.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p><strong>使用 Babel 编译后</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">use strict</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./index.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//编译class需要的中间性质的函数</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_instanceof</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">left</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">right</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">right</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">typeof</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Symbol</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">undefined</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">right</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">Symbol</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">hasInstance</span><span style="color:#F07178;">]) </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!!</span><span style="color:#A6ACCD;">right</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">Symbol</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">hasInstance</span><span style="color:#F07178;">](</span><span style="color:#A6ACCD;">left</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">left</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">instanceof</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">right</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_classCallCheck</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">instance</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">Constructor</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#82AAFF;">_instanceof</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">instance</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Constructor</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">throw</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">TypeError</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Cannot call a class as a function</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// ES6</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tian</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> age </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> add </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">y</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">y</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// Set Map</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">resolve</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">reject</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">成功</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">Array</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">from</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> Person </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Person</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">age</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">_classCallCheck</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Person</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">assign</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        age</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">age</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Person</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tian</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="_3-解释编译结果" tabindex="-1">3.解释编译结果 <a class="header-anchor" href="#_3-解释编译结果" aria-hidden="true">#</a></h3><blockquote><p>Babel 本身可以编译 ES6 的大部分语法，比如 let、const、箭头函数、类</p><p>但是对于 ES6 新增的 API，比如 Set、Map、Promise 等全局对象，以及一些定义在全局对象上的方法（比如 Object.assign/Array.from）都不能直接编译，需要借助其它的模块</p><p>Babel 一般需要配合 Webpack 来编译模块语法</p></blockquote><h2 id="_2-babel的使用方式" tabindex="-1">2.Babel的使用方式 <a class="header-anchor" href="#_2-babel的使用方式" aria-hidden="true">#</a></h2><ul><li>Babel有哪些使用方式</li><li>在命令行工具中使用Babel</li></ul><p><a href="https://imgchr.com/i/DfwOJA" target="_blank" rel="noreferrer"><img src="https://s3.ax1x.com/2020/12/01/DfwOJA.png" alt="DfwOJA.png"></a></p><p><strong>在当前目录打开命令行工具</strong></p><p><a href="https://imgchr.com/i/Df0Mo4" target="_blank" rel="noreferrer"><img src="https://s3.ax1x.com/2020/12/01/Df0Mo4.png" alt="Df0Mo4.png"></a></p><h2 id="_3-使用-babel前的准备工作" tabindex="-1">3.使用 Babel前的准备工作 <a class="header-anchor" href="#_3-使用-babel前的准备工作" aria-hidden="true">#</a></h2><ul><li>什么是 Node.js 和npm</li><li>安装Node.js</li><li>初始化项目</li><li>安装 Babel需要的包</li></ul><h3 id="_1-什么是-node-js-和-npm" tabindex="-1">1.什么是 Node.js 和 npm <a class="header-anchor" href="#_1-什么是-node-js-和-npm" aria-hidden="true">#</a></h3><blockquote><p>Node.js 是个平台或者工具，对应浏览器</p><p>后端的 JavaScript = ECMAScript + IO + File + ...等服务器端的操作</p><p>npm：node 包管理工具</p></blockquote><h3 id="_2-安装-node-js" tabindex="-1">2.安装 Node.js <a class="header-anchor" href="#_2-安装-node-js" aria-hidden="true">#</a></h3><blockquote><p>node.js官网 <a href="https://nodejs.org/zh-cn/" target="_blank" rel="noreferrer">https://nodejs.org/zh-cn/</a></p><p>node -v</p><p>npm -v</p></blockquote><p><a href="https://imgchr.com/i/DfDmaF" target="_blank" rel="noreferrer"><img src="https://s3.ax1x.com/2020/12/01/DfDmaF.png" alt="DfDmaF.png"></a></p><p>[<img src="https://s3.ax1x.com/2020/12/01/Df0Mo4.png" alt="Df0Mo4.png"></p><h3 id="_3-初始化项目" tabindex="-1">3.初始化项目 <a class="header-anchor" href="#_3-初始化项目" aria-hidden="true">#</a></h3><blockquote><p>npm init -&gt; package.json</p></blockquote><p><a href="https://imgchr.com/i/DfyfRH" target="_blank" rel="noreferrer"><img src="https://s3.ax1x.com/2020/12/01/DfyfRH.png" alt="DfyfRH.png"></a></p><p><a href="https://imgchr.com/i/Df6W7V" target="_blank" rel="noreferrer"><img src="https://s3.ax1x.com/2020/12/01/Df6W7V.png" alt="Df6W7V.png"></a></p><h3 id="_4-安装-babel-需要的包" tabindex="-1">4.安装 Babel 需要的包 <a class="header-anchor" href="#_4-安装-babel-需要的包" aria-hidden="true">#</a></h3><blockquote><p>npm config set registry <a href="https://registry.npm.taobao.org" target="_blank" rel="noreferrer">https://registry.npm.taobao.org</a> 切换安装源</p><p>npm install --save-dev @babel/core @babel/cli</p><p>npm install --save-dev @babel/core@7.11.0 @babel/cli@7.10.5</p></blockquote><p><a href="https://imgchr.com/i/Dfc0D1" target="_blank" rel="noreferrer"><img src="https://s3.ax1x.com/2020/12/01/Dfc0D1.png" alt="Dfc0D1.png"></a></p><p><a href="https://imgchr.com/i/Dfg3Md" target="_blank" rel="noreferrer"><img src="https://s3.ax1x.com/2020/12/01/Dfg3Md.png" alt="Dfg3Md.png"></a></p><p><a href="https://imgchr.com/i/DfgAM9" target="_blank" rel="noreferrer"><img src="https://s3.ax1x.com/2020/12/01/DfgAM9.png" alt="DfgAM9.png"></a></p><p><strong>如果删除node_modules 后 包都没有 可以通过 npm install重新下载回来 因为package.json记录了</strong></p><h2 id="_4-使用babel编译es6代码" tabindex="-1">4.使用Babel编译ES6代码 <a class="header-anchor" href="#_4-使用babel编译es6代码" aria-hidden="true">#</a></h2><ul><li>编译的命令</li><li>Babel的配置文件</li></ul><h3 id="_1-执行编译的命令" tabindex="-1">1.执行编译的命令 <a class="header-anchor" href="#_1-执行编译的命令" aria-hidden="true">#</a></h3><blockquote><p>在 package.json 文件中添加执行 babel 的命令</p></blockquote><p><a href="https://imgchr.com/i/Df2lkV" target="_blank" rel="noreferrer"><img src="https://s3.ax1x.com/2020/12/01/Df2lkV.png" alt="Df2lkV.png"></a></p><p><a href="https://imgchr.com/i/DfWmaq" target="_blank" rel="noreferrer"><img src="https://s3.ax1x.com/2020/12/01/DfWmaq.png" alt="DfWmaq.png"></a></p><p><strong>通过babel将 src下的文件 -d代表输出 写完整是--out-dir 到 lib</strong> 我们可以改为dist</p><p><strong>babel src -d dist</strong></p><p><strong>babel src --out-dir dist</strong></p><p><a href="https://imgchr.com/i/DfWcdI" target="_blank" rel="noreferrer"><img src="https://s3.ax1x.com/2020/12/01/DfWcdI.png" alt="DfWcdI.png"></a></p><p><a href="https://imgchr.com/i/Dff5h6" target="_blank" rel="noreferrer"><img src="https://s3.ax1x.com/2020/12/01/Dff5h6.png" alt="Dff5h6.png"></a></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tian</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> age </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> add </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">y</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> y</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">resolve</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">reject</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">成功</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">Array</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">from</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./index.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p><strong>npm run build</strong></p><p><a href="https://imgchr.com/i/DffOHA" target="_blank" rel="noreferrer"><img src="https://s3.ax1x.com/2020/12/01/DffOHA.png" alt="DffOHA.png"></a></p><p><a href="https://imgchr.com/i/Dfh1b9" target="_blank" rel="noreferrer"><img src="https://s3.ax1x.com/2020/12/01/Dfh1b9.png" alt="Dfh1b9.png"></a></p><h3 id="_2-babel-的配置文件" tabindex="-1">2.Babel 的配置文件 <a class="header-anchor" href="#_2-babel-的配置文件" aria-hidden="true">#</a></h3><p><a href="https://imgchr.com/i/Dfhoan" target="_blank" rel="noreferrer"><img src="https://s3.ax1x.com/2020/12/01/Dfhoan.png" alt="Dfhoan.png"></a></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm install </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">babel</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">preset</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">env@</span><span style="color:#F78C6C;">7.11</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">save</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">dev</span></span>
<span class="line"></span></code></pre></div><p><a href="https://imgchr.com/i/Df59mQ" target="_blank" rel="noreferrer"><img src="https://s3.ax1x.com/2020/12/01/Df59mQ.png" alt="Df59mQ.png"></a></p><p><strong>@babel/cli 在命令行工具输入Babel命令需要 @babel/core Babel的核心包 负责发号施令</strong></p><p><strong>@babel/preset-env 如何转换代码</strong></p><p><strong>创建配置文件 .babelrc，并配置</strong></p><p><a href="https://imgchr.com/i/Df5cjS" target="_blank" rel="noreferrer"><img src="https://s3.ax1x.com/2020/12/01/Df5cjS.png" alt="Df5cjS.png"></a></p><p><a href="https://imgchr.com/i/DICCod" target="_blank" rel="noreferrer"><img src="https://s3.ax1x.com/2020/12/02/DICCod.png" alt="DICCod.png"></a></p>`,61),e=[o];function t(r,c,D,y,F,i){return a(),n("div",null,e)}const h=s(p,[["render",t]]);export{A as __pageData,h as default};