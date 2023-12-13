// 3. Write a typescript program which contains one function named as Maximum.
// That function accepts array of numbers and returns the second largest number from array.
// Input:   23  6   7   4   74  5   77
// Output: 77

function secondLargestNumberFromArray(array : number[]) : number
{
    var maxNumber_1 : number = array[0];
    var maxNumber_2 : number = array[1];

    var maxNo1 = maxNumber_1;

    if(maxNumber_1 < maxNumber_2)
    {
        maxNumber_1 = maxNumber_2;
        maxNumber_2 = maxNo1;
    }
    var i : number = 0;

    for(i = 0; i < array.length; i++)
    {
        if(maxNumber_1 < array[i])
        {
            maxNumber_1 = array[i];
        }

        if((maxNumber_2 < array[i]) && (array[i] < maxNumber_1))
        {
            maxNumber_2 = array[i];
        }
    }
    return maxNumber_2;
}

var array : number[] = [23,  89,  6,   74,  56,  45,  77,  32];

var secondLargestNumber = secondLargestNumberFromArray(array);
console.log("The second maximum number from the array is : "+secondLargestNumber);
