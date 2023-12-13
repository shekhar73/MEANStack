// 2. Write a typescript program which contains one function named as Summation.
// That function accepts array of numbers and returns the summation of each number from array.
// Input:   23  6   7   4   74  5   77
// Output: 196

function SumOfArray(array : number[]) : number
{
    var sum : number = 0;
    var i : number = 0;

    for(i = 0; i < array.length; i++)
    {
        sum = sum + array[i];
    }

    return sum;
}

var array : number[] = [23, 6, 7, 4, 74, 5, 77];
var iSum = SumOfArray(array);
console.log("The summation of number is : "+iSum);

