// Write a typescript program which contains one function named as CheckPrime.
// That function should accept one number and it should return true if the given number is prime and oterwise return false.
// Input: 11
// Output: It is a prime number.
function CheckPrime(No) {
    var iCnt;
    for (iCnt = 2; iCnt <= No / 2; iCnt++) {
        if (No % iCnt == 0) {
            return false;
        }
    }
    return true;
}
var iNo = 73;
var isPrime = false;
isPrime = CheckPrime(iNo);
if (isPrime) {
    console.log("The given number is a prime number!...");
}
else {
    console.log("The given number is not a prime number!...");
}
