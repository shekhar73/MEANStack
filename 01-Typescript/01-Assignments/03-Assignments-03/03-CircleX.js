// Create one typescript application which contains one class named as CircleX which inherits above circle class.
// In CircleX class we have to write one method(Behaviours) as Circumference which will
// return circumference of circle.
// After designing the class create two object of that class by providing some hardcoded
// value. Call circumference and Area method by using both the objects.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Circle = /** @class */ (function () {
    function Circle(rad, pi_val) {
        if (pi_val === void 0) { pi_val = 3.14; }
        this.Radius = rad;
        this.PI = pi_val;
    }
    Circle.prototype.Area = function () {
        var Ans;
        Ans = this.PI * this.Radius * this.Radius;
        return Ans;
    };
    return Circle;
}());
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CircleX.prototype.Circumference = function () {
        var circumOfCircle;
        circumOfCircle = 2 * this.PI * this.Radius;
        return circumOfCircle;
    };
    return CircleX;
}(Circle));
var Result;
var Obj1 = new Circle(5);
Result = Obj1.Area();
console.log("Area of circle is : " + Result);
var Obj2 = new CircleX(10);
Result = Obj2.Circumference();
console.log("Circumference of circle is : " + Result);
