const Queue = function () {
    this.first = null;
    this.last = null;
    this.size = 0;
};

const Node = function (data) {
    this.data = data;
    this.next = null;
};

Queue.prototype.enqueue = function (data) {
    const node = new Node(data);
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
};

Queue.prototype.dequeue = function () {
    temp = this.first;
    this.first = this.first.next;
    if (!this.first) {
        this.last = null;
    }
    this.size -= 1;
    return temp.data;
};