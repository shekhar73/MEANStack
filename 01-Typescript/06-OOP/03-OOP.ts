class Demo
{
    // Characterstics
    No1 : number;
    No2 : number;

    // Default constructor
    constructor()
    {
        console.log("Inside Defualt Constructor");
        this.No1 = 0;
        this.No2 = 0;
    }

    // Behaviour
    Display()
    {
        console.log("Inside Display function of Demo Class");
    }
}

var obj = new Demo();
obj.Display();
console.log(obj.No1);
console.log(obj.No2);