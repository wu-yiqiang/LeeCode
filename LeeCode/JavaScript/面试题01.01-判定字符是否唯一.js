/* 实现一个算法，确定一个字符串 s 的所有字符是否全都不同。

    示例 1：
        输入: s = "leetcode"
        输出: false

    示例 2：
        输入: s = "abc"
        输出: true

    限制：
        1. 0 <= len(s) <= 100
        2. 如果你不使用额外的数据结构，会很加分。
 */
function isUnique() {
    
    var lens=astr.length;
    for(var i=0;i<lens;i++){
        for(var j=i+1;j<lens;j++){
            if(astr[i]==astr[j]){
                return false;
            }
        }
    }
    return true;
}