/**
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

 

示例 1:

输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

示例 2:

输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

示例 3:

输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

示例 4:

输入: s = ""
输出: 0

 

提示：

    0 <= s.length <= 5 * 104
    s 由英文字母、数字、符号和空格组成
**/

/** 

  解法一:模式匹配(非set数据类型的模式匹配)
**/

var lengthOfLongestSubstring = function(s) {
  var str=s[0];
  var max=1;
  if(s=='') return 0;
  for(var i=1;i<s.length;i++){
    if(str.indexOf(s[i])!=-1){
        str=str.slice(str.indexOf(s[i])+1);
    }
    str+=s[i]; 
    if(max<str.length) max=str.length;
  }
  return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"));