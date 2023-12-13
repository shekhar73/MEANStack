// 2. Write a typescript program which contains one function named as Summation.
// That function accepts array of numbers and returns the summation of each number from array.
// Input:   23  6   7   4   74  5   77
// Output: 196
function SumOfArray(array) {
    var sum = 0;
    var i = 0;
    for (i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
}
var array = [23, 6, 7, 4, 74, 5, 77];
var iSum = SumOfArray(array);
console.log("The summation of number is : " + iSum);
