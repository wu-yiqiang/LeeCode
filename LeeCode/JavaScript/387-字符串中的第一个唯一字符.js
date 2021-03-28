/*
* 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

 

示例：

s = "leetcode"
返回 0

s = "loveleetcode"
返回 2
 

提示：你可以假定该字符串只包含小写字母。
* */
//Frist Vsersin:TimeOut
function firstUniqChar(s) {
     if(s.length==0) return -1
    if(s.length==1) return 0
    //设置状态位
    for(let i=0;i<s.length;i++){
        let flags=0
        for (let j=0;j<s.length;j++){
              if(s[i]==s[j]){
                flags++
              }

        }
        if(flags<=1){
          return i
        }
        if(flags>=2){
             continue
        }
    }
return  -1
}

//Second Version:
function firstUniqChar(s) {
  if(s.length==0) return -1
  if(s.length==1) return 0
  //设置状态位
  var comarr=new Array()
  var obj=new Object()
  obj.name=s[0]
  obj.count=1
  obj.locate=0
  comarr.push(obj)
  for(let i=1;i<s.length;i++){
      for(let j=0;j<comarr.length;j++){
        if(s[i]==comarr[j].name){
            comarr[j].count++
            comarr[j].locate=i
            break
        }
        if(j===comarr.length-1){
          comarr.push({name:s[i],count:1,locate:i})
          break
        }
    }
  }
  //遍历数组
   for (let t=0;t<comarr.length;t++){
     if (comarr[t].count==1){
       return comarr[t].locate
     }
   }
return  -1
}