// Write a typescript program which contains one function named as DisplayFactors. That function should accept one number and display factors of that number.
// Input: 20
// Output: 1 2 4 5 10
function DisplayFactors(No) {
    var iCnt = 0;
    var jCnt = 0;
    var array = [];
    for (iCnt = 1; iCnt <= No / 2; iCnt++) {
        if (No % iCnt == 0) {
            array[jCnt] = iCnt;
            jCnt++;
        }
    }
    return array;
}
var No = 20;
var i = 0;
var arr = DisplayFactors(No);
var size = arr.length;
for (i = 0; i < size; i++) {
    console.log(arr[i]);
}
