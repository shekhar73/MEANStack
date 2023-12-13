var Arithmatic = /** @class */ (function () {
    function Arithmatic(A, B) {
        this.No1 = A;
        this.No2 = B;
    }
    Arithmatic.prototype.Addition = function () {
        var Ans;
        Ans = this.No1 + this.No2;
        return Ans;
    };
    Arithmatic.prototype.Substraction = function () {
        var Ans;
        Ans = this.No1 - this.No2;
        return Ans;
    };
    return Arithmatic;
}());
var obj1 = new Arithmatic(11, 10);
var obj2 = new Arithmatic(25, 21);
var Result = 0;
Result = obj1.Addition();
console.log("Addition is : " + Result);
Result = obj2.Substraction();
console.log("Substraction is : " + Result);
