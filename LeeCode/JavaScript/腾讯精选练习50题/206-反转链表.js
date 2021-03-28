/*
*
反转一个单链表。

示例:
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
进阶:
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
*
* */
function reverseList(head) {
	var la=head
	if(la==null || la.next==null){
		return  head
	}
	var newlist=new ListNode(null,null)
	//循环
	var pr=newlist
	while (la.next!=null){
		let ptr=la
		let pt=ptr
		while (ptr.next!=null){
			pt=ptr
			ptr=ptr.next
		}
		//创建新链表
		pt.next=null
		//新建节点
		let newnode=new ListNode(ptr.val,null)
		pr.next=newnode
		pr=pr.next
	}

	//添加首节点
	let newnode=new ListNode(la.val,null)
	pr.next=newnode


	//去除空首节点
	var pd=newlist
	newlist=pd.next
	pd.next=null
  return newlist
}