import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as l,f as a}from"./app-7cfa41e7.js";const n={},d=a(`<h2 id="file类的使用" tabindex="-1"><a class="header-anchor" href="#file类的使用" aria-hidden="true">#</a> File类的使用</h2><ul><li>程序端和文件端的输入和输出</li></ul><h3 id="file类的概念" tabindex="-1"><a class="header-anchor" href="#file类的概念" aria-hidden="true">#</a> File类的概念</h3><p>File类：代表操作系统的文件(具体的文件本身，文件目录)封装了文件相关的操作方法</p><h3 id="file类的构造函数和对象创建" tabindex="-1"><a class="header-anchor" href="#file类的构造函数和对象创建" aria-hidden="true">#</a> File类的构造函数和对象创建</h3><p>File类既是文件，又是目录</p><p>File类有三种常用的创建对象的方式</p><p>File.separator分隔符</p><p>相对路径和绝对路径的概念</p><h3 id="file类的常见方法" tabindex="-1"><a class="header-anchor" href="#file类的常见方法" aria-hidden="true">#</a> File类的常见方法</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>setReadabble
setWriteable
Exists
canRead
canWrite
getAbsolutePath
getPath
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除文件夹的时候一定是空文件夹</p><h3 id="文件遍历" tabindex="-1"><a class="header-anchor" href="#文件遍历" aria-hidden="true">#</a> 文件遍历</h3><ul><li>得到的是一级文件,文件和文件目录</li><li>如果不是目录的时候或不存在的时候，得到的是null</li><li>隐藏文件夹也能返回</li><li>文件夹是空的,不返回null,返回长度为0的数组</li><li>没有访问权限,返回null</li></ul><h3 id="文件过滤" tabindex="-1"><a class="header-anchor" href="#文件过滤" aria-hidden="true">#</a> 文件过滤</h3><ul><li>返回某个目录下的某个文件，希望返回的文件是特点的</li></ul><p>FileNameFilter</p><h3 id="装饰者模式" tabindex="-1"><a class="header-anchor" href="#装饰者模式" aria-hidden="true">#</a> 装饰者模式</h3><ul><li>被装饰者和装饰者有相同的超类</li><li>装饰者有自己的一个超类</li><li>装饰者和被装饰者之间通过构造函数实现装配，装饰者在被装饰的行为之前或之后，加上自己的行为，实现装饰的效果</li></ul><h3 id="装饰者模式和io的关系" tabindex="-1"><a class="header-anchor" href="#装饰者模式和io的关系" aria-hidden="true">#</a> 装饰者模式和IO的关系</h3><h3 id="io的体系" tabindex="-1"><a class="header-anchor" href="#io的体系" aria-hidden="true">#</a> IO的体系</h3><figure><img src="https://skyme-1307417630.cos.ap-chengdu.myqcloud.com/blog/image-20230519172431302.png" alt="image-20230519172431302" tabindex="0" loading="lazy"><figcaption>image-20230519172431302</figcaption></figure><ul><li>针对文件操作的节点流--管道，以下四个类进行文件操作的时候，至少有一个用于建立管道</li><li>分别对不同的管道进行装饰</li><li><img src="https://skyme-1307417630.cos.ap-chengdu.myqcloud.com/blog/image-20230519172504089.png" alt="image-20230519172504089" tabindex="0" loading="lazy"><figcaption>image-20230519172504089</figcaption></li></ul><h3 id="字节流和字符流" tabindex="-1"><a class="header-anchor" href="#字节流和字符流" aria-hidden="true">#</a> 字节流和字符流</h3><ol><li>建立管道,创立节点流对象，传入文件端地址</li><li>装饰管道</li><li>在管道中传输数据，管道的方法调用</li><li>数据传输完成，关闭管道</li></ol><h4 id="fileinputstream" tabindex="-1"><a class="header-anchor" href="#fileinputstream" aria-hidden="true">#</a> FileInputStream</h4><ul><li>字节输入流：从文件端读取数据到程序</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class test1 {
    public static void main(String[] args) throws IOException {
        File file=new File(&quot;test1.txt&quot;);
        System.out.println(file.getAbsoluteFile());
        if(!file.exists()){
            boolean newFile = file.createNewFile();
            System.out.println(newFile);
        }
        FileInputStream fileInputStream=new FileInputStream(file);
        int len;
        while ((len=fileInputStream.read())!=-1){
            System.out.println(len);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="fileoutputstream" tabindex="-1"><a class="header-anchor" href="#fileoutputstream" aria-hidden="true">#</a> FileOutputStream</h4><p>字节输出流:从程序端将数据写到文件端</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class test1 {
    public static void main(String[] args) throws IOException {
        File file=new File(&quot;test1.txt&quot;);
        System.out.println(file.getAbsoluteFile());
        if(!file.exists()){
            boolean newFile = file.createNewFile();
            System.out.println(newFile);
        }
        FileInputStream fileInputStream=new FileInputStream(file);
        int len;
        while ((len=fileInputStream.read())!=-1){
            System.out.println(len);
        }
        //先建立管道
        FileOutputStream fos=new FileOutputStream(&quot;test.txt&quot;);
        byte[] b=new byte[10];
        byte start=97;
        for(int i=0;i&lt;b.length;i++){
            b[i]=start;
            start++;
        }
        fos.write(b);
        fos.flush();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="filereader" tabindex="-1"><a class="header-anchor" href="#filereader" aria-hidden="true">#</a> FileReader</h4><p>读取文本的时候，字节流会出现中文乱码，也可能内存溢出</p><p>文本是中文的时候，更适合字符流，以单个字符为单位读取</p><h4 id="filewrite" tabindex="-1"><a class="header-anchor" href="#filewrite" aria-hidden="true">#</a> FileWrite</h4><h3 id="字节流和字符流区别" tabindex="-1"><a class="header-anchor" href="#字节流和字符流区别" aria-hidden="true">#</a> 字节流和字符流区别</h3><p>字节流适用于一切文件的读取</p><p>字符流适用于文本读写(中文)</p>`,38),s=[d];function r(t,u){return i(),l("div",null,s)}const h=e(n,[["render",r],["__file","IO上.html.vue"]]);export{h as default};
