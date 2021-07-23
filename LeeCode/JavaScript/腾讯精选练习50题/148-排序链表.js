/*
*
* 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。

进阶：
你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？
 

示例 1：
输入：head = [4,2,1,3]
输出：[1,2,3,4]


*
* 示例 2：
输入：head = [-1,5,3,4,0]
输出：[-1,0,3,4,5]

*
* 示例 3：
输入：head = []
输出：[]
 

提示：
链表中节点的数目在范围 [0, 5 * 104] 内
-105 <= Node.val <= 105
通过次数100,918提交次数150,395
*
* */
/*堆排序 快速排序 归并排序*/

function sortList(head) {
    var La=head
    while(La!=null){
        var Lb=head
        while(Lb!=null){
            if (Lb.val>La.val){
                let tmp
                tmp=Lb.val
                Lb.val=La.val
                La.val=tmp
            }
            Lb=Lb.next

        }
        La=La.next
    }
    return head
}