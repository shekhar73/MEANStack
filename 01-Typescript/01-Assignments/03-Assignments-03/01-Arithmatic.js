var Arithmatic = /** @class */ (function () {
    function Arithmatic(A, B) {
        this.Number1 = A;
        this.Number2 = B;
    }
    Arithmatic.prototype.Addition = function () {
        var Ans;
        Ans = this.Number1 + this.Number2;
        return Ans;
    };
    Arithmatic.prototype.Substraction = function () {
        var Ans;
        Ans = this.Number1 - this.Number2;
        return Ans;
    };
    Arithmatic.prototype.Multiplication = function () {
        var Ans;
        Ans = this.Number1 * this.Number2;
        return Ans;
    };
    Arithmatic.prototype.Division = function () {
        var Ans;
        Ans = this.Number1 / this.Number2;
        return Ans;
    };
    return Arithmatic;
}());
var Obj1 = new Arithmatic(11, 10);
var Obj2 = new Arithmatic(25, 21);
var Result = 0;
Result = Obj1.Addition();
console.log("Addition is : " + Result);
Result = Obj1.Substraction();
console.log("Substraction is : " + Result);
Result = Obj2.Multiplication();
console.log("Multiplication is : " + Result);
Result = Obj2.Division();
console.log("Division is : " + Result);
