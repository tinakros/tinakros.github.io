import{_ as s,o as n,c as a,a as l}from"./app.581d89f9.js";const d=JSON.parse('{"title":"腾讯云服务器快速搭建站点并配置ssl证书","description":"","frontmatter":{},"headers":[{"level":2,"title":"1.安装nginx","slug":"_1-安装nginx","link":"#_1-安装nginx","children":[]},{"level":2,"title":"通过Xshell等远程桌面应用连接云端服务器进安装依赖","slug":"通过xshell等远程桌面应用连接云端服务器进安装依赖","link":"#通过xshell等远程桌面应用连接云端服务器进安装依赖","children":[]},{"level":2,"title":"2.安装ssl证书","slug":"_2-安装ssl证书","link":"#_2-安装ssl证书","children":[]},{"level":2,"title":"偷懒小tips","slug":"偷懒小tips","link":"#偷懒小tips","children":[]}],"relativePath":"note/nginx/01nginx配置.md","lastUpdated":1673274523000}'),p={name:"note/nginx/01nginx配置.md"},o=l(`<h1 id="腾讯云服务器快速搭建站点并配置ssl证书" tabindex="-1">腾讯云服务器快速搭建站点并配置ssl证书 <a class="header-anchor" href="#腾讯云服务器快速搭建站点并配置ssl证书" aria-hidden="true">#</a></h1><h2 id="_1-安装nginx" tabindex="-1">1.安装nginx <a class="header-anchor" href="#_1-安装nginx" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>首先，关于安装nginx，主要分为两种方式</p><ul><li><ol><li>自行去nginx下载相应的版本安装包<a href="http://nginx.org/en/download.html" target="_blank" rel="noreferrer">nginx</a></li></ol></li><li><ol start="2"><li>直接在服务器上命令行操作下载安装nginx</li></ol></li></ul><p>在这里主要推荐第2种方式安装</p></div><p> 进入官网下载nginx</p><p><img src="https://s2.loli.net/2023/01/09/xpX9BrYR2gdS6fI.png" alt="image-20211009051838683.4c360112.png"></p><h2 id="通过xshell等远程桌面应用连接云端服务器进安装依赖" tabindex="-1">通过Xshell等远程桌面应用连接云端服务器进安装依赖 <a class="header-anchor" href="#通过xshell等远程桌面应用连接云端服务器进安装依赖" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>注意 这里十分重要，需要先安装依赖环境 再安装nginx, 跟着命令顺序依次进行即可安装成功</p></div><h4 id="_1-安装所需依赖" tabindex="-1">① 安装所需依赖 <a class="header-anchor" href="#_1-安装所需依赖" aria-hidden="true">#</a></h4><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#1.安装所需依赖</span></span>
<span class="line"><span style="color:#89DDFF;">yum</span><span style="color:#A6ACCD;"> install gcc-c++</span></span>
<span class="line"><span style="color:#89DDFF;">yum</span><span style="color:#A6ACCD;"> install -y pcre pcre-devel</span></span>
<span class="line"><span style="color:#89DDFF;">yum</span><span style="color:#A6ACCD;"> install -y zlib zlib-devel</span></span>
<span class="line"><span style="color:#89DDFF;">yum</span><span style="color:#A6ACCD;"> install -y openssl openssl-devel</span></span>
<span class="line"></span></code></pre></div><h4 id="_2-下载nginx" tabindex="-1">② 下载nginx <a class="header-anchor" href="#_2-下载nginx" aria-hidden="true">#</a></h4><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#2.下载nginx</span></span>
<span class="line"><span style="color:#89DDFF;">wget</span><span style="color:#A6ACCD;"> http://nginx.org/download/nginx-1.20.0.tar.gz</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#3.解压缩包</span></span>
<span class="line"><span style="color:#89DDFF;">tar</span><span style="color:#A6ACCD;"> -zxvf nginx-1.20.0.tar.gz</span></span>
<span class="line"></span></code></pre></div><h4 id="_3-进入nginx目录安装ssl模块" tabindex="-1">③ 进入nginx目录安装ssl模块 <a class="header-anchor" href="#_3-进入nginx目录安装ssl模块" aria-hidden="true">#</a></h4><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#4.进入到nginx目录下 </span></span>
<span class="line"><span style="color:#89DDFF;">cd</span><span style="color:#A6ACCD;"> nginx-1.20.0/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#5.为了实现https功能需要安装ssl模块 </span></span>
<span class="line"><span style="color:#A6ACCD;">./</span><span style="color:#89DDFF;">configure</span><span style="color:#A6ACCD;"> --with-http_ssl_module</span></span>
<span class="line"></span></code></pre></div><p><img src="https://s2.loli.net/2023/01/09/B1vkjrpbt8Oug64.png" alt="1673239766031.jpg"></p><h4 id="_4-编译安装-默认安装在-usr-local-nginx目录下" tabindex="-1">④ 编译安装 (默认安装在/usr/local/nginx目录下) <a class="header-anchor" href="#_4-编译安装-默认安装在-usr-local-nginx目录下" aria-hidden="true">#</a></h4><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#6.执行编译、安装命令</span></span>
<span class="line"><span style="color:#89DDFF;">make</span><span style="color:#A6ACCD;"> &amp;&amp; make install</span></span>
<span class="line"></span></code></pre></div><h4 id="_5-查看nginx安装相关的文件位置信息" tabindex="-1">⑤ 查看nginx安装相关的文件位置信息 <a class="header-anchor" href="#_5-查看nginx安装相关的文件位置信息" aria-hidden="true">#</a></h4><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">whereis</span><span style="color:#A6ACCD;"> nginx </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#进入路径</span></span>
<span class="line"><span style="color:#89DDFF;">cd</span><span style="color:#A6ACCD;"> /usr/local/nginx/sbin</span></span>
<span class="line"></span></code></pre></div><h4 id="_6-启动nginx命令" tabindex="-1">⑥ 启动nginx命令 <a class="header-anchor" href="#_6-启动nginx命令" aria-hidden="true">#</a></h4><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#7.启动nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">./</span><span style="color:#89DDFF;">nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#立刻停止nginx</span></span>
<span class="line"><span style="color:#89DDFF;">nginx</span><span style="color:#A6ACCD;">  -s stop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#杀死进程</span></span>
<span class="line"><span style="color:#89DDFF;">killall</span><span style="color:#A6ACCD;"> nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看 nginx 的运行进程</span></span>
<span class="line"><span style="color:#89DDFF;">ps</span><span style="color:#A6ACCD;"> -ef | grep nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#重启</span></span>
<span class="line"><span style="color:#A6ACCD;">/</span><span style="color:#89DDFF;">nginx</span><span style="color:#A6ACCD;"> -s reload</span></span>
<span class="line"></span></code></pre></div><p><b>启动成功后输入ip地址或域名即可出现如下页面</b><img src="https://s2.loli.net/2023/01/09/9reVLvBGdjx632w.png" alt="1673241670925.jpg"></p><h4 id="linux下的常用操作命令" tabindex="-1">Linux下的常用操作命令 <a class="header-anchor" href="#linux下的常用操作命令" aria-hidden="true">#</a></h4><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 进入默认站点目录</span></span>
<span class="line"><span style="color:#89DDFF;">cd</span><span style="color:#A6ACCD;"> /usr/share/nginx/</span></span>
<span class="line"><span style="color:#89DDFF;">ll</span></span>
<span class="line"><span style="color:#89DDFF;">cd</span><span style="color:#A6ACCD;"> html/</span></span>
<span class="line"><span style="color:#89DDFF;">ls</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 编辑 index.html 页面</span></span>
<span class="line"><span style="color:#89DDFF;">vim</span><span style="color:#A6ACCD;"> index.html</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 按下 “i” 键编辑即可</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 不保存强制退出</span></span>
<span class="line"><span style="color:#A6ACCD;">:q!</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 保存</span></span>
<span class="line"><span style="color:#A6ACCD;">:</span><span style="color:#89DDFF;">w</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 保存并退出</span></span>
<span class="line"><span style="color:#A6ACCD;">:</span><span style="color:#89DDFF;">wq</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 只查看，不编辑</span></span>
<span class="line"><span style="color:#89DDFF;">cat</span><span style="color:#A6ACCD;"> index.html</span></span>
<span class="line"></span></code></pre></div><h2 id="_2-安装ssl证书" tabindex="-1">2.安装ssl证书 <a class="header-anchor" href="#_2-安装ssl证书" aria-hidden="true">#</a></h2><h4 id="_1-创建cert文件夹" tabindex="-1">1. 创建cert文件夹 <a class="header-anchor" href="#_1-创建cert文件夹" aria-hidden="true">#</a></h4><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>登录服务器，进入nginx目录下，创建存放证书的文件夹cert</p></div><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">cd</span><span style="color:#A6ACCD;"> /usr/local/nginx/conf  </span><span style="color:#676E95;font-style:italic;">#进入Nginx默认安装目录。若修改过，则根据实际调整。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">mkdir</span><span style="color:#A6ACCD;"> cert  </span><span style="color:#676E95;font-style:italic;">#创建证书目录，命名为cert。</span></span>
<span class="line"></span></code></pre></div><h4 id="_2-上传ssl证书" tabindex="-1">2. 上传SSL证书 <a class="header-anchor" href="#_2-上传ssl证书" aria-hidden="true">#</a></h4><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>上传 <strong>(key 、crt结尾的证书)</strong> 至/usr/local/nginx/conf/cert目录下</p></div><p><img src="https://s2.loli.net/2023/01/09/6RYArOzmpVQXbi1.jpg" alt="1673242885199.jpg"></p><h4 id="_3-编辑-nginx-根目录下的nginx-conf文件" tabindex="-1">3. 编辑 nginx 根目录下的<code>nginx.conf</code>文件 <a class="header-anchor" href="#_3-编辑-nginx-根目录下的nginx-conf文件" aria-hidden="true">#</a></h4><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>修改配置文件，设置证书SSL信息</p></div><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 命令行编辑nginx.conf</span></span>
<span class="line"><span style="color:#89DDFF;">vim</span><span style="color:#A6ACCD;"> /usr/local/nginx/conf/nginx.conf</span></span>
<span class="line"></span></code></pre></div><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 修改证书文件及其域名</span></span>
<span class="line"><span style="color:#C792EA;">server</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;">#SSL 默认访问端口号为 443</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;"> listen </span><span style="color:#A6ACCD;">443 ssl</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;">#请填写绑定证书的域名</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;"> server_name </span><span style="color:#A6ACCD;">cloud.tencent.com</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;">#请填写证书文件的相对路径或绝对路径</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;"> ssl_certificate </span><span style="color:#A6ACCD;">cloud.tencent.com_bundle.crt</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;">#请填写私钥文件的相对路径或绝对路径</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;"> ssl_certificate_key </span><span style="color:#A6ACCD;">cloud.tencent.com.key</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;"> ssl_session_timeout </span><span style="color:#A6ACCD;">5m</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;">#请按照以下协议配置</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;"> ssl_protocols </span><span style="color:#A6ACCD;">TLSv1.2 TLSv1.3</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;">#请按照以下套件配置，配置加密套件，写法遵循 openssl 标准。</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;"> ssl_ciphers </span><span style="color:#A6ACCD;">ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;"> ssl_prefer_server_ciphers </span><span style="color:#A6ACCD;">on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">/ </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#676E95;font-style:italic;">#网站主页路径。此路径仅供参考，具体请您按照实际目录操作。</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#676E95;font-style:italic;">#例如，您的网站主页在 Nginx 服务器的 /etc/www 目录下，则请修改 root 后面的 html 为 /etc/www。</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;"> root </span><span style="color:#A6ACCD;">html</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;"> index </span><span style="color:#A6ACCD;"> index.html index.htm</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;"> }</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p><b>验证配置文件是否存在问题</b></p><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">nginx</span><span style="color:#A6ACCD;"> -t </span></span>
<span class="line"></span></code></pre></div><ul><li>若报错，则重新配置或修改问题</li><li>不报错，则忽略，进行下一步</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果想要将域名 http 自动跳转 -----&gt; https</p></div><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">server</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#89DDFF;"> listen </span><span style="color:#A6ACCD;">80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#请填写绑定证书的域名</span></span>
<span class="line"><span style="color:#89DDFF;"> server_name </span><span style="color:#A6ACCD;">cloud.tencent.com</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#把http的域名请求转成https</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">301</span><span style="color:#A6ACCD;"> https://</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">host</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">request_uri; </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>注意: 这里 两个server可以同时一起去编辑 然后再 nginx -t 命令验证错误</p></div><h4 id="若上一步操作正常-接下来只需要重启nginx服务器即可" tabindex="-1">若上一步操作正常， 接下来只需要重启nginx服务器即可 <a class="header-anchor" href="#若上一步操作正常-接下来只需要重启nginx服务器即可" aria-hidden="true">#</a></h4><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">cd</span><span style="color:#A6ACCD;"> /usr/local/nginx/sbin  </span><span style="color:#676E95;font-style:italic;">#进入Nginx服务的可执行目录</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">./</span><span style="color:#89DDFF;">nginx</span><span style="color:#A6ACCD;"> -s reload  </span><span style="color:#676E95;font-style:italic;">#重新载入配置文件</span></span>
<span class="line"></span></code></pre></div><h2 id="偷懒小tips" tabindex="-1">偷懒小tips <a class="header-anchor" href="#偷懒小tips" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>这里上传一份完整的 <code>nginx.conf</code>配置文件 , 如果想要偷懒则可直接ctrl+c 复制到文件里</p></div><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#user  nobody;</span></span>
<span class="line"><span style="color:#89DDFF;">worker_processes </span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#error_log  logs/error.log;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#error_log  logs/error.log  notice;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#error_log  logs/error.log  info;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#pid        logs/nginx.pid;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">events</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> worker_connections </span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1024</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">http</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> include </span><span style="color:#A6ACCD;">      mime.types</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> default_type </span><span style="color:#A6ACCD;"> application/octet-stream</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#access_log  logs/access.log  main;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> sendfile </span><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;"> on;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#tcp_nopush     on;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#keepalive_timeout  0;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> keepalive_timeout </span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">65</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> gzip  on;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">server</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> listen </span><span style="color:#A6ACCD;">      </span><span style="color:#F78C6C;">80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> server_name </span><span style="color:#A6ACCD;"> localhost</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">#charset koi8-r;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">#access_log  logs/host.access.log  main;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">/ </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;"> root </span><span style="color:#A6ACCD;">  /home/cp/www/dist</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;"> index </span><span style="color:#A6ACCD;"> index.html index.htm</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">#error_page  404              /404.html;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># redirect server error pages to the static page /50x.html</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> error_page </span><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">500</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">502</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">503</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">504</span><span style="color:#A6ACCD;">  /50x.html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/50x.html </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;"> root </span><span style="color:#A6ACCD;">  html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># proxy the PHP scripts to Apache listening on 127.0.0.1:80</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">#location ~ \\.php$ {</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">#    proxy_pass   http://127.0.0.1;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">#}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">#location ~ \\.php$ {</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">#    root           html;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">#    fastcgi_pass   127.0.0.1:9000;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">#    fastcgi_index  index.php;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">#    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">#    include        fastcgi_params;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">#}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># deny access to .htaccess files, if Apache&#39;s document root</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># concurs with nginx&#39;s one</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">#location ~ /\\.ht {</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">#    deny  all;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">#}</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">server</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;">#SSL 默认访问端口号为 443</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;"> listen </span><span style="color:#A6ACCD;">443 ssl</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;">#请填写绑定证书的域名</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;"> server_name </span><span style="color:#A6ACCD;">youcoo.online</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;">#请填写证书文件的相对路径或绝对路径</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;"> ssl_certificate </span><span style="color:#A6ACCD;">/usr/local/nginx/conf/cert/youcoo.online_bundle.crt</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;">#请填写私钥文件的相对路径或绝对路径</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;"> ssl_certificate_key </span><span style="color:#A6ACCD;">/usr/local/nginx/conf/cert/youcoo.online.key</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;"> ssl_session_timeout </span><span style="color:#A6ACCD;">5m</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;">#请按照以下协议配置</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;"> ssl_protocols </span><span style="color:#A6ACCD;">TLSv1.2 TLSv1.3</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;">#请按照以下套件配置，配置加密套件，写法遵循 openssl 标准。</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;"> ssl_ciphers </span><span style="color:#A6ACCD;">ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;"> ssl_prefer_server_ciphers </span><span style="color:#A6ACCD;">on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">/ </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#676E95;font-style:italic;">#网站主页路径。此路径仅供参考，具体请您按照实际目录操作。</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#676E95;font-style:italic;">#例如，您的网站主页在 Nginx 服务器的 /etc/www 目录下，则请修改 root 后面的 html 为 /etc/www。</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;"> root </span><span style="color:#A6ACCD;">/home/cp/www/dist</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;"> index </span><span style="color:#A6ACCD;"> index.html index.htm</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#C792EA;">server</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;"> listen </span><span style="color:#A6ACCD;">80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#676E95;font-style:italic;">#请填写绑定证书的域名</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;"> server_name </span><span style="color:#A6ACCD;">youcoo.online</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#676E95;font-style:italic;">#把http的域名请求转成https</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">301</span><span style="color:#A6ACCD;"> https://</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">host</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">request_uri; </span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># another virtual host using mix of IP-, name-, and port-based configuration</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#server {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#    listen       8000;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#    listen       somename:8080;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#    server_name  somename  alias  another.alias;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#    location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#        root   html;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#        index  index.html index.htm;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># HTTPS server</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#server {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#    listen       443 ssl;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#    server_name  localhost;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#    ssl_certificate      cert.pem;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#    ssl_certificate_key  cert.key;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#    ssl_session_cache    shared:SSL:1m;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#    ssl_session_timeout  5m;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#    ssl_ciphers  HIGH:!aNULL:!MD5;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#    ssl_prefer_server_ciphers  on;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#    location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#        root   html;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#        index  index.html index.htm;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,45),e=[o];function t(c,i,r,y,C,A){return n(),a("div",null,e)}const F=s(p,[["render",t]]);export{d as __pageData,F as default};
