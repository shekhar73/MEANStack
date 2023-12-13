function isEvenOrOddNumber(No : number) : boolean
{
    if((No % 2) == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

var Value : number = 44;
var Result : boolean = false;

Result = isEvenOrOddNumber(Value);

if(Result == true)
{
    console.log("The given number is an Even number!!!");
}
else
{
    console.log("The given number is an Odd number!!!");
}