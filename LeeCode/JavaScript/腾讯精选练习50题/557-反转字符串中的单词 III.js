/*
* 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

 

示例：

输入："Let's take LeetCode contest"
输出："s'teL ekat edoCteeL tsetnoc"
 

提示：
在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。

*
* */

function reverseWords(s) {
 var arr=new Array()
 var less=0
 var font=0
 if(s.length===0){
    return s
 }
 for (let i=0;i<=s.length;i++){
    if(s[i]===" "|| i==s.length){
        font=i-1
        //交换值
        for (let k=less,t=font;k<=t;t--,k++){
            arr[t]=s[k]
            arr[k]=s[t]
        }
        if(i!=s.length){
          arr.push(" ")
        }

        less=i+1
    }
 }
 //转换成字符串
 var tmp=""
 for (let j=0;j<arr.length;j++){
    tmp+=arr[j]
 }
return  tmp
}