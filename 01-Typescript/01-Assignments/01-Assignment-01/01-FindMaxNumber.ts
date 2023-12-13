// Problem Statements: Write a typescript program which contains one function named as maximum.
// That function accepts three parameters and it should returns larget value from three inpurt parameters.
// Input: 23 89 6
// Output: The maximum number is : 89

function findMaximumNumber(num1 : number, num2 : number, num3 : number) : number
{
     if((num1 >= num2) && (num1 >= num3))
     {
        return num1;
     }
     else if((num2 >= num1) && (num2 >= num3))
     {
        return num2;
     }
     else
     {
        return num3;
     }
}

var num1 : number = 23;
var num2 : number = 89;
var num3 : number = 6;
var maximumNumber : number;

maximumNumber = findMaximumNumber(num1, num2, num3);

console.log("The maximum number is : " + maximumNumber);