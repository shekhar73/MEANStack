// Create one typescript application which contains one class named as CircleX which inherits above circle class.
// In CircleX class we have to write one method(Behaviours) as Circumference which will
// return circumference of circle.
// After designing the class create two object of that class by providing some hardcoded
// value. Call circumference and Area method by using both the objects.

class Circle
{
    public Radius : number;
    public PI : number;

    constructor(rad : number, pi_val : number = 3.14)
    {
        this.Radius = rad;
        this.PI = pi_val;
    }

    Area() : number
    {
        var Ans : number;
        Ans = this.PI * this.Radius * this.Radius;
        return Ans;
    }
}

class CircleX extends Circle
{
    Circumference() : number
    {
        var circumOfCircle : number;
        circumOfCircle = 2 * this.PI * this.Radius;
        return circumOfCircle;
    }
}

var Result : number;
var Obj1 = new Circle(5);

Result = Obj1.Area();
console.log("Area of circle is : " +Result);

var Obj2 = new CircleX(10);
Result = Obj2.Circumference();
console.log("Circumference of circle is : "+Result);