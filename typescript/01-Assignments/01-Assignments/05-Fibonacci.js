// Write a typescript prgram which cotains one function named as Fibonacci. That function accept one number from user and print Fibonacci series till that number.
// Input: 21
// Output: 1 1 2 3 5 8 13 21
function FibonacciSeries(No) {
    var sum = 0;
    var num1 = 0;
    var num2 = 1;
    var iCnt = 0;
    var array = [];
    while (sum <= No) {
        array[iCnt] = num2;
        iCnt++;
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return array;
}
var No = 21;
var arr;
var iCnt;
arr = FibonacciSeries(No);
var size = arr.length;
for (iCnt = 0; iCnt < size; iCnt++) {
    console.log(arr[iCnt]);
}
