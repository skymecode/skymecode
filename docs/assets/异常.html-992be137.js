import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-7cfa41e7.js";const t={},p=e(`<h3 id="什么是异常" tabindex="-1"><a class="header-anchor" href="#什么是异常" aria-hidden="true">#</a> 什么是异常</h3><hr><p>异常是一个在程序执行期间发生的事件，它中断了正在执行程序的正常指令流。在程序中，错误可能产生于程序员没有预料到的各种情况或者是超出了程序员可控范围的环境因素，为了保证程序有效地执行，需要对发生的异常进行相应的处理</p><h3 id="异常分类" tabindex="-1"><a class="header-anchor" href="#异常分类" aria-hidden="true">#</a> 异常分类</h3><hr><ol><li><p>Throwable接口</p><ol><li>Error:系统级别的问题,jvm,内存溢出等问题,代码无法解决</li><li>Exception:java.lang包下,异常类,表示程序本身可以处理的问题 <ol><li>RuntimeException:运行时异常,空指针异常,数组越界异常</li><li>非RuntimeException:编译时异常,编译期必须处理</li></ol></li></ol></li></ol><ul><li>编译型异常，在代码运行前一般要用异常处理机制来处理这段代码</li></ul><h4 id="运行时异常" tabindex="-1"><a class="header-anchor" href="#运行时异常" aria-hidden="true">#</a> 运行时异常</h4><ul><li><p>继承自RunTimeException</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>数据越界异常
空指针异常
数学操作异常
类型转换异常
数字转换异常
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h4 id="常见编译时异常" tabindex="-1"><a class="header-anchor" href="#常见编译时异常" aria-hidden="true">#</a> 常见编译时异常</h4><ul><li>必须要处理</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IO类
JDBC类
日志解析
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="异常处理方式" tabindex="-1"><a class="header-anchor" href="#异常处理方式" aria-hidden="true">#</a> 异常处理方式</h3><hr><ol><li><p>try...catch</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">try</span><span class="token punctuation">{</span><span class="token comment">//可以try{}finally{}</span>
    
<span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    
<span class="token punctuation">}</span><span class="token keyword">finally</span><span class="token punctuation">{</span>
    <span class="token comment">//无论捕获得到异常都会执行,try，catch块中的return不会影响</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>throws/throw</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>throw:方法内部表示抛出异常,抛出的什么时候可以控制抛出什么异常----异常处理
throws:声明一个方法有风险的,要抛出异常---代表该方法需要被处理,抛出异常给调用的方法,但更像是标记异常需要被处理
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果抛出的是运行时异常，可以不做处理，但编译时异常一定要处理</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> test1 <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span>  <span class="token punctuation">{</span>

        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;异常了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;继续&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
    <span class="token keyword">public</span>  <span class="token keyword">static</span>  <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">FileNotFoundException</span> <span class="token punctuation">{</span>
        <span class="token class-name">FileOutputStream</span> f<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>默认方式</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>一层层往外抛出，直到程序终止
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="细节" tabindex="-1"><a class="header-anchor" href="#细节" aria-hidden="true">#</a> 细节</h3><ul><li>子类在重写父类方法的时候,子类的方法必须抛出的是与父类相同的异常,或者父类异常的子类</li></ul><h3 id="自定义异常" tabindex="-1"><a class="header-anchor" href="#自定义异常" aria-hidden="true">#</a> 自定义异常</h3><ul><li>希望代码中的问题能够进入异常管理机制的管理,问题就一定要有对应的异常类</li><li>需要自己为自己的问题定义异常类</li></ul><h4 id="自定义异常的实现" tabindex="-1"><a class="header-anchor" href="#自定义异常的实现" aria-hidden="true">#</a> 自定义异常的实现:</h4><ol><li>创建一个类，继承一个异常类,一般情况下编译异常,继承自Exception,运行时异常，继承自RunTimeException</li><li>重写构造器,提供异常信息</li><li>在出现自定义异常的地方,异常抛出</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> 面向对象<span class="token punctuation">.</span>异常<span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> test1 <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">MyException</span> <span class="token punctuation">{</span>
        <span class="token function">connect</span><span class="token punctuation">(</span><span class="token string">&quot;192.168.1.12&quot;</span><span class="token punctuation">,</span><span class="token number">8080</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token punctuation">}</span>
    <span class="token keyword">static</span>  <span class="token keyword">void</span> <span class="token function">connect</span><span class="token punctuation">(</span><span class="token class-name">String</span> ip<span class="token punctuation">,</span><span class="token keyword">int</span> port<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">MyException</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">MyException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">MyException</span> <span class="token keyword">extends</span> <span class="token class-name">Exception</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">MyException</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token string">&quot;服务器端口被占用&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">MyException</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> 面向对象<span class="token punctuation">.</span>异常<span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> test1 <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token function">connect</span><span class="token punctuation">(</span><span class="token string">&quot;192.168.1.12&quot;</span><span class="token punctuation">,</span><span class="token number">8080</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">MyException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">finally</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;继续执行程序&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;程序继续执行中&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
    <span class="token keyword">static</span>  <span class="token keyword">void</span> <span class="token function">connect</span><span class="token punctuation">(</span><span class="token class-name">String</span> ip<span class="token punctuation">,</span><span class="token keyword">int</span> port<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">MyException</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">MyException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">MyException</span> <span class="token keyword">extends</span> <span class="token class-name">Exception</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">MyException</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token string">&quot;服务器端口被占用&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">MyException</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),c=[p];function i(l,o){return s(),a("div",null,c)}const k=n(t,[["render",i],["__file","异常.html.vue"]]);export{k as default};
