/*
* 写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项。斐波那契数列的定义如下：

F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。
答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
示例 1：
    输入：n = 2
    输出：1


示例 2：
    输入：n = 5
    输出：5
提示：
0 <= n <= 100

* */
//方法一：超出时间限制
function fib(n) {
    if(n==1||n==2){
        return 1
    }
    return fib(n-1) %1000000007 +fib(n-2) %1000000007
}


//方法二:使用数组
function fib(n) {
    if(n==1||n==2){
        return 1
    }
    if(n==0){
        return 0
    }
    var sum=0
    var arr=new Array()
    arr[0]=1
    arr[1]=1
    for (let i=1;i<n-1;i++){
       sum=(arr[0]+arr[1])%1000000007
       arr[1]=arr[0]
       arr[0]=sum
    }
 return  arr[0]
}

