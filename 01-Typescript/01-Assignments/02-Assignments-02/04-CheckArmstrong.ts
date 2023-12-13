// Write a typescript prgoram which contains one arrow function named as ChkArmstrong.
// That function accepts one number and check whether number is Armstrong number or not.
// Input: 153
// Output: It is Armstrong number

function CheckArmstrong(No : number) : boolean
{
    var iDigit : number;
    var iCnt : number = 0;
    var iSum : number = 0;
    var i : number = 0;
    var Power : number = 1;
    var iTemp : number = No;

    while(iTemp != 0)
    {
        iTemp = Math.floor(iTemp / 10);
        iCnt++;
    }

    iTemp = No;

    while(iTemp != 0)
    {
        iDigit = iTemp % 10;

        for(i = 1; i <= iCnt; i++)
        {
           Power = Power * iDigit;
        }
        iSum = iSum + Power;
        Power = 1;
        iTemp = Math.floor(iTemp / 10);
    }

    if(iSum == No)
    {
        return true;
    }
    else
    {
        return false;
    }    
}

var Num : number = 153;
var Result : boolean = false;

Result = CheckArmstrong(Num);
if(Result)
{
    console.log("It is Armstrong number");
}
else
{
    console.log("It is not Armstrong number");
}
