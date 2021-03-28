/*
* 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

你的算法时间复杂度必须是 O(log n) 级别。

如果数组中不存在目标值，返回 [-1, -1]。

示例 1:

输入: nums = [5,7,7,8,8,10], target = 8
输出: [3,4]
示例 2:

输入: nums = [5,7,7,8,8,10], target = 6
输出: [-1,-1]

*
*
* */

/*方法一（未完成）*/
function searchRange(nums,target) {
            nums=[1];
            target=1;
            var lens=nums.length;
            var left=0;
            var right=lens-1;
            var middle=(lens+left)/2;
            while(left<=right){
                if(nums[middle]>target){
                    right=middle-1;
                    middle=(right+left)/2;
                }else{
                    left=middle-1;
                    middle=(right+left)/2;
                }
                //寻找到目标值时再向前向后搜索
                var arr=new Array();
                if(nums[middle]===target){
                    //向后搜索
                        var next=middle;
                        var last=next;
                        /*向前搜索*/
                        while(nums[next]==target){
                            last=next;
                            next++;
                        }

                        //向后搜索
                        var pre=middle;
                        var frist=middle;
                        while(nums[pre]==target){
                            frist=pre;
                            pre--;
                        }
                        if (frist==last){
                            arr.push(frist)
                        }else {
                            arr.push(frist)
                            arr.push(last)
                        }

                        alert(arr)
                return arr
                }
                if (nums[left]==nums[right]){
                    if(nums[left]==target){
                        return left;
                    }
                }




            }

             //不存在目标值时
            var ars=new Array();
            ars.push(-1);
            ars.push(-1);
            alert(ars);
            return ars
}


/*方法二（首尾指针）*/
function searchRange(nums,target) {
        var lens = nums.length;
            /*使用双指针遍历数组*/
            var left = 0;
            var right = lens - 1;
            var arr = new Array();
                while(nums[left]!=target){
                    if(left>(lens-1)){
                        arr.push(-1);
                        arr.push(-1);
                        alert(arr);
                        return arr;
                        /*break;*/
                    }
                    left++;
                }
                while (nums[right]!=target){
                    right--;
                }

                //添加数据
                  arr.push(left);
                    arr.push(right);
                    //alert(arr)
                    return arr;


}