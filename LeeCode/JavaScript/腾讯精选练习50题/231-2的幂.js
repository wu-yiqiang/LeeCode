/*
* 给定一个整数，编写一个函数来判断它是否是 2 的幂次方。

示例 1:

输入: 1
输出: true
解释: 20 = 1
示例 2:

输入: 16
输出: true
解释: 24 = 16
示例 3:

输入: 218
输出: false

* */
sPowerOfTwo = function(n) {

    //将该数转换成二进制，再将遍历最高位后面的数，如果后面的数不为0，则不是2的幂次方
    if(n==0){
        return false;
    }
    var value = parseInt(n).toString(2);
    var len=value.length-1;
    var i=1;
    while(i<=len){
        if(value[i]!=0)
        {
            return false;
        }
        i++;
    }
    return true;
}