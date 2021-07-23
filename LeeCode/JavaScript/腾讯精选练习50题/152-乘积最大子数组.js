/*
*给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。


示例 1:
输入: [2,3,-2,4]
输出: 6
解释: 子数组 [2,3] 有最大乘积 6。


示例 2:
输入: [-2,0,-1]
输出: 0
解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
*
* */

//version One:TimeOut
function maxProduct(nums) {
    if(nums.length==1) return nums[0]
    var len=nums.length-1
    var arr=nums
    for (let head=0;head<len;head++){
      for (let tail=len;tail>head;tail--){
            //计算集合中的乘积
            let sum=1
            for (let i=head;i<=tail;i++){
                  sum*=nums[i]
            }
            arr.push(sum)
      }
    }
    //获取数组中最小值
    var ptr=0
    var tmp=0
    while (ptr<arr.length){
      if(arr[ptr]>tmp){
        tmp=arr[ptr]
      }
      ptr++
    }
return tmp
}

//version Two:TimeOut
function maxProduct(nums) {
  if(nums.length==1) return nums[0]
  var len=nums.length-1
  //获取数组nums中最大值
  var tmp=nums[0]
  for(let t=0;t<nums.length;t++){
      if(nums[t]>tmp){
        tmp=nums[t]
      }
  }
  for (let head=0;head<len;head++){
    for (let tail=len;tail>head;tail--){
          //计算集合中的乘积
          let sum=1
          for (let i=head;i<=tail;i++){
                sum*=nums[i]
          }
          if(sum>tmp){
            tmp=sum
          }
    }
  }
return tmp
}

//version Three
function maxProduct(nums) {
    if(nums.length==1) return nums[0]
    var len=nums.length-1
    //获取数组nums最大值
    var tmp=nums[0]
    for(let t=0;t<nums.length;t++){
        if(nums[t]>tmp){
          tmp=nums[t]
        }
        //去除nums里面的1
        if(nums[t]==1){
          for (let k=t;k<nums.length-1;k++){
              nums[k]=nums[k+1]

          }
          nums.length--
        }
    }
    for (let head=0;head<len;head++){
      for (let tail=len;tail>head;tail--){
            //计算集合中的乘积
            let sum=1
            for (let i=head;i<=tail;i++){
                  sum*=nums[i]
            }
            if(sum>tmp){
              tmp=sum
            }
      }
    }
  return tmp
  }

  //version Four
function maxProduct(nums) {
if (nums.length == 1) return nums[0]
//获取数组nums最大值
var tmp = nums[0]
for (let t = 0; t < nums.length; t++) {
  if (nums[t] > tmp) {
    tmp = nums[t]
  }
  //去除nums值为1的元素
  if (nums[t] == 1) {
    for (let k = t+1; k < nums.length; k++) {
      nums[k-1] = nums[k]
    }
    nums.length--
    t--
  }
  //去除连续两个·数都是-1的元素
  if(nums[t]==nums[t+1] && nums[t]<0 && nums[t+2]==nums[t]) {
    let tmps=nums[t]*nums[t+1]
    nums[t]=tmps
    //向前移动一个位置
    for (let j = t +2 ; j < nums.length; j++) {
      nums[j - 1] = nums[j]
    }
    nums.length--
    t--
  }

}
//document.write(nums)
  var len = nums.length - 1
  for (let head = 0; head < len; head++) {
    for (let tail = len; tail > head; tail--) {
      //计算集合中的乘积
      let sum = 1
      for (let i = head; i <= tail; i++) {
        sum *= nums[i]
      }
      if (sum > tmp) {
        tmp = sum
      }
    }
  }
  return tmp
}