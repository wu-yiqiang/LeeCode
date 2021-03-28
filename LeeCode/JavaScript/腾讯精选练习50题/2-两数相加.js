/* 
给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：
    输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
    输出：7 -> 0 -> 8
    原因：342 + 465 = 807
*/


function addTwoNumbers(l1,l2) {
       //将最长的链表设置为aptr
      var l1length=0,l2length=0
    var aptr=l1
    var bptr=l2
    while(aptr!=null){
        l1length++
        aptr=aptr.next
    }
    while(bptr!=null){
        l2length++
        bptr=bptr.next
    }
    var cptr=new ListNode(null)
	var dptr=new ListNode(null)
    if(l1length>=l2length){
         aptr=l1
         bptr=l2
		cptr=l1
		dptr=l1
    }else {
         aptr=l2
         bptr=l1
		cptr=l2
		dptr=l2
    }
	//遍历l1和l2链表，将该链表合并成一条链表
    var pta=new ListNode(null)
	var ptb=new ListNode(null)
	while(bptr!=null){
	    aptr.val=aptr.val+bptr.val
		aptr=aptr.next
		bptr=bptr.next
	}
	//循环链表l1将大于10的进行进位

	while (cptr!=null){
        if(cptr.val>9){
            cptr.val=cptr.val-10
			if(cptr.next==null){
			    var node=new ListNode(0,null)
				cptr.next=node
			}
			cptr.next.val=cptr.next.val+1
		}
        cptr=cptr.next
	}
    return  dptr
}