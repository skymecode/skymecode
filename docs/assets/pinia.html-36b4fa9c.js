import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as i,c,a as s,d as n,b as t,f as e}from"./app-7cfa41e7.js";const l={},u=e('<h1 id="pinia" tabindex="-1"><a class="header-anchor" href="#pinia" aria-hidden="true">#</a> Pinia</h1><h2 id="pinia-是什么" tabindex="-1"><a class="header-anchor" href="#pinia-是什么" aria-hidden="true">#</a> Pinia 是什么？</h2><hr><p>Pinia 是 Vue 的专属状态管理库，它允许你跨组件或页面共享状态。如果你熟悉组合式 API 的话，你可能会认为可以通过一行简单的 <code>export const state = reactive({})</code> 来共享一个全局状态。对于单页应用来说确实可以，但如果应用在服务器端渲染，这可能会使你的应用暴露出一些安全漏洞。 而如果使用 Pinia，即使在小型单页应用中，你也可以获得如下功能：</p><ul><li>Devtools 支持 <ul><li>追踪 actions、mutations 的时间线</li><li>在组件中展示它们所用到的 Store</li><li>让调试更容易的 Time travel</li></ul></li><li>热更新 <ul><li>不必重载页面即可修改 Store</li><li>开发时可保持当前的 State</li></ul></li><li>插件：可通过插件扩展 Pinia 功能</li><li>为 JS 开发者提供适当的 TypeScript 支持以及<strong>自动补全</strong>功能。</li><li>支持服务端渲染</li></ul><hr><h3 id="store是什么" tabindex="-1"><a class="header-anchor" href="#store是什么" aria-hidden="true">#</a> Store是什么？</h3>',7),r=s("strong",null,"它承载着全局状态",-1),d=s("strong",null,"三个概念",-1),k={href:"https://pinia.vuejs.org/zh/core-concepts/state.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://pinia.vuejs.org/zh/core-concepts/getters.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://pinia.vuejs.org/zh/core-concepts/actions.html",target:"_blank",rel:"noopener noreferrer"},b=s("code",null,"data",-1),g=s("code",null,"computed",-1),h=s("code",null,"methods",-1),f=e(`<h3 id="应该使用的地方" tabindex="-1"><a class="header-anchor" href="#应该使用的地方" aria-hidden="true">#</a> 应该使用的地方</h3><p>一个 Store 应该包含可以在整个应用中访问的数据。这包括在许多地方使用的数据，例如显示在导航栏中的用户信息，以及需要通过页面保存的数据，例如一个非常复杂的多步骤表单。</p><h2 id="定义store" tabindex="-1"><a class="header-anchor" href="#定义store" aria-hidden="true">#</a> 定义Store</h2><p>简单的定义:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span>

<span class="token comment">// 你可以对 \`defineStore()\` 的返回值进行任意命名，但最好使用 store 的名字，同时以 \`use\` 开头且以 \`Store\` 结尾。(比如 \`useUserStore\`，\`useCartStore\`，\`useProductStore\`)</span>
<span class="token comment">// 第一个参数是你的应用中 Store 的唯一 ID。</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> useAlertsStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&#39;alerts&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// 其他配置...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也和Vue的选项式API类似,传入state、actions、getters属性的Option对象</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> useCounterStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&#39;counter&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">double</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>count <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以认为 <code>state</code> 是 store 的数据 (<code>data</code>)，<code>getters</code> 是 store 的计算属性 (<code>computed</code>)，而 <code>actions</code> 则是方法 (<code>methods</code>)</p><h3 id="关于如何解决vue2报错" tabindex="-1"><a class="header-anchor" href="#关于如何解决vue2报错" aria-hidden="true">#</a> 关于如何解决vue2报错</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Uncaught Error: 【🍍】: getActivePinia was called with no active Pinia. Did you forget to install pinia?

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这个问题困扰了很久最终解决就是在export里面调用就好了,好像是因为vue2的原因？</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    hello
{{store.count}}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>changeState<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>改变数据<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
name:
{{store.name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span>main<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../stores/hello&#39;</span>
 
  
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;HelloWorld&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>

    <span class="token literal-property property">msg</span><span class="token operator">:</span> 
    String
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    
   <span class="token keyword">return</span><span class="token punctuation">{</span>
    <span class="token literal-property property">store</span><span class="token operator">:</span><span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>


   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">changeState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>store<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
<span class="token punctuation">}</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
../stores/hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function _(y,x){const a=o("ExternalLinkIcon");return i(),c("div",null,[u,s("p",null,[n("Store (如 Pinia) 是一个保存状态和业务逻辑的实体，它并不与你的组件树绑定。换句话说，"),r,n("。它有点像一个永远存在的组件，每个组件都可以读取和写入它。它有"),d,n("，"),s("a",k,[n("state"),t(a)]),n("、"),s("a",v,[n("getter"),t(a)]),n(" 和 "),s("a",m,[n("action"),t(a)]),n("，我们可以假设这些概念相当于组件中的 "),b,n("、 "),g,n(" 和 "),h]),f])}const P=p(l,[["render",_],["__file","pinia.html.vue"]]);export{P as default};
