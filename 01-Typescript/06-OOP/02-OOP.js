var Demo = /** @class */ (function () {
    function Demo() {
    }
    // Behaviour
    Demo.prototype.Display = function () {
        console.log("Inside Display function of Demo Class");
    };
    return Demo;
}());
var obj = new Demo();
obj.Display();
