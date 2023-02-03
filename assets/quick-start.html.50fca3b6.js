import{_ as t,r as o,o as i,c,b as s,d as e,e as l,a as n}from"./app.7c966131.js";const d={},r=n(`<h1 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手" aria-hidden="true">#</a> 快速上手</h1><ol><li>安装</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> init
<span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> vuepress@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>添加脚本</li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),u={start:"3"},p=s("code",null,"vue",-1),v={href:"https://erresen.github.io/vue/js/git/2020/07/08/vue-js-gitigore.html",target:"_blank",rel:"noopener noreferrer"},m=s("code",null,".gitignore",-1),_=s("code",null,"VuePress",-1),h=n(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># VuePress
.temp
.cache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li><p>创建文档目录 <code>/docs</code> 用于存放文档内容，此为 <code>VuePress</code> 文档根目录</p></li><li><p>创建并提交第一篇文档 <code>/docs/README.md</code>，由于直接存放到了文档根目录下，对应路由为 <code>/</code></p></li></ol>`,2);function b(k,g){const a=o("ExternalLinkIcon");return i(),c("div",null,[r,s("ol",u,[s("li",null,[e("用 "),p,e(" 的 "),s("a",v,[e("模板"),l(a)]),e(" 添加一个 "),m,e(" 文件，额外为 "),_,e(" 添加以下内容：")])]),h])}const f=t(d,[["render",b],["__file","quick-start.html.vue"]]);export{f as default};
