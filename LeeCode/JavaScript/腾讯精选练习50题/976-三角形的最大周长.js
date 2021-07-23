/*
给定由一些正数（代表长度）组成的数组 A，返回由其中三个长度组成的、面积不为零的三角形的最大周长。

如果不能形成任何面积不为零的三角形，返回 0。

 

示例 1：

输入：[2,1,2]
输出：5
示例 2：

输入：[1,2,1]
输出：0
示例 3：

输入：[3,2,3,4]
输出：10
示例 4：

输入：[3,6,2,3]
输出：8
 

提示：

3 <= A.length <= 10000
1 <= A[i] <= 10^6

。
* */
function largestPerimeter(A) {
    //先对数组进行排序
    for (let i=0;i<A.length;i++){
        for (let j=0;j<A.length;j++){
            if (A[j]>A[j+1]){
                let tmp
                tmp=A[j]
                A[j]=A[j+1]
                A[j+1]=tmp
            }
        }
    }
    //求最大的三个数
    for(let k=A.length-1;k>0;k--){
        if(A[k]<(A[k-1]+A[k-2])){
            return A[k]+A[k-1]+A[k-2]
        }

    }
    return 0
}