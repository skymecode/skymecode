import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as l,c as a,a as i,d as n,b as v,f as r}from"./app-7cfa41e7.js";const c={},u=r(`<h4 id="引出搜索中的dfs" tabindex="-1"><a class="header-anchor" href="#引出搜索中的dfs" aria-hidden="true">#</a> 引出搜索中的DFS</h4><p>DFS本质上也是一直递归调用，比如我们要构造出所有0000到1111的二进制数，我们可以发现它是有规律可寻得:</p><figure><img src="https://skyme-1307417630.cos.ap-chengdu.myqcloud.com/blog/asynccode" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h4 id="由递归引出dfs" tabindex="-1"><a class="header-anchor" href="#由递归引出dfs" aria-hidden="true">#</a> 由递归引出DFS</h4><p>因为DFS基本上都是通过递归实现，但递归和DFS又不一样</p><p>那么什么是DFS呢？</p><p>在 <strong>搜索算法</strong> 中，该词常常指利用递归函数方便地实现暴力枚举的算法，与图论中的 DFS 算法有一定相似之处，但并不完全相同。</p><p>DFS 最显著的特征在于其 <strong>递归****调用自身</strong>。同时与 BFS 类似，DFS 会对其访问过的点打上访问标记，在遍历图时跳过已打过标记的点，以确保 <strong>每个点仅访问一次</strong>。符合以上两条规则的函数，便是广义上的 DFS。</p><h4 id="题目-跳台阶" tabindex="-1"><a class="header-anchor" href="#题目-跳台阶" aria-hidden="true">#</a> 题目：跳台阶</h4><figure><img src="https://skyme-1307417630.cos.ap-chengdu.myqcloud.com/blog/asynccode" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h5 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路：</h5><p>先找出台阶方案数的规律，可以发现是一个斐波那契数列</p><figure><img src="https://skyme-1307417630.cos.ap-chengdu.myqcloud.com/blog/asynccode" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>由此我们可以构造一个递归函数进行，递归通常是由顶向下的，也就是到最后才会满足结束条件</p><p>在这道题我们每次去调用当前数的前两个数就可以了(比如当前为x，那么调用x-1+x-2)</p><h5 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码：</h5><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package DFS;
 

 
import java.util.Scanner;
 

 
public class 跳台阶 {
 
        //通过规律找出跳台阶的方案数是斐波那契数列
 
        public static int fib(int n) {
 
                if(n==1)return 1;
 
                if(n==2) return 2;
 
                return fib(n-1)+fib(n-2);
 
        }
 
        public static void main(String[] args) {
 
                Scanner scanner=new Scanner(System.in);
 
                int n=scanner.nextInt();
 
                System.out.print(fib(n));
 
        }
 

 
}
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三种递归类型模版" tabindex="-1"><a class="header-anchor" href="#三种递归类型模版" aria-hidden="true">#</a> 三种递归类型模版：</h3><figure><img src="https://skyme-1307417630.cos.ap-chengdu.myqcloud.com/blog/asynccode" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h4 id="递归实现指数级枚举" tabindex="-1"><a class="header-anchor" href="#递归实现指数级枚举" aria-hidden="true">#</a> 递归实现指数级枚举：</h4><p>一般是前后不影响，每次选择的方式是固定的</p><figure><img src="https://skyme-1307417630.cos.ap-chengdu.myqcloud.com/blog/asynccode" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h5 id="思路-1" tabindex="-1"><a class="header-anchor" href="#思路-1" aria-hidden="true">#</a> 思路：</h5><p>题目要求我们枚举出所有的情况，实际就是进行枚举，那么我们可以通过递归(DFS）搜索树将所有情况输出</p><figure><img src="https://skyme-1307417630.cos.ap-chengdu.myqcloud.com/blog/asynccode" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h5 id="代码-1" tabindex="-1"><a class="header-anchor" href="#代码-1" aria-hidden="true">#</a> 代码：</h5><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package DFS;
import java.util.Scanner;
import Sousuo.dfs;
public class 递归实现指数型枚举 {
        static int st[]=new int [16];
        static int n;
 
        //选择的方案有2的n次方种
 
        public static void dfs(int x) {
 
                if(x&gt;n) {
 
                        for(int i=1;i&lt;=n;i++) {
 
                                if(st[i]==1)
 
                                System.out.print(i+&quot; &quot;);
 
                        }
 
                        System.out.println();
 
                        return;
 
                }
 
                //选
 
                st[x]=1;
 
                dfs(x+1);
 
                st[x]=0;//恢复状态
 
                //不选
 
                st[x]=2;
 
                dfs(x+1);
 
                st[x]=0;
 
        }
 
public static void main(String[] args) {
 
        Scanner scanner=new Scanner(System.in);
 
        n=scanner.nextInt();
 
        dfs(1);
 
}
 
}
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="递归实现排列型枚举" tabindex="-1"><a class="header-anchor" href="#递归实现排列型枚举" aria-hidden="true">#</a> 递归实现排列型枚举:</h4><figure><img src="https://skyme-1307417630.cos.ap-chengdu.myqcloud.com/blog/asynccode" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h5 id="思路-2" tabindex="-1"><a class="header-anchor" href="#思路-2" aria-hidden="true">#</a> 思路：</h5><p>按位置来选,分为1到n个位置，并且每个位置都会受前一个的影响,题目中要求我们由字典序排序，所以说dfs的时候也要从1进行枚举赋值,当然dfs，这里可以理解为递归当然有退出条件就是当我们枚举的位置大于n的时候退出</p><h5 id="代码-2" tabindex="-1"><a class="header-anchor" href="#代码-2" aria-hidden="true">#</a> 代码：</h5><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package DFS;
 

 
import java.util.Scanner;
 

 
public class 递归实现排列型枚举 {
 
        static int n;
 
        static int arr[];//位置数字，每个位置具体的数字
 
        static  int st[]=new int[11];//因为前一个会影响下一个的选取所以这个数组是是否枚举过的flag
 
        public static void dfs(int x) {
 
                if(x&gt;n) {
 
                for(int i=1;i&lt;=n;i++) {
 
                        System.out.print(arr[i]+&quot; &quot;);
 
                }
 
                System.out.println();
 
                return;
 
                }
 
                for(int i=1;i&lt;=n;i++) {
 
                        if(st[i]==0) {
 
                                st[i]=1;
 
                                arr[x]=i;
 
                                dfs(x+1);
 
                                st[i]=0;
 
                                arr[x]=0;
 
                        }
 
                }
 
                
 
        }
 
        public static void main(String[] args) {
 
                Scanner scanner=new Scanner(System.in);
 
                n=scanner.nextInt();
 
                arr=new int[n+1];
 
                dfs(1);
 
        }
 

 
}
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="递归实现组合型枚举" tabindex="-1"><a class="header-anchor" href="#递归实现组合型枚举" aria-hidden="true">#</a> 递归实现组合型枚举：</h4><figure><img src="https://skyme-1307417630.cos.ap-chengdu.myqcloud.com/blog/asynccode" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h5 id="思路-3" tabindex="-1"><a class="header-anchor" href="#思路-3" aria-hidden="true">#</a> 思路：</h5><p>组合和排列很像，但是二者的区别在于排列是所有的情况，而组合还有限制条件，比如前一个数要比后一个数小</p><figure><img src="https://skyme-1307417630.cos.ap-chengdu.myqcloud.com/blog/asynccode" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>怎么去解决呢，如果按照排列的思路的话，我们可能去选择比我们小的，所以我们增加一个参数，那么就可以满足每次都是从下一个比前一个大的开始了。</p><h5 id="代码-3" tabindex="-1"><a class="header-anchor" href="#代码-3" aria-hidden="true">#</a> 代码：</h5><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package DFS;
 

 
import java.util.Scanner;
 

 
public class 递归实现组合型枚举2 {
 
        static int n,m;
 
        static int st[]=new int[30];
 
        static int arr[];
 
        public static void dfs(int x,int s) {
 
                //加入了start参数，这样每次DFS的时候都是从下一个数开始，满足顺序
 
                if(x&gt;m) {
 
                        for(int i=1;i&lt;=m;i++) {
 
                                System.out.print(arr[i]+&quot; &quot;);
 
                        }
 
                        System.out.println();
 
                        return;
 
                }
 
                for(int i=s;i&lt;=n;i++) {
 
                        st[i]=1;
 
                        arr[x]=i;
 
                        dfs(x+1, i+1);
 
                        //回溯
 
                        arr[x]=0;
 
                        st[i]=0;
 
                }
 
                
 
        
 
        }
 
        
 
        public static void main(String[] args) {
 
                Scanner scanner=new Scanner(System.in);
 
                n=scanner.nextInt();
 
                m=scanner.nextInt();
 
                arr=new int[m+1];
 
                
 
                dfs(1,1);
 
        }
 
}
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="巩固" tabindex="-1"><a class="header-anchor" href="#巩固" aria-hidden="true">#</a> 巩固：</h3><h4 id="选数" tabindex="-1"><a class="header-anchor" href="#选数" aria-hidden="true">#</a> 选数：</h4><figure><img src="https://skyme-1307417630.cos.ap-chengdu.myqcloud.com/blog/asynccode" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h5 id="思路-4" tabindex="-1"><a class="header-anchor" href="#思路-4" aria-hidden="true">#</a> 思路：</h5><p>首先我们看案例，就是从4个给的数里面去选3个数，然后把所有组合（为什么是组合，因为我们不能找重复的！）的和找出是否为质数，这里为什么不会有重复，因为是组合枚举，意味着不会重复，如何判断是否是质数，可以用筛子，也可以用一个函数判断是否是质数</p><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>//判断单个是否为质数
bool isprime(int a){
    for(int i = 2; i * i &lt;= a; i++)
        if(a % i == 0)
            return false;
    return true;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="代码-4" tabindex="-1"><a class="header-anchor" href="#代码-4" aria-hidden="true">#</a> 代码：</h5><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package DFS;
 

 
import java.util.Scanner;
 

 
public class 选数 {
 
        static boolean st[]=new boolean[10000001];
 
        static int a[];
 
        static int k,n;
 
        static int vis[];
 
        static int arr[];
 
        static int cnt=0;
 
        //先用筛子将素数筛出来
 
        //然后进行选择
 
        static public void get(int n) {
 
                st[1]=true;
 
                for(int i=2;i&lt;=n;i++) {
 
                        if(!st[i]) {
 
                                for(int j=i+i;j&lt;=n;j+=i) {
 
                                        st[j]=true;
 
                                }
 
                        }
 
                }
 
        }
 
        static public void dfs(int x,int s) {
 
                if(x&gt;k) {
 
                        int sum=0;
 
                        for(int i=1;i&lt;=k;i++) {
 
                                sum+=arr[i];
 
                        }
 
                        if(!st[sum])cnt++;
 
                        return;
 
                }
 
                for(int i=s;i&lt;=n;i++) {
 
                        if(vis[i]==0) {
 
                                vis[i]=1;
 
                                arr[x]=a[i];
 
                                dfs(x+1,i+1);
 
                                vis[i]=0;
 
                                arr[x]=0;
 
                        }
 
                }
 
        }
 
        public static void main(String[] args) {
 
                get(99999);
 
                Scanner scanner=new Scanner(System.in);
 
                 n=scanner.nextInt();
 
                a=new int[n+1];
 
                
 
                
 
                k=scanner.nextInt();
 
                vis=new int[n+1];
 
                arr=new int[k+1];
 
                for(int i=1;i&lt;=n;i++) {
 
                        a[i]=scanner.nextInt();
 
                }
 
                dfs(1,1);
 
                System.out.println(cnt);
 
        }
 
 
 
}
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="烤鸡" tabindex="-1"><a class="header-anchor" href="#烤鸡" aria-hidden="true">#</a> 烤鸡：</h4><figure><img src="https://skyme-1307417630.cos.ap-chengdu.myqcloud.com/blog/asynccode" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h5 id="思路-5" tabindex="-1"><a class="header-anchor" href="#思路-5" aria-hidden="true">#</a> 思路：</h5><p>这道题很显然的是DFS，因为题目告诉了你有10种配料，而且每种配料可以放1到3克，要求你去找所有搭配方案，很容易想到我们使用dfs进行问题求解,因为我们之前学了三种模版，无非就是这三种的各种变种罢了</p><figure><img src="https://skyme-1307417630.cos.ap-chengdu.myqcloud.com/blog/asynccode" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>很显然有十个位置，每个位置我们去选择配料为多少克</p><p>每个位置我们可以去选择1,2,3，到什么时候退出呢，要么总共的和大于了n，或者位置达到了10并且要么等于n,这个时候输出即可</p><p>每次的选择都不会受前一个位置的影响，说明是指数枚举</p><h5 id="代码-5" tabindex="-1"><a class="header-anchor" href="#代码-5" aria-hidden="true">#</a> 代码：</h5><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package DFS;

import java.util.Scanner;

import Sousuo.dfs;

public class 烤鸡 {
        static int st[]=new int[11];
        static int arr[]=new int[11];
        static int n;
        static int cnt=0;
        static int ans[][]=new int[59055][11];
        public static void dfs(int x,int sum) {
                if(sum&gt;n)return;
                if(x&gt;10) {
                        if(sum==n) {        
        for(int i=1;i&lt;=10;i++) {
                        ans[cnt][i]=arr[i];
                        }
                        cnt++;
                        }
                return;
                }
                
                        
                                //选择1
                                st[x]=1;
                                arr[x]=1;
                                dfs(x+1,sum+1);
                                st[x]=0;
                                arr[x]=0;
                                //选择2
                                st[x]=1;
                                arr[x]=2;
                                dfs(x+1,sum+2);
                                st[x]=0;
                                arr[x]=0;
                                
                                //选择3
                                st[x]=1;
                                arr[x]=3;
                                dfs(x+1,sum+3);
                                st[x]=0;
                                arr[x]=0;
                                
                        
                
        }
        public static void main(String[] args) {
                Scanner scanner=new Scanner(System.in);
                n=scanner.nextInt();
                dfs(1,0);
                System.out.println(cnt);
                for(int i=0;i&lt;cnt;i++) {
                        for(int j=1;j&lt;=10;j++) {
                                System.out.print(ans[i][j]+&quot; &quot;);
                        }
                        System.out.println();
                }
        }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="火星人" tabindex="-1"><a class="header-anchor" href="#火星人" aria-hidden="true">#</a> 火星人：</h4>`,60),m={href:"https://www.luogu.com.cn/problem/P1088",target:"_blank",rel:"noopener noreferrer"},b=i("h5",{id:"思路-6",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#思路-6","aria-hidden":"true"},"#"),n(" 思路：")],-1),t=i("p",null,"很显然这道题是全排列",-1);function o(g,h){const e=d("ExternalLinkIcon");return l(),a("div",null,[u,i("p",null,[i("a",m,[n("https://www.luogu.com.cn/problem/P1088"),v(e)])]),b,t])}const x=s(c,[["render",o],["__file","1.html.vue"]]);export{x as default};
