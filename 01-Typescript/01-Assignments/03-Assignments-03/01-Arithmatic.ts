// 1. Create one typescript application which contains one class named as Arithmetic.
// Arithmetic class contains three characteristics (Class data members) as Number1, Number2.
// Create one parameterised constructor which accept two values and assign it to Number1 and Number2.
// In Arithmatic class we have to write four methods (Behaviours) as Addition, Substraction and Division.
// Addition method will add Number, Number2 and return result.
// Substraction method will sutract Number1, Number2 & return result.
// Multiplcation method will multiply Number1, Number2 & return result.
// Division method will divide Number1, Number2 & return result.
// After designing the class create two objects of that class by providing some
// hardcoded value. Call all the method by using both the objects.

class Arithmatic
{
    public Number1 : number;
    public Number2 : number;

    constructor(A : number, B : number)
    {
        this.Number1 = A;
        this.Number2 = B;
    }

    Addition() : number
    {
        var Ans : number;
        Ans = this.Number1 + this.Number2;
        return Ans;
    }

    Substraction() : number
    {
        var Ans : number;
        Ans = this.Number1 - this.Number2;
        return Ans;
    }

    Multiplication() : number
    {
        var Ans : number;
        Ans = this.Number1 * this.Number2;
        return Ans;
    }

    Division() : number
    {
        var Ans : number;
        Ans = this.Number1 / this.Number2;
        return Ans;
    }
}

var Obj1 = new Arithmatic(11, 10);
var Obj2 = new Arithmatic(25, 21);

var Result : number = 0;

Result = Obj1.Addition();
console.log("Addition is : "+Result);


Result = Obj1.Substraction();
console.log("Substraction is : "+Result);


Result = Obj2.Multiplication();
console.log("Multiplication is : "+Result);


Result = Obj2.Division();
console.log("Division is : "+Result);