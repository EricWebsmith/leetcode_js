const { expect } = require("chai");

/**
 * @param {number} n
 */
var SeatManager = function(n) {
    this.n = n;
    this.seats = [];
    for (let i=n;i>0;i--) {
        this.seats.push(i);
    }
};

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function() {
    return this.seats.pop();
};

/** 
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function(seatNumber) {
    let left = this.seats.length - seatNumber;
    let right = this.seats.length - 1;
    if (this.seats[right]>seatNumber) {
        this.seats.push(seatNumber);
        return;
    }

    while(left < right) {
        const mid = left + ((right-left) & 1 -1) / 2;
        if (this.seats[mid] > seatNumber) {
            left = mid+1;
            
        } else {
            right = mid;
        }
    }

    this.seats.splice(left, 0, seatNumber);
};


describe('1845. Seat Reservation Manager', () => {
    it('1845. 1', () => {
        const seatManager = new SeatManager(5); // Initializes a SeatManager with 5 seats.
        expect(seatManager.reserve()).to.be.eql(1);    // All seats are available, so return the lowest numbered seat, which is 1.
        expect(seatManager.reserve()).to.be.eql(2);    // The available seats are [2,3,4,5], so return the lowest of them, which is 2.
        seatManager.unreserve(2); // Unreserve seat 2, so now the available seats are [2,3,4,5].
        expect(seatManager.reserve()).to.be.eql(2);    // The available seats are [2,3,4,5], so return the lowest of them, which is 2.
        expect(seatManager.reserve()).to.be.eql(3);    // The available seats are [3,4,5], so return the lowest of them, which is 3.
        expect(seatManager.reserve()).to.be.eql(4);    // The available seats are [4,5], so return the lowest of them, which is 4.
        expect(seatManager.reserve()).to.be.eql(5);    // The only available seat is seat 5, so return 5.
        seatManager.unreserve(5); // Unreserve seat 5, so now the available seats are [5].
    });

    it('1845. 2', () => {
        const seatManager = new SeatManager(5); // Initializes a SeatManager with 5 seats.
        expect(seatManager.reserve()).to.be.eql(1);    // All seats are available, so return the lowest numbered seat, which is 1.
        expect(seatManager.reserve()).to.be.eql(2);    // The available seats are [2,3,4,5], so return the lowest of them, which is 2.
        seatManager.unreserve(1); 
        seatManager.unreserve(2);
        expect(seatManager.reserve()).to.be.eql(1);    // The available seats are [2,3,4,5], so return the lowest of them, which is 2.
        expect(seatManager.reserve()).to.be.eql(2);    // The available seats are [3,4,5], so return the lowest of them, which is 3.
        expect(seatManager.reserve()).to.be.eql(3);    // The available seats are [4,5], so return the lowest of them, which is 4.
        expect(seatManager.reserve()).to.be.eql(4);    // The only available seat is seat 5, so return 5.
    });
    //it('2', () => {test()});
    //it('3', () => {test()});
});


/*
Runtime: 568 ms, faster than 100.00% of JavaScript online submissions for Seat Reservation Manager.
Memory Usage: 86.8 MB, less than 89.29% of JavaScript online submissions for Seat Reservation Manager.
*/