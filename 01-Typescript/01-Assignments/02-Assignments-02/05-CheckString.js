// Write a typescript prgoram which contains one arrow function named as ChkString.
// That function accepts one string and check whether that string contains "Marvellous" word or not.
// Input: "Pune Kothrud Marvellous Infosystems"
// Output: String contains Marvellous in it.
function ChkString(str) {
    if (str.indexOf("Marvellous") !== -1) {
        return true;
    }
    return false;
}
var str = "Pune Kothrud Marvellous Infosystems";
var result = false;
result = ChkString(str);
if (result) {
    console.log("String contains Marvellous in it.");
}
else {
    console.log("String doesn't contains Marvellous in it.");
}
