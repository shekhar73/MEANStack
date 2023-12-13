var Marks : number[] = [11, 21, 51, 101, 111];

console.log("Number of elements in the arrays are : " +Marks.length);

var i : number;
var j : number = 0;
var k : number = 0;

console.log("Array traversal using for loop");

for(i = 0; i < Marks.length; i++)
{
    console.log(Marks[i]);
}

console.log("Array traversal using While loop");

while(j < Marks.length)
{
    console.log(Marks[j]);
    j++;
}

console.log("Array traversal using do-while loop");

do
{
    console.log(Marks[k]);
    k++;
}while(k < Marks.length);
