class Demo
{
    // Characterstics
    No1 : number;
    No2 : number;

    // Parameterised constructor
    constructor(A : number, B : number)
    {
        console.log("Inside Paramerised Constructor");
        this.No1 = A;
        this.No2 = B;
    }

    // Behaviour
    Display()
    {
        console.log("Inside Display function of Demo Class");
    }
}

var obj1 = new Demo(7, 4);
var obj2 = new Demo(11, 21);

console.log(obj1.No1);
console.log(obj1.No2);

console.log(obj2.No1);
console.log(obj2.No2);