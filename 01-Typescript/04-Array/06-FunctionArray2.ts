// Function Defination
function Display(Arr : number[]) : number
{
    var i : number = 0;
    var sum : number = 0;
    for(i = 0; i < Arr.length; i++)
    {
        sum = sum + Arr[i];
    }
    return sum;
}

var Marks : number[] = [73, 74, 77, 90, 88];
var Result : number = 0;

// Function Call
Result = Display(Marks);
console.log("Addition is : "+Result);