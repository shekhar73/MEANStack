// Create on typescript application which contains one named as Circle.
// Create one parametrised constructor which accept one value and assign it
// to radius. Value of PI member is set to 3.14.
// In circle class we have to one method (Behaviours) as Area which will return are of Circle.
// After designing the class create two objects of that class by providing some hardcoded value.
// Call the method Area by using both the objects.
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

var Result : number;
var Obj1 = new Circle(5);

Result = Obj1.Area();
console.log("Area of circle is : " +Result);
