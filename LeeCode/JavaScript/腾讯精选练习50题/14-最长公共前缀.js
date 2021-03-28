/*
* 编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

输入: ["flower","flow","flight"]
输出: "fl"
示例 2:

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
说明:

所有输入只包含小写字母 a-z 。

* 
* */

function longestCommonPrefix(strs) {
    var str
    if(strs.length==0){
        str=""
        return str
    }
    if (strs.length==1){
        console.log(strs[0])
        return strs[0]
    }
    str=strs[0]
    for (let i = 1; i <strs.length ; i++) {
        for (let k = 0, j = 0; k < strs[i].length, j < str.length; k++, j++) {
            if (strs[i][k] != str[j]) {
                //截取后续的字段
                var arr=""
                for (let s = 0; s < k; s++) {
                    arr+=str[s]
                }
                str = arr
            }
        }
    }

    return str
}