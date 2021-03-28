/*
* 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

 

示例 1:

输入: [3,2,3]
输出: 3
示例 2:

输入: [2,2,1,1,1,2,2]
输出: 2

* 
* 
* 
* */

function majorityElement(nums) {
           var str={}
            for (let i=0;i<nums.length;i++){
                var index=nums[i]
                if(str[index]){
                    str[index]++
                }else {
                    str[index]=1
                }
            }

            //遍历对象
            var value=0
            var key
            for(let s in str){
                if(str[s]>value){
                    value=str[s]
                     key=s
            }
            }

            return  key
}