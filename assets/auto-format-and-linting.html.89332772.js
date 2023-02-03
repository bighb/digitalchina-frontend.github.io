import{_ as t,r as i,o,c as l,b as a,d as n,e as r,a as s}from"./app.7c966131.js";const d={},c=s(`<h1 id="自动格式化和-linting" tabindex="-1"><a class="header-anchor" href="#自动格式化和-linting" aria-hidden="true">#</a> 自动格式化和 Linting</h1><h2 id="自动格式化" tabindex="-1"><a class="header-anchor" href="#自动格式化" aria-hidden="true">#</a> 自动格式化</h2><p>使用 Git hook 中的 <code>pre-commit</code> hook 可以在提交更改之前运行脚本，使用 Prettier 等代码格式化程序可以确保代码格式一致并遵循项目的样式指南。</p><p>Husky 是一个用于在 Git 项目中管理 hooks 的工具，它可以帮助你更方便地管理和使用 Git hook，并且可以让你的项目更加可维护。</p><p>使用 lint-staged 可以在提交代码之前仅对已修改文件运行 linting 或格式化工具，相比于全量的自动格式化，具有更快的提交速度和更好的可维护性，</p><p>下面介绍如何使用 Git hook 在提交前自动格式化暂存的 git 文件：</p><h3 id="_1-安装-prettier" tabindex="-1"><a class="header-anchor" href="#_1-安装-prettier" aria-hidden="true">#</a> 1. 安装 Prettier</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">--dev</span> <span class="token parameter variable">--exact</span> prettier
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-安装并配置-lint-staged" tabindex="-1"><a class="header-anchor" href="#_2-安装并配置-lint-staged" aria-hidden="true">#</a> 2. 安装并配置 lint-staged</h3><ul><li>安装 lint-staged</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev lint-staged
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>配置 <code>package.json</code></li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;lint-staged&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;*.{js,md,css,scss,yaml,yml}&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;prettier --write&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-添加-pre-commit-hook" tabindex="-1"><a class="header-anchor" href="#_3-添加-pre-commit-hook" aria-hidden="true">#</a> 3. 添加 pre-commit hook</h3><ul><li>安装 Husky</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> husky --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>初始化</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> pkg <span class="token builtin class-name">set</span> <span class="token assign-left variable">scripts.prepare</span><span class="token operator">=</span><span class="token string">&quot;husky install&quot;</span>
<span class="token function">npm</span> run prepare
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>添加 pre-commit hook</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npx husky <span class="token function">add</span> .husky/pre-commit <span class="token string">&quot;npx --no lint-staged&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-配置-editorconfig-和-prettierrc-js" tabindex="-1"><a class="header-anchor" href="#_4-配置-editorconfig-和-prettierrc-js" aria-hidden="true">#</a> 4. 配置 <code>.editorconfig</code> 和 <code>.prettierrc.js</code></h3><h4 id="配置-editorconfig" tabindex="-1"><a class="header-anchor" href="#配置-editorconfig" aria-hidden="true">#</a> 配置 EditorConfig</h4><ul><li>EditorConfig 是用来定义代码编写风格的配置文件。它可以在不同的编辑器和 IDE 之间保持一致的代码风格，从而提高代码的可读性和可维护性。</li><li>创建 <code>.editorconfig</code> 文件，并输入以下内容：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># EditorConfig is awesome: https://EditorConfig.org

# top-most EditorConfig file
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>常见规则</li></ul><table><thead><tr><th>规则</th><th>说明</th></tr></thead><tbody><tr><td>indent_style</td><td>指定缩进使用的方式</td></tr><tr><td>indent_size</td><td>指定缩进使用的空格数或制表符数</td></tr><tr><td>end_of_line</td><td>指定行末的换行符</td></tr><tr><td>charset</td><td>指定文件的字符编码</td></tr><tr><td>trim_trailing_whitespace</td><td>指定是否在保存文件时删除行尾的空白字符</td></tr><tr><td>insert_final_newline</td><td>指定是否在文件末尾插入一个空行</td></tr></tbody></table><h4 id="配置-prettierrc" tabindex="-1"><a class="header-anchor" href="#配置-prettierrc" aria-hidden="true">#</a> 配置 .prettierrc</h4><ul><li>创建 <code>.prettierrc.js</code> 文件，并输入以下内容：</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">endOfLine</span><span class="token operator">:</span> <span class="token string">&#39;lf&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">singleQuote</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">tabWidth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token literal-property property">trailingComma</span><span class="token operator">:</span> <span class="token string">&#39;es5&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">printWidth</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="commitlint" tabindex="-1"><a class="header-anchor" href="#commitlint" aria-hidden="true">#</a> commitlint</h2><p>Commitlint 是一个用于检查 Git 提交信息的工具，它可以帮助你强制执行提交信息的格式规范，比如标题长度、标签使用等。</p>`,31),p=a("code",null,"EMOJI-LOG",-1),u=a("code",null,"commitlint-config-emoji-log",-1),m=a("code",null,"EMOJI-LOG",-1),h={href:"https://github.com/ahmadawais/Emoji-Log",target:"_blank",rel:"noopener noreferrer"},v=s(`<h3 id="_1-安装-commitlint" tabindex="-1"><a class="header-anchor" href="#_1-安装-commitlint" aria-hidden="true">#</a> 1. 安装 commitlint</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> @commitlint/cli commitlint-config-emoji-log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-配置-commitlint" tabindex="-1"><a class="header-anchor" href="#_2-配置-commitlint" aria-hidden="true">#</a> 2. 配置 commitlint</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;commitlint&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;emoji-log&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-添加-commit-msg-hook" tabindex="-1"><a class="header-anchor" href="#_3-添加-commit-msg-hook" aria-hidden="true">#</a> 3. 添加 commit-msg hook</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npx husky <span class="token function">add</span> .husky/commit-msg <span class="token string">&#39;npx --no -- commitlint --edit $1&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6);function b(g,k){const e=i("ExternalLinkIcon");return o(),l("div",null,[c,a("p",null,[p,n(" 是一个 git commit 标准，"),u,n(" 是一组适用于 "),m,n(" 标准的校验规则，详情参考 "),a("a",h,[n("EMOJI-LOG"),r(e)]),n("。")]),v])}const _=t(d,[["render",b],["__file","auto-format-and-linting.html.vue"]]);export{_ as default};
