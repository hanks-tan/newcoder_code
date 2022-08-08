/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead)
{
    // write code here
    let cur = null
    let nextNode
    while (pHead.next) {
        nextNode = pHead.next
        pHead.next = cur
        cur = pHead
        pHead = nextNode
    }
    return nextNode 
    
}
module.exports = {
    ReverseList : ReverseList
};