/*
* 
给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

 

示例：

输入：nums = [-1,2,1,-4], target = 1
输出：2
解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
 

提示：

3 <= nums.length <= 10^3
-10^3 <= nums[i] <= 10^3
-10^4 <= target <= 10^4
*
* */

function  threeSumClosest(nums,target) {
        var len=nums.length-1
    var arr=new Array()
    var arr2=new Array()
    for(let i=0;i<len;i++){
        for(let j=i+1;j<len;j++){
            for(let s=j+1;s<=len;s++){
                if(nums[i]+nums[j]+nums[s]>target){
                    let sum=nums[i]+nums[j]+nums[s]-target
                    arr.push(sum)
                    arr2.push(sum+target)
                }else{
                  let  sum=target-nums[i]-nums[j]-nums[s]
                  arr.push(sum)
                  arr2.push(target-sum)
                }
                // let sum=nums[i]+nums[j]+nums[s]
                // arr.push(sum)
            }
        }
    }
    let tmp
    //获取arr中最小值的索引
    let index
    index=arr.indexOf(Math.min(...arr))
    tmp=arr2[index]
    return (tmp)

}