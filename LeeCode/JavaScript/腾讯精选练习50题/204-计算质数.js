/*
* 统计所有小于非负整数 n 的质数的数量。

 

示例 1：

输入：n = 10
输出：4
解释：小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
示例 2：

输入：n = 0
输出：0
示例 3：

输入：n = 1
输出：0
 

提示：

0 <= n <= 5 * 106

* */
//版本一:超出时间限制 （原版）
function countPrimes(n) {
   if(n==0||n==1 || n==2) return 0
    //计数
    var count=0
    for(let i=2;i<n;i++){
       //判断是质数
        for(let j=2;j<i;j++){
          if(i%j==0){
            count++
            break
          }
      }
    }
return n-count-2
}

//版本二:超出时间限制（优化版）
function countPrimes(n) {
    if(n==0||n==1 || n==2) return 0
    //计数
    var count=0
    for(let i=2;i<n;i++){
       //判断是质数
        if(i%2==0){
          count++
        }else{
          for(let j=2;j<i;j++){
            if(i%j==0){
              count++
              break
            }
          }
        }
    }
return n-count-1
}

//版本三:（再优化版）
function countPrimes(n) {
   if(n==0 || n==1 || n==2) return 0
   if(n==3) return 1
   if(n==4 || n==5) return  2
   var count=2
   for (let i=5;i<n;i++){
      if(i%5==0){
          count++
          continue
      }else{
        for (let j=3;j<i;j++){
            if(i%j==0){
              count++
              break
            }
        }
      }
   }
  return n-count
 }
//版本四：线性筛选法


//版本五： 欧拉筛选法


//版本六：埃拉托斯特尼筛法
