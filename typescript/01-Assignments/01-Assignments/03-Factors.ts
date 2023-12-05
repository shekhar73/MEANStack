// Write a typescript program which contains one function named as DisplayFactors. That function should accept one number and display factors of that number.
// Input: 20
// Output: 1 2 4 5 10

function DisplayFactors(No : number) : number[]
{
    var iCnt = 0;
    var jCnt = 0;
    var array : number[] = [];

    for(iCnt = 1; iCnt <= No / 2; iCnt++)
    {
        if(No % iCnt == 0)
        {
            array[jCnt] = iCnt;
            jCnt++;
        }
    }
    return array;
}

var No : number = 20;
var i : number = 0;
var arr : number[] = DisplayFactors(No);
var size : number = arr.length;

for(i = 0; i < size; i++)
{
    console.log(arr[i]);
}
