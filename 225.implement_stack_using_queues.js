
var MyStack = function() {
    this.queue1 = [];
    this.queue2 = [];
};


/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    if(this.isPop){
        this.switch();
    }

    this.queue2.push(x);
    while(this.queue1.length > 0){
        this.queue2.push(this.queue1.shift());
    }
    let temp = this.queue1;
    this.queue1 = this.queue2;
    this.queue2 = temp;
    
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.queue1.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.queue1[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue1.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

 var obj = new MyStack();
 obj.push(1);
 obj.push(2);
 obj.push(3);
 console.log(obj.pop());
 console.log(obj.pop());
 console.log(obj.pop());
 console.log(obj.empty());

