/*
          给定一个字符串数组 words，找到 length(word[i]) * length(word[j]) 的最大值，并且这两个单词不含有公共字母。你可以认为每                   个单词只包含小写字母。如果不存在这样的两个单词，返回 0。
          示例 1:
            输入: ["abcw","baz","foo","bar","xtfn","abcdef"]
            输出: 16
            解释: 这两个单词为 "abcw", "xtfn"。
          示例 2:
            输入: ["a","ab","abc","d","cd","bcd","abcd"]
            输出: 4
            解释: 这两个单词为 "ab", "cd"。
          示例 3:
            输入: ["a","aa","aaa","aaaa"]
            输出: 0
            解释: 不存在这样的两个单词。
*/

var maxProduct = function(words) {
    var lens=words.length
    var lenarr=new Array()
    for (var i=0;i<lens;i++){
        for(var j=i+1;j<lens;j++){
            /*将完全没有相同元素的两个字符做比较，然后求其长度的乘积*/
            returnnum=conpareString(words[i],words[j])
            if(returnnum!=0){
                lenarr.push(returnnum)
            }
        }
    }
    if (lenarr==false){
        alert("a")
        return 0
    }
    return Math.max.apply(null,lenarr)
};

function conpareString(B,C) {
    var blens=B.length;
    var clens=C.length;
    for (var i=0;i<blens;i++){
        for (var j=0;j<clens;j++){
            if (B[i]==C[j]){
                return  0;
            }
        }
    }
    return blens*clens;
}