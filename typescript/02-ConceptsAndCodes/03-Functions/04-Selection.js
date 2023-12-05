function isEvenOrOddNumber(No) {
    if ((No % 2) == 0) {
        return true;
    }
    else {
        return false;
    }
}
var Value = 44;
var Result;
Result = isEvenOrOddNumber(Value);
if (Result == true) {
    console.log("The given number is an Even number!!!");
}
else {
    console.log("The given number is an Odd number!!!");
}
