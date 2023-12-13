var Demo = /** @class */ (function () {
    function Demo() {
        console.log("Inside Defualt Constructor");
        this.No1 = 0;
        this.No2 = 0;
    }
    // Behaviour
    Demo.prototype.Display = function () {
        console.log("Inside Display function of Demo Class");
    };
    return Demo;
}());
var obj = new Demo();
obj.Display();
console.log(obj.No1);
console.log(obj.No2);
