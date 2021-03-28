/*
* 字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。
    示例 1：
        输入: s = "abcdefg", k = 2
        输出: "cdefgab"
    示例 2：
        输入: s = "lrloseumgh", k = 6
        输出: "umghlrlose"
      
    限制：
        1 <= k < s.length <= 10000

* */
function reverseLeftWord(s,n) {
    /*将前n个字符串一次追加到字符串末尾*/
    /*i做计数作用*/
    for(var i=1;i<=n;i++){
        /*将前面的数据追加到末尾*/
        s=s+s[0]
        /*    s.concat(s[0]);*/
        /*将前面的数据删除*/
        s=s.substr(1);
    }
return s;
}