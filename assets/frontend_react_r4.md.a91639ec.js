import{_ as s,o as l,c as a,a as n}from"./app.123d3e53.js";const F=JSON.parse('{"title":"Javascript-basic","description":"","frontmatter":{},"headers":[{"level":3,"title":"Js发展史","slug":"js发展史","link":"#js发展史","children":[]},{"level":3,"title":"Js的组成","slug":"js的组成","link":"#js的组成","children":[]},{"level":3,"title":"运行引擎","slug":"运行引擎","link":"#运行引擎","children":[]},{"level":3,"title":"Js编写方式","slug":"js编写方式","link":"#js编写方式","children":[]},{"level":3,"title":"Js交互方式","slug":"js交互方式","link":"#js交互方式","children":[]},{"level":3,"title":"Js语句和分号","slug":"js语句和分号","link":"#js语句和分号","children":[]},{"level":3,"title":"Js的注释","slug":"js的注释","link":"#js的注释","children":[]},{"level":3,"title":"推荐插件","slug":"推荐插件","link":"#推荐插件","children":[]},{"level":3,"title":"Js的变量","slug":"js的变量","link":"#js的变量","children":[]},{"level":2,"title":"JS的基本数据类型  (7原始+1复杂类型)","slug":"js的基本数据类型-7原始-1复杂类型","link":"#js的基本数据类型-7原始-1复杂类型","children":[{"level":3,"title":"Number类型","slug":"number类型","link":"#number类型","children":[]},{"level":3,"title":"String类型","slug":"string类型","link":"#string类型","children":[]},{"level":3,"title":"Boolean 类型","slug":"boolean-类型","link":"#boolean-类型","children":[]},{"level":3,"title":"Undefined类型","slug":"undefined类型","link":"#undefined类型","children":[]},{"level":3,"title":"Object类型","slug":"object类型","link":"#object类型","children":[]},{"level":3,"title":"Null 类型","slug":"null-类型","link":"#null-类型","children":[]}]},{"level":2,"title":"JS类型转换","slug":"js类型转换","link":"#js类型转换","children":[]},{"level":2,"title":"运算符","slug":"运算符","link":"#运算符","children":[]},{"level":2,"title":"分支语句","slug":"分支语句","link":"#分支语句","children":[]}],"relativePath":"frontend/react/r4.md","lastUpdated":1676289278000}'),e={name:"frontend/react/r4.md"},o=n(`<h1 id="javascript-basic" tabindex="-1">Javascript-basic <a class="header-anchor" href="#javascript-basic" aria-hidden="true">#</a></h1><p>计算机语言 --&gt; 人与计算机之间沟通交流的语言</p><p>编程语言 --&gt; 定义计算机程序的形式语言</p><p>编程语言特点：</p><ul><li>数据和数据结构</li><li>指令及流程控制</li><li>引用机制和重用机制</li><li>设计哲学</li></ul><h3 id="js发展史" tabindex="-1">Js发展史 <a class="header-anchor" href="#js发展史" aria-hidden="true">#</a></h3><h3 id="js的组成" tabindex="-1">Js的组成 <a class="header-anchor" href="#js的组成" aria-hidden="true">#</a></h3><blockquote><p>ES ------&gt; 定义语言规范</p><p>DOM -----&gt; 用于操作文档的API</p><p>BOM ------&gt; 用于操作浏览器的API</p></blockquote><p>js基础 (BOM、DOM)<br> js高级 底层、v8 、 浏览器底层、内存管理、手写源码</p><p>ECMAScript 1997 ---至今</p><p>浏览器内核 指的就是浏览器排版引擎 js代码由js引擎来执行</p><p>为什么需要js引擎</p><p>高级语言都需要转成最终的机器指令来执行 js无论是交给浏览器或者Node执行，最后都需要被CPU执行 但CPU只认识自己的指令集 因此需要js引擎来帮我们把js代码翻译成为CPU指令来执行</p><h3 id="运行引擎" tabindex="-1">运行引擎 <a class="header-anchor" href="#运行引擎" aria-hidden="true">#</a></h3><p>SpiderMonkey 第一款JS引擎，由Brendan Eich开发 (js作者) Chakra 微软开发用于IT浏览器 JavascriptCore webkit中的引擎 apple公司开发 V8</p><p>WebCore 负责HTML解析、布局、渲染等相关的工作 JavascriptCore 解析、执行js代码</p><h3 id="js编写方式" tabindex="-1">Js编写方式 <a class="header-anchor" href="#js编写方式" aria-hidden="true">#</a></h3><p><code>&lt;noscript&gt;</code>元素 被用于给不支持Js的浏览器提供替代内容 js编写注意事项</p><ul><li>script元素不能写成但标签</li><li>省略tpye属性</li><li>加载顺序 自上而下的顺序</li></ul><h3 id="js交互方式" tabindex="-1">Js交互方式 <a class="header-anchor" href="#js交互方式" aria-hidden="true">#</a></h3><ul><li><ol><li>alert函数 接受</li></ol></li><li><ol start="2"><li>console.log()</li></ol></li><li><ol start="3"><li>document.write(&#39;hello world&#39;)</li></ol></li><li><ol start="4"><li>prompt函数 var res = prompt() alert(&#39;内容是: &#39; + res)</li></ol></li></ul><table><thead><tr><th>交互方法</th><th>方法说明</th><th>效果查看</th></tr></thead><tbody><tr><td>alert</td><td>接受1个参数</td><td>弹窗查看</td></tr><tr><td>console.log()</td><td>接受多个参数</td><td>浏览器控制台查看</td></tr><tr><td>document.write</td><td>接受多个字符串</td><td>在浏览器页面查看</td></tr><tr><td>prompt()</td><td>接受一个参数</td><td>在浏览器接受用户输入</td></tr></tbody></table><h3 id="js语句和分号" tabindex="-1">Js语句和分号 <a class="header-anchor" href="#js语句和分号" aria-hidden="true">#</a></h3><p>----&gt; js讲换行符理解成隐式的分号 (自动插入分号)</p><h3 id="js的注释" tabindex="-1">Js的注释 <a class="header-anchor" href="#js的注释" aria-hidden="true">#</a></h3><ul><li><ol><li>单行注释</li></ol></li><li><ol start="2"><li>多行注释</li></ol></li><li><ol start="3"><li>文档注释</li></ol></li></ul><h3 id="推荐插件" tabindex="-1">推荐插件 <a class="header-anchor" href="#推荐插件" aria-hidden="true">#</a></h3><ul><li>ES7+ React/Redux/React-Native snippets</li></ul><h3 id="js的变量" tabindex="-1">Js的变量 <a class="header-anchor" href="#js的变量" aria-hidden="true">#</a></h3><p>变量 --&gt; 一个用于存放数值的容器 这个数组可以是数字、字符串或其他任意的数据 特点 ==&gt; 存放的数值是可以改变的</p><p>变量命名规则</p><ul><li>第一个字符必须为一个字母、下划线(_)、或一个美元符号($)</li><li>其他字符可以是字母、下划线、美元符号</li><li>不能使用关键字、保留字命名 参考MDN</li><li>变量严格区分大小写</li></ul><p>命名规范</p><ul><li>多个单词使用驼峰(小驼峰)标识</li><li>赋值 = 两边加上空格</li><li>语句结束加上分号</li><li>变量命名做到 见名知意</li></ul><h2 id="js的基本数据类型-7原始-1复杂类型" tabindex="-1">JS的基本数据类型 (7原始+1复杂类型) <a class="header-anchor" href="#js的基本数据类型-7原始-1复杂类型" aria-hidden="true">#</a></h2><p>Number 、String 、 Boolean 、Undefined 、 Null(未知的值) 、 Object(复杂类型) 、BigInt Symbol (唯一的标识符)</p><p><code>console.log(null == undefined) true </code> 因为在js中它们都表示一个未定义或空值 两者进行比较时 ==&gt; 类型转化 js将两者视为同一类型的值(都是特殊的未定义值)</p><h3 id="number类型" tabindex="-1">Number类型 <a class="header-anchor" href="#number类型" aria-hidden="true">#</a></h3><ul><li>number代表整数、浮点数</li><li>Infinity 代表 无穷大</li><li>NaN(not a number) 代表一个计算错误</li></ul><p>进制表示</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> num </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 10进制</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> num2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0x100</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 16</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> num3 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0o100</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 8</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> num4 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0b100</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 2</span></span>
<span class="line"></span></code></pre></div><p>数字表示范围</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> max </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Number</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">MAX_VALUE</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> min </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Number</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">MIN_VALUE</span></span>
<span class="line"></span></code></pre></div><p>isNaN 用于判断是否不是一个数字</p><ul><li>不是数字----&gt; true</li><li>是数字----&gt; false</li></ul><h3 id="string类型" tabindex="-1">String类型 <a class="header-anchor" href="#string类型" aria-hidden="true">#</a></h3><p>引号使用 单引号、双引号、反引号、转义字符</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> msg </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">you are the best </span><span style="color:#A6ACCD;">\\&#39;\\&#39;</span><span style="color:#C3E88D;"> is person</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(msg)</span></span>
<span class="line"></span></code></pre></div><h3 id="boolean-类型" tabindex="-1">Boolean 类型 <a class="header-anchor" href="#boolean-类型" aria-hidden="true">#</a></h3><p>一般用来表示真假</p><h3 id="undefined类型" tabindex="-1">Undefined类型 <a class="header-anchor" href="#undefined类型" aria-hidden="true">#</a></h3><p>只有一个值 undefined</p><h3 id="object类型" tabindex="-1">Object类型 <a class="header-anchor" href="#object类型" aria-hidden="true">#</a></h3><p>特殊的类型 通常称为引用类型和复杂类型 其他的数据我们通常称为原始类型 它们的值值只包含一个单独的内容(字符串、数字) Object 往往可以表示一组数据，是其他数据的一个集合</p><p>一个对象被初始化为空 在内存角度，在堆内存中创建一个真正的对象 如果不希望被创建 则可以赋值为null 在内存地址中为0x0 null ==&gt; Boolean类型 为false</p><p>初始化为{}, ==&gt; Boolean类型 , 为true</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>null存在的意义 就是对 对象进行初始化的</p></div><h3 id="null-类型" tabindex="-1">Null 类型 <a class="header-anchor" href="#null-类型" aria-hidden="true">#</a></h3><p>通常用来表示一个对象为空，所以通常在给对象进行初始化时，赋值为null</p><p>null与undefined的关系 undefined 通常只有在一个变量声明但未初始化时，默认值为undefined 一个变量准备保存为一个对象，但是这个对象不确定时，可以赋值为null</p><h2 id="js类型转换" tabindex="-1">JS类型转换 <a class="header-anchor" href="#js类型转换" aria-hidden="true">#</a></h2><p>显式类型转换优先级高于隐式类型转换</p><ul><li>Js中隐式转换的优先级原则 <ol><li>布尔值转数字</li><li>字符串转数字</li><li>对象转原始值 通过valueOf() toString()方法将对象转换为原始值</li></ol></li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>如果 valueOf() 方法返回的是对象，则 toString() 方法将被调用。如果 toString() 方法返回的是对象，则将抛出类型错误</p></div><p><strong>一个字符串和其他类型进行+操作 则自动转化为字符串类型进行拼接</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> isAdmin </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> admin </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> isAdmin </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;">  admin) </span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">// string </span></span>
<span class="line"></span></code></pre></div><ul><li>显式类型转换优先级规则 <ol><li>Number()函数: 可以将任何类型的值转换为数字</li><li>String()函数: 可将任何类型的值转换为字符串</li><li>Boolean()函数:可将任何类型的值转换为布尔值</li></ol></li></ul><p>Number()中的规则</p><table><thead><tr><th>值</th><th>转换后的值</th></tr></thead><tbody><tr><td>undefined</td><td>NaN</td></tr><tr><td>null</td><td>0</td></tr><tr><td>true false</td><td>1 &amp; 0</td></tr><tr><td>string</td><td>去掉首尾空格的纯数字字符串中含有的数字 如果剩余字符串为空，则转换结果为0 否则将从剩余字符串中读取数字 当类型转换出现error时返回NaN</td></tr></tbody></table><p>Boolean()中的规则</p><table><thead><tr><th>值</th><th>转换后的值</th></tr></thead><tbody><tr><td>0,null,undefined,NaN,&quot;&quot;</td><td>false</td></tr><tr><td>其他值</td><td>true</td></tr><tr><td>true false</td><td>1 &amp; 0</td></tr></tbody></table><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>js中非空字符串总为true console.log(Boolean(&quot;0&quot;)); // true console.log(Boolean(&quot;&quot;)); // false</p></div><h4 id="typeof-操作符" tabindex="-1">typeof 操作符 <a class="header-anchor" href="#typeof-操作符" aria-hidden="true">#</a></h4><p>ECMAScript的类型系统是松散的 需要一种手段来确定任意变量的数据类型 typeof</p><p>对于一个值 typeof会返回下列字符串之一: undefined 表示值未定义 、Boolean 值为布尔值 string 值为字符串 、function 值为函数 object 值为对象或null、symbol 值为符号 、number 值为数字</p><details class="details custom-block"><summary>typeof 为什么不能判断Null Object</summary><p>一个对象被初始化为空 在内存角度，在堆内存中创建一个真正的对象 如果不希望被创建 则可以赋值为null 在内存地址中为0x0 null ==&gt; Boolean类型 为false</p><p>初始化为{}, ==&gt; Boolean类型 , 为true</p></details><h2 id="运算符" tabindex="-1">运算符 <a class="header-anchor" href="#运算符" aria-hidden="true">#</a></h2><p>算术运算符、赋值运算符、关系运算符、逻辑运算符</p><p>运算元 ---运算符应用的对象</p><p>一元运算符 + -</p><p>三运运算符 a&gt;0 ? 1:0</p><h4 id="算术运算符" tabindex="-1">算术运算符 <a class="header-anchor" href="#算术运算符" aria-hidden="true">#</a></h4><ol><li>加法（+）：使用加法运算符可以将两个数相加。</li><li>减法（-）：使用减法运算符可以从第一个数中减去第二个数。</li><li>乘法（*）：使用乘法运算符可以将两个数相乘。</li><li>除法（/）：使用除法运算符可以将第一个数除以第二个数。</li><li>取模（%）：使用取模运算符可以计算两个数的余数。</li><li>自增（++）：使用自增运算符可以将一个数的值增加 1。</li><li>自减（--）：使用自减运算符可以将一个数的值减少 1。</li></ol><div class="info custom-block"><p class="custom-block-title">INFO</p><p>ES7也叫做ES2016 <code>2**3 代表 2的3次幂 结果为 8 等同于Math.pow(2,3)</code></p></div><p><strong>++i</strong>--&gt;它在先加 1 再返回该值。 <strong>i++</strong>--&gt;它先返回该值，再加 1。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">i)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 11</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(i</span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 10</span></span>
<span class="line"></span></code></pre></div><h4 id="赋值运算符" tabindex="-1">赋值运算符 <a class="header-anchor" href="#赋值运算符" aria-hidden="true">#</a></h4><ol><li>简单赋值（=）：使用简单赋值运算符可以将值赋给变量。</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>复合赋值（+=、-=、*=、/=、%=）：复合赋值运算符可以简化复杂的赋值运算。</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">Copy code</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// a 的值现在是 15</span></span>
<span class="line"></span></code></pre></div><p>下面是 JavaScript 中运算符的优先级列表，从高到低排列：</p><ul><li>圆括号（()）</li><li>单目运算符（++、--、!、typeof）</li><li>乘法（*）、除法（/）和取模（%）</li><li>加法（+）和减法（-）</li><li>关系运算符（&gt;, &gt;=, &lt;, &lt;=, ==, !=）</li><li>逻辑运算符（&amp;&amp;、||）</li><li>赋值运算符（=、+=、-=、*=、/=、%=）</li></ul><p>在运算时，如果有多个运算符，那么具有较高优先级的运算符会先被处理，再进行具有较低优先级的运算。可以使用圆括号来强制规定特定的运算顺序。</p><h4 id="比较运算符" tabindex="-1">比较运算符 <a class="header-anchor" href="#比较运算符" aria-hidden="true">#</a></h4><table><thead><tr><th>运算符</th><th>描述</th></tr></thead><tbody><tr><td>==</td><td>如果两个值相等，则返回 true。</td></tr><tr><td>!=</td><td>如果两个值不相等，则返回 true。</td></tr><tr><td>===</td><td>如果两个值类型和值都相等，则返回 true。</td></tr><tr><td>!==</td><td>如果两个值类型和值不都相等，则返回 true。</td></tr><tr><td>&gt;</td><td>如果左值大于右值，则返回 true。</td></tr><tr><td>&gt;=</td><td>如果左值大于等于右值，则返回 true。</td></tr><tr><td>&lt;</td><td>如果左值小于右值，则返回 true。</td></tr><tr><td>&lt;=</td><td>如果左值小于等于右值，则返回 true。</td></tr></tbody></table><h5 id="和-的区别" tabindex="-1">=== 和 ==的区别 <a class="header-anchor" href="#和-的区别" aria-hidden="true">#</a></h5><p>== 在不相同类型下，会将运算元进行类型转换，然后再比较它们的值</p><p>=== 则不进行类型转换，只会在两个操作数类型和值都相等的情况下返回true</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>== 存在的问题 ，不能区分0和false , 或者空字符串和false这里运算</p></div><h4 id="逻辑运算符" tabindex="-1">逻辑运算符 <a class="header-anchor" href="#逻辑运算符" aria-hidden="true">#</a></h4><ul><li>&amp;&amp;（逻辑与）：返回两个操作数的逻辑与，如果两个操作数都为真，则返回真，否则返回假。</li><li>||（逻辑或）：返回两个操作数的逻辑或，如果两个操作数至少有一个为真，则返回真，否则返回假。</li><li>!（逻辑非）：返回一个操作数的逻辑非，如果操作数为真，则返回假，否则返回真。</li></ul><h5 id="逻辑或的本质" tabindex="-1">逻辑或的本质 <a class="header-anchor" href="#逻辑或的本质" aria-hidden="true">#</a></h5><blockquote><p>脱离分支语句 单独使用逻辑或</p><ol><li><p>先将运算元转化为Boolean类型</p></li><li><p>对转成的Boolean类型进行判断 如果为true就直接返回 (运算元的原类型)</p></li><li><p>如果所有的操作数都被计算过(转化结果都为false),则返回最后一个操作数</p></li></ol><p>顺序 左--&gt; 右</p></blockquote><h5 id="逻辑与的本质" tabindex="-1">逻辑与的本质 <a class="header-anchor" href="#逻辑与的本质" aria-hidden="true">#</a></h5><blockquote><ol><li><p>拿到第一个运算元，将运算元转换成Boolean类型</p></li><li><p>对运算元的Boolean类型进行判断<br> 如果为false 返回运算元(原始值) true, 查找下一个继续运算</p></li></ol></blockquote><h2 id="分支语句" tabindex="-1">分支语句 <a class="header-anchor" href="#分支语句" aria-hidden="true">#</a></h2><p>程序中分为三种不同的执行方式</p><ul><li>顺序 ==&gt; 上到下，顺序的执行代码</li><li>分支 ==&gt; 根据条件判断，决定代码的分支</li><li>循环 ==&gt; 让特定的代码重复执行</li></ul><h4 id="js中常见的分支结构" tabindex="-1">Js中常见的分支结构 <a class="header-anchor" href="#js中常见的分支结构" aria-hidden="true">#</a></h4><ul><li><ol><li>if分支结构</li></ol></li></ul><p>if分支结构 单分支结构 if 多分枝结构 if...else.. if...elseif ...else..</p><ul><li><ol start="2"><li>switch分支结构</li></ol></li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> btnIndex </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">switch</span><span style="color:#A6ACCD;"> (btnIndex)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">111</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">222</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">333</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">final</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 若不加 break ，这个case的过程叫做  case穿透</span></span>
<span class="line"></span></code></pre></div><h4 id="循环语句" tabindex="-1">循环语句 <a class="header-anchor" href="#循环语句" aria-hidden="true">#</a></h4><ul><li><ol><li>while循环</li></ol></li></ul><blockquote><p>条件成立 ==&gt; 执行代码块</p><p>不成立 ==&gt; 跳出代码块</p><p><strong>若条件一直为true，则产生死循环 尽量避免</strong></p></blockquote><ul><li><ol start="2"><li>do while循环</li></ol></li></ul><blockquote><p>特点： 无论条件是否成立，do循环体都会先执行一次</p></blockquote><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> count </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">do</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">count: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">count</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">++;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#A6ACCD;"> (count</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><ul><li><ol start="3"><li>for循环</li></ol></li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> names </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">c</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">d</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">e</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">f</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> names</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">names</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">d</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>循环控制 通常为2种</p><ul><li>break 中断 直接跳出去</li><li>continue 跳过当前的条件 去执行后续的操作</li></ul>`,124),p=[o];function t(r,c,i,d,y,D){return l(),a("div",null,p)}const h=s(e,[["render",t]]);export{F as __pageData,h as default};