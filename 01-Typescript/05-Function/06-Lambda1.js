function Addition(No1, No2) {
    var Ans = 0;
    Ans = No1 + No2;
    return Ans;
}
var Result = 0;
Result = Addition(4, 7);
console.log("Addition is : " + Result);
var fun = function (No1, No2) { return No1 + No2; };
Result = fun(10, 11);
console.log("Addition is : " + Result);
