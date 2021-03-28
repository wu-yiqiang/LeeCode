/*
将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

 
示例：

输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4

* */
function mergeTwoLists(l1,l2) {
    var l1ptr=l1;
    if(l1ptr==null){
        return l2
    }else{
        while(l1ptr.next!=null){
            l1ptr=l1ptr.next
        }
        l1ptr.next=l2
        l1ptr=l1
    }
    //先将来l2链表合并到l1链表中，再对链表进行排序

    //对链表进行排序
    var La=l1ptr
    while(La!=null){
        var Lb=l1ptr
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
    return l1

}