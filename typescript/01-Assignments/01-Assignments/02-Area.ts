// Write a typescript program which contains one function named as Area. That function should calculate area of circle.
// Accept value of radius from user and return its area.
// Default value of PI should be 3.14 if it is not provided by the caller.
// Input: 5
// Output: Area of circle is 78.5

function areaOfCircle(radius : number, pi : number = 3.14) : number
{
    if(radius > 0)
    {
        area = pi * radius * radius;
    }
    return area;
}

var radius : number = 5;
var area : number = 0.0;

area = areaOfCircle(radius);
console.log("The area of circle is : " +area);
