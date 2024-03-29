/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let node = new ListNode(0);
    let head = node;

    while(l1 || l2) {
        if(l1){
            node.val += l1.val;
            l1 = l1.next;
        }
        if(l2){
            node.val += l2.val;
            l2 = l2.next;
        }
        
        if(node.val > 9){
            node.val %= 10;
            node.next = new ListNode(1);
        } else if(l1 || l2){
            node.next = new ListNode(0);
        }
        node = node.next;
    }

    return head;
};
