/*
* 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

示例 1:

输入: 123
输出: 321
* 
* 
* 
示例 2:
输入: -123
输出: -321
示例 3:

输入: 120
输出: 21
注意:

假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

* 
* 
* */


function  reverse(x) {
         var str=x.toString()
                var len=str.length-1
                var arr=new Array()
                if(str[0]=="-"){
                    arr[0]="-"
                    for(let i=1,j=len;i<=j;i++,j--){
                        arr[j]=str[i]
                        arr[i]=str[j]

                    }
                     //最后一次循环，删除开头为0的
                     while(arr[1]=="0"){
                         for(let s=1;s<arr.length-1;s++){
                            arr[s]=arr[s+1]
                        }
                         arr.length--
                     }
                }else{
                    for(let i=0,j=len;i<=j;i++,j--){

                        arr[j]=str[i]
                        arr[i]=str[j]
                    }
                     //最后一次循环，删除开头为0的
                     while(arr[0]=="0"){
                         //将后面的数字往前移动一个位置
                        for(let s=0;s<arr.length-1;s++){
                            arr[s]=arr[s+1]
                        }
                         arr.length--
                     }

                }
                var k=0
                var strs=""
               while(k<=arr.length-1){
                       strs=strs+arr[k]
                    k++
               }

               if(Number(strs)<(-2)**31||Number(strs)>(2**31)-1){
                   return 0
               }

            return strs

}