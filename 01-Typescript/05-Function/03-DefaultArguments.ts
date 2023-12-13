function Percentage(Marks : number, Outof : number = 100) : number{
    var Result = 0;
    Result = ((Marks / Outof) * 100);
    return Result;
}
var Ans : number = 0;
Ans = Percentage(77, 100);
console.log("Perecentage is : " + Ans);

Ans = Percentage(89);
console.log("Perecentage is : " + Ans);
