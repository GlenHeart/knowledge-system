/**
 * 
 * 栈 Lifo Last In First Out push() pop()
 * 队列 FIFO First In First Out shift() push()
 */

function ListNode (val) {
  this.val = val;
  this.next = null;
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
node.next = node1;

const node3 = new ListNode(3);

node3.next = node1.next;
node1.next = node3;

const target = node1.next;
target.next = node3.next;

// js数组未必是真正的数组 ，应用类型 底层是使用hash映射去匹配的 key value
// 如果是真正的数组，应该使用数组的方法???
// 链表相对于数组来说，查找效率更高，因为数组是线性的，链表是非线性的 增加和删除，其他元素不需要移动O(1)
// 链表访问效率低，增加删除高。数据反之