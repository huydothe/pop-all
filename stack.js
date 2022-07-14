"use strict";
exports.__esModule = true;
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack(array) {
        this.array = [];
        this.array = array;
    }
    Stack.prototype.pushInNewArray = function () {
        var newArr = [];
        var limit = this.array.length;
        for (var i = 0; i < limit; i++) {
            var a = this.getPop();
            newArr.push(a);
        }
        return newArr;
    };
    Stack.prototype.getPop = function () {
        return this.array.pop();
    };
    return Stack;
}());
exports.Stack = Stack;
var array = new Stack([1, 2, 3, 4, 5, 6, 7]);
console.log(array.pushInNewArray());
