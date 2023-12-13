// Function Defination
function Display(Arr) {
    var i = 0;
    var sum = 0;
    for (i = 0; i < Arr.length; i++) {
        sum = sum + Arr[i];
    }
    return sum;
}
var Marks = [73, 74, 77, 90, 88];
var Result = 0;
// Function Call
Result = Display(Marks);
console.log("Addition is : " + Result);
