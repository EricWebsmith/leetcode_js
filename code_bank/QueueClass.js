class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue (val) {
        const node = new Node(val);
        if(this.last) {
            this.last.next = node;
            this.last = node;
        }
    
        if (!this.first) {
            this.first = node;
            this.last = node;
        }
    
        this.size += 1;
        return node;
    }

    dequeue() {
        const temp = this.first;
        this.first = this.first.next;
        if (!this.first) {
            this.last = null;
        }
        this.size -= 1;
        return temp.val;
    }
}