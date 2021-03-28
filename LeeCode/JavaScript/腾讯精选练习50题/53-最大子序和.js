/*
*
给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

示例:

输入: [-2,1,-3,4,-1,2,1,-5,4]
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
进阶:

如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
*
* */
/*方法一（效率太低）*/

function maxSubArray(nums) {
    var len=nums.length-1;
    var i=0;

    /*长度数组*/

    /*i控制起始位置*/
    while(i<=len){
        /*j控制长度*/
            /*数值数组*/
        var arr=new Array();
        var sum=0;
        for (var j=i;j<=len;j++){
            sum=nums[j]+sum;
            arr.push(sum);
        }
       i++;
    }
    /*取出arr数组中最大值*/
    value=Math.max.apply(null,arr);
    alert(value);
    return value;

}