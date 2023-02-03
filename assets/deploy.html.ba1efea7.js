import{_ as t,r as l,o as c,c as d,b as n,d as s,e,a as i}from"./app.7c966131.js";const o={},r=n("h1",{id:"部署",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#部署","aria-hidden":"true"},"#"),s(" 部署")],-1),p=n("h2",{id:"配置-github-pages",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置-github-pages","aria-hidden":"true"},"#"),s(" 配置 GitHub Pages")],-1),u=n("ol",null,[n("li",null,"访问 GitHub 仓库，点击 Settings 栏；"),n("li",null,"在 Pages 栏目下，使用 Deploy from a branch 方式，设置 master 分支为部署分支。")],-1),m=n("p",null,"配置完成后，GitHub 会使用最新的 master 分支源代码作为 GitHub Page 的静态资源，并在 master 分支更新时自动触发 Action 进行部署。",-1),v={href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"},b=i(`<h2 id="构建静态文件" tabindex="-1"><a class="header-anchor" href="#构建静态文件" aria-hidden="true">#</a> 构建静态文件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> docs:build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="推送静态文件至-master-分支" tabindex="-1"><a class="header-anchor" href="#推送静态文件至-master-分支" aria-hidden="true">#</a> 推送静态文件至 master 分支</h2><ul><li>初始化 git submodule</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> docs/.vuepress/dist
<span class="token function">git</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>推送代码</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;deploy&#39;</span>
<span class="token function">git</span> push <span class="token parameter variable">-f</span> git@github.com:digitalchina-frontend/digitalchina-frontend.github.io.git master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),h={href:"https://github.com/digitalchina-frontend/digitalchina-frontend.github.io/actions",target:"_blank",rel:"noopener noreferrer"},g=i(`<h2 id="使用脚本部署" tabindex="-1"><a class="header-anchor" href="#使用脚本部署" aria-hidden="true">#</a> 使用脚本部署</h2><ul><li>创建文件 <code>deploy.sh</code> 并输入以下内容：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token comment">#!/usr/bin/env sh</span>

<span class="token comment"># 确保脚本抛出遇到的错误</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>

<span class="token comment"># 生成静态文件</span>
<span class="token function">npm</span> run docs:build

<span class="token comment"># 进入生成的文件夹</span>
<span class="token builtin class-name">cd</span> docs/.vuepress/dist

<span class="token comment"># 如果是发布到自定义域名</span>
<span class="token comment"># echo &#39;www.example.com&#39; &gt; CNAME</span>

<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;deploy&#39;</span>

<span class="token comment"># 如果发布到 https://&lt;USERNAME&gt;.github.io</span>
<span class="token function">git</span> push <span class="token parameter variable">-f</span> git@github.com:digitalchina-frontend/digitalchina-frontend.github.io.git master

<span class="token comment"># 如果发布到 https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;</span>
<span class="token comment"># git push -f git@github.com:&lt;USERNAME&gt;/&lt;REPO&gt;.git master:gh-pages</span>

<span class="token builtin class-name">cd</span> -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>添加至 <code>package.json</code></li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;deploy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sh ./deploy.sh&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function k(f,_){const a=l("ExternalLinkIcon");return c(),d("div",null,[r,p,u,m,n("p",null,[s("完整的 GitHub Page 配置教程可以参考："),n("a",v,[s("GitHub Pages"),e(a)]),s("。")]),b,n("p",null,[s("访问 "),n("a",h,[s("GitHub Actions"),e(a)]),s(" 以查看部署进度。")]),g])}const E=t(o,[["render",k],["__file","deploy.html.vue"]]);export{E as default};
