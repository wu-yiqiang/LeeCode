/*
* 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
说明：

初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 

示例：

输入：
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3
输出：[1,2,2,3,5,6]
 

提示：
-10^9 <= nums1[i], nums2[i] <= 10^9
nums1.length == m + n
nums2.length == n
* 
* */


function merge(nums1,m,nums2,n) {

    // 将数组num2和数组num1合并
    nums1.length=m
    for(let i=0;i<n;i++){
        nums1.push(nums2[i])
    }

    //对nums数组排序,，使用冒泡排序法
     for(let i=0;i<nums1.length;i++){
                for (let j=0;j<nums1.length-i;j++){
                    if(nums1[j]>nums1[j+1]){
                        let tmp
                        tmp=nums1[j]
                        nums1[j]=nums1[j+1]
                        nums1[j+1]=tmp

                    }
                }
            }

    return nums1


}