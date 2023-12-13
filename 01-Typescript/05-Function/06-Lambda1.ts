function Addition(No1 : number, No2 : number) : number
{
    var Ans : number = 0;
    Ans = No1 + No2;
    return Ans;
}

var Result : number = 0;
Result = Addition(4, 7);

console.log("Addition is : "+Result);
var fun = (No1 : number, No2 : number) => No1 + No2;

Result = fun(10, 11);
console.log("Addition is : "+Result);
