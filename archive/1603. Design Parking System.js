const BIG = 1;
const MEDIUM = 2;
const SMALL = 3;

/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
    this.big = big;
    this.medium = medium;
    this.small = small;
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
    switch (carType) {
        case BIG:
            if (this.big > 0) {
                this.big--;
                return true;
            } else {
                return false;
            }
        case MEDIUM:
            if (this.medium > 0) {
                this.medium--;
                return true;
            } else {
                return false;
            }
        case SMALL:
            if (this.small > 0) {
                this.small--;
                return true;
            } else {
                return false;
            }
    }
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */