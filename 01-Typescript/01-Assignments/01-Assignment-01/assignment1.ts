function findMax(No1 : number, No2 : number, No3 : number) : number
{
    var result : number = 0;
    result = No1 > No2 ? No1 :No2;
    result = result > No3 ? result : No3;
    return result;
}

var No1 : number = 23;
var No2 : number = 89;
var No3 : number = 6;

var maxNo : number =0;
maxNo = findMax(No1, No2, No3);

console.log(maxNo);
