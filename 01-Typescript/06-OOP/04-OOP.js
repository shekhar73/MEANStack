var Demo = /** @class */ (function () {
    // Parameterised constructor
    function Demo(A, B) {
        console.log("Inside Defualt Constructor");
        this.No1 = A;
        this.No2 = B;
    }
    // Behaviour
    Demo.prototype.Display = function () {
        console.log("Inside Display function of Demo Class");
    };
    return Demo;
}());
var obj1 = new Demo(7, 4);
var obj2 = new Demo(11, 21);
console.log(obj1.No1);
console.log(obj1.No2);
console.log(obj2.No1);
console.log(obj2.No2);
