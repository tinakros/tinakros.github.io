import{_ as s,o as n,c as a,a as l}from"./app.7fec0c9b.js";const A=JSON.parse('{"title":"给  添加 algolia 搜索","description":"","frontmatter":{},"headers":[{"level":2,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":2,"title":"前期准备","slug":"前期准备","link":"#前期准备","children":[{"level":3,"title":"账号与创建应用","slug":"账号与创建应用","link":"#账号与创建应用","children":[]}]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[{"level":3,"title":"获取 key","slug":"获取-key","link":"#获取-key","children":[]},{"level":3,"title":"在文档中填写 key","slug":"在文档中填写-key","link":"#在文档中填写-key","children":[]},{"level":3,"title":"私钥放在 Github Secrets 中","slug":"私钥放在-github-secrets-中","link":"#私钥放在-github-secrets-中","children":[]},{"level":3,"title":"创建 crawlerConfig.json","slug":"创建-crawlerconfig-json","link":"#创建-crawlerconfig-json","children":[]},{"level":3,"title":"编写 CI 脚本 ~new","slug":"编写-ci-脚本-new","link":"#编写-ci-脚本-new","children":[]}]}],"relativePath":"note/ch1.md","lastUpdated":1682234381000}'),o={name:"note/ch1.md"},p=l(`<h1 id="给-添加-algolia-搜索" tabindex="-1">给 添加 algolia 搜索 <a class="header-anchor" href="#给-添加-algolia-搜索" aria-hidden="true">#</a></h1><h2 id="背景" tabindex="-1">背景 <a class="header-anchor" href="#背景" aria-hidden="true">#</a></h2><p>最近在折腾 ，搭建了一个文档项目：<a href="https://tinaer.cn/" target="_blank" rel="noreferrer">tinaer</a>，不过文档还不支持搜索功能，虽然目前内容不多，但待我同步完之后，搜索就很有必要了。</p><p>之前看 官网发现没有相关介绍文档，不过好在自己对于 algolia 比较熟悉了，于是自己在项目中集成了。</p><p><img src="https://img-blog.csdnimg.cn/9d54f32394d34a639c408da4487ade8f.png" alt=""></p><h2 id="前期准备" tabindex="-1">前期准备 <a class="header-anchor" href="#前期准备" aria-hidden="true">#</a></h2><h3 id="账号与创建应用" tabindex="-1">账号与创建应用 <a class="header-anchor" href="#账号与创建应用" aria-hidden="true">#</a></h3><p>需要再 <a href="https://www.algolia.com/doc/" target="_blank" rel="noreferrer">algolia 官网</a> 注册一个账号，或者直接选择以 GitHub 身份登录。</p><p><img src="https://img-blog.csdnimg.cn/02f437bc10b24bc8add0931246dd400a.png" alt=""></p><p>登录之后会进入控制台页面，点击右上角头像，会有一个设置选项，之后来到 Applications 这里，去创建一个应用，以我自己的为例，下图已经创建好了「chodocs」。</p><p><img src="https://img-blog.csdnimg.cn/57e67874de2a432e921eeaec8d85bc5d.png" alt=""></p><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-hidden="true">#</a></h2><h3 id="获取-key" tabindex="-1">获取 key <a class="header-anchor" href="#获取-key" aria-hidden="true">#</a></h3><p>如图下所示，进入 API Keys 页面。</p><p><img src="https://img-blog.csdnimg.cn/d52d661812bd42afa80a0c468c2bc768.png" alt=""></p><p>会看到如下界面，一个是可公开的，<code>Search-Only API Key</code> 是待会我们在 项目中会使用的，而 <code>Admin API Key</code> 是用于一会爬虫的 key，因为是私有的，所以一会放在 Github Secrets 中。</p><p><img src="https://img-blog.csdnimg.cn/0ac511b6fe864070848b57505cf9d465.png" alt=""></p><h3 id="在文档中填写-key" tabindex="-1">在文档中填写 key <a class="header-anchor" href="#在文档中填写-key" aria-hidden="true">#</a></h3><p>在上一步我们获取了公开的 key，在这里我们就来配置一下，将上述的 <code>Search-Only API Key</code> 填到 apiKey 字段中，<strong>私有的 key 不要填</strong>！</p><p>修改文件在 <code>docs/./config</code> 文件中，具体可参考链接 <a href="https://github.com/Chocolate1999/chodocs/blob/main/docs/./config.ts" target="_blank" rel="noreferrer">config.ts</a>。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">algolia</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">appId</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">RDDxxx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 需要替换</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">apiKey</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">9302dbxxx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 需要替换</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">indexName</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">chodocs</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 需要替换</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">placeholder</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">请输入关键词</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">buttonText</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">搜索</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="私钥放在-github-secrets-中" tabindex="-1">私钥放在 Github Secrets 中 <a class="header-anchor" href="#私钥放在-github-secrets-中" aria-hidden="true">#</a></h3><p>将上述获取的 <code>Admin API Key</code> 添加到 Github Secrets 中，如下图所示，创建 <code>API_KEY</code> 和 <code>APPLICATION_ID</code> 两个字段，一会在 ci 中会使用到。</p><p><img src="https://img-blog.csdnimg.cn/2176c7e486e3491986719149b8888e17.png" alt=""></p><h3 id="创建-crawlerconfig-json" tabindex="-1">创建 crawlerConfig.json <a class="header-anchor" href="#创建-crawlerconfig-json" aria-hidden="true">#</a></h3><p>在项目的根目录下创建 <code>crawlerConfig.json</code> 文件，内容如下，注意前两个字段需要进行替换。这是告诉 <code>algolia</code> 需要爬取的配置。</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">index_name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">chodocs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 填写自己的索引名称</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">start_urls</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://chodocs.cn/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 填写自己的网站地址</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">rateLimit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">maxDepth</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">selectors</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">lvl0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">selector</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">defaultValue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Documentation</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">lvl1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.content h1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">lvl2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.content h2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">lvl3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.content h3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">lvl4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.content h4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">lvl5</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.content h5</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">content</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.content p, .content li</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">selectors_exclude</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">aside</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.page-footer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.next-and-prev-link</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.table-of-contents</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">js_render</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="编写-ci-脚本-new" tabindex="-1">编写 CI 脚本 ~new <a class="header-anchor" href="#编写-ci-脚本-new" aria-hidden="true">#</a></h3><p>在项目根目录<code>.github/workflows</code> 文件夹下，创建 <code>algolia.yml</code> 文件（名称可更改，自定义），粘贴如下内容：</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">algolia</span></span>
<span class="line"><span style="color:#FF9CAC;">on</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">push</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">branches</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">main</span></span>
<span class="line"><span style="color:#F07178;">jobs</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">algolia</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">runs-on</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ubuntu-latest</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">steps</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">actions/checkout@v3</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Get the content of algolia.json as config</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">algolia_config</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">run</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">echo &quot;config=$(cat crawlerConfig.json | jq -r tostring)&quot; &gt;&gt; $GITHUB_OUTPUT</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Push indices to Algolia</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">signcl/docsearch-scraper-action@master</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">env</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">APPLICATION_ID</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\${{ secrets.APPLICATION_ID }}</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">API_KEY</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\${{ secrets.API_KEY }}</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">CONFIG</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\${{ steps.algolia_config.outputs.config }}</span></span>
<span class="line"></span></code></pre></div><blockquote><p>解释一下：这里 yml 就是使用 Github Actions 在 Docker 中执行的 AlgoliaDocSearch scraper action，当我们推送到 main 分支时就会立即执行这个任务，当然如果你是 master 分支只需要修改 branches 那里的值即可。</p></blockquote>`,31),e=[p];function t(c,r,D,F,y,i){return n(),a("div",null,e)}const d=s(o,[["render",t]]);export{A as __pageData,d as default};