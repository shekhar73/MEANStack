// 1. Write a typescript program which contains one function named as Maximum. 
// That function accepts array of numbers and returns the largest number from array.
// Input:   23  89  6   29  56  45  77  32
// Output:  Maximum number is 89

function FindMaxNumberArray(array : number[]) : number
{
    var maxNumber : number = array[0];
    var i : number = 0;

    for(i = 0; i < array.length; i++)
    {
        if(array[i] > maxNumber)
        {
            maxNumber = array[i];
        }
    }

    return maxNumber;
}

var array : number[] = [23,  89,  6,   74,  56,  45,  77,  32];

var iMaxNumber = FindMaxNumberArray(array);
console.log("The maximum number is : "+iMaxNumber);

