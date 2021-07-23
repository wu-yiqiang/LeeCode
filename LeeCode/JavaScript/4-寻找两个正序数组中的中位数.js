/**
 * 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。

 

示例 1：

输入：nums1 = [1,3], nums2 = [2]
输出：2.00000
解释：合并数组 = [1,2,3] ，中位数 2

示例 2：

输入：nums1 = [1,2], nums2 = [3,4]
输出：2.50000
解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5

示例 3：

输入：nums1 = [0,0], nums2 = [0,0]
输出：0.00000

示例 4：

输入：nums1 = [], nums2 = [1]
输出：1.00000

示例 5：

输入：nums1 = [2], nums2 = []
输出：2.00000

 

提示：

    nums1.length == m
    nums2.length == n
    0 <= m <= 1000
    0 <= n <= 1000
    1 <= m + n <= 2000
    -106 <= nums1[i], nums2[i] <= 106

 

进阶：你能设计一个时间复杂度为 O(log (m+n)) 的算法解决此问题吗？
 * **/

// 解法一：将两个数组正序合并再取中位数
var findMedianSortedArrays = function (nums1, nums2) {

  // 将两个数组合并
  let newArr = nums1.concat(nums2)
  // 快速排序
  let newArray = quickSorts(newArr);
  //取中位数
  let middle
  if (newArray.length % 2 == 0) {
    // 偶数
    middleIndex = newArray.length / 2

    middle = (newArray[middleIndex]+newArray[middleIndex-1]) /2
  } else {
    // 奇数
    middle =newArray[(1+newArray.length)/2-1] 
  }
  
  return middle
}

// 快速排序
function quickSorts(arr) {
  if (arr.length <= 1) {return arr; }//判断数组，一个长度直接返回 
  var pivot = arr[0];//找出基准元素 
  var left = [];   
  var right = [];    
  for (var i = 1; i < arr.length; i++){
    //循环把元素分别放入左边和右边数组        
    if (arr[i] < pivot) {  
      left.push(arr[i])
    } else {    
      right.push(arr[i])
    }  
  }    
  
  left.push(pivot)
 return quickSorts(left).concat(quickSorts(right));
}
console.log(findMedianSortedArrays([1, 2], [3, 4]));



// 解法二：
