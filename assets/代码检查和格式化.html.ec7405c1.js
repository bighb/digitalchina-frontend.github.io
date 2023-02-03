import{_ as r,r as d,o as a,c,b as e,d as t,e as s,a as n}from"./app.7c966131.js";const l={},o=n('<h1 id="代码检查工具" tabindex="-1"><a class="header-anchor" href="#代码检查工具" aria-hidden="true">#</a> 代码检查工具</h1><p>前端开发中比较常用的 eslint 和 prettier 都是代码检查工具，本文会讲述如何通过它们进行代码格式化</p><h2 id="eslint" tabindex="-1"><a class="header-anchor" href="#eslint" aria-hidden="true">#</a> ESLint</h2><p>下面开始介绍如何集成 eslint 到项目中。</p><p>首先在 vscode 中安装 eslint 插件。</p><p>项目根路径下执行<code>npm install -D eslint</code>添加 eslint 依赖。</p><p>依赖添加成功后，还是在项目根路径下执行<code>.\\node_modules\\.bin\\eslint --init</code>进行 eslint 初始化操作，命令行中会问一些问题，根据项目情况选择即可，执行情况如下图： <img src="https://img-blog.csdnimg.cn/60c1552474e244e7851ef616cfe23ebd.png" alt="在这里插入图片描述"></p>',7),p={href:"https://eslint.bootcss.com/docs/rules/",target:"_blank",rel:"noopener noreferrer"},u=e("img",{src:"https://img-blog.csdnimg.cn/ec2bcd4c9e2d42a19dd6fe2d50cdf64a.png",alt:"在这里插入图片描述"},null,-1),m=n(`<p>.eslintrc.js 文件生成之后打开文件，会出现红色的波浪线表明此处代码不符合规则如下图。再看 vscode PROBLEMS 面板，也对不规范代码的位置、原因进行了说明。<img src="https://img-blog.csdnimg.cn/ac5cb5defba743babdcdf355f73de90a.png" alt="在这里插入图片描述"></p><p>到这里为止，只是实现了对代码规范的检查。那么如何实现对不规范代码的自动格式化呢？</p><p><code>eslint.autoFixOnSave</code>配置可以在保存时格式化代码，但是目前该配置被废弃。现在可以通过在项目或者全局级别的 settings.json 文件中添加以下配置，在保存时就会自动格式化代码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;editor.codeActionsOnSave&quot;: {
		&quot;source.fixAll.eslint&quot;: true
	},
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="prettier" tabindex="-1"><a class="header-anchor" href="#prettier" aria-hidden="true">#</a> Prettier</h2><p>prettier 格式化代码和 eslint 类似，同样先在 vscode 中安装 prettier 插件，然后<code>ctrl + shift + p</code>，输入 prettier，选择下图红框中的选项之后，根据提示选择项目根目录作为 prettier 配置文件所在位置。 <img src="https://img-blog.csdnimg.cn/5d41d455dbb94a8ab311875c2b3f31b2.png" alt="在这里插入图片描述"></p>`,6),b=e("code",null,".prettierrc.js",-1),h={href:"https://www.prettier.cn/docs/configuration.html",target:"_blank",rel:"noopener noreferrer"},v=e("img",{src:"https://img-blog.csdnimg.cn/ebdc8215f453402e9db04f4c589badee.png",alt:"在这里插入图片描述"},null,-1),_=n(`<p>以上就完成了 prettier 的 setup 和配置，最后在 settings.json 文件中添加以下配置, 保存文件时就会自动格式化。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
	&quot;[javascript]&quot;: {
		&quot;editor.formatOnSave&quot;: true,
		&quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function g(f,x){const i=d("ExternalLinkIcon");return a(),c("div",null,[o,e("p",null,[t("eslint 初始化完成之后，会生成一个.eslintrc.js 文件如下图(根据执行命令期间选择，可能是 yaml 或者 json)。rules 部分就是配置的代码需要遵守的规则，比如字符串必须是单引号，必须添加分号等等。更多 rule 请参考: "),e("a",p,[t("eslint rule"),s(i)]),u]),m,e("p",null,[t("然后也会生成一个"),b,t("文件如下图，配置了部分代码规范。更多规则请参考: "),e("a",h,[t("prettier 配置规则"),s(i)]),v]),_])}const j=r(l,[["render",g],["__file","代码检查和格式化.html.vue"]]);export{j as default};
