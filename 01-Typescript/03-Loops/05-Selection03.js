function DisplayExamTime(division) {
    if (division == "A") {
        console.log("Your exam starts at 07:00 AM");
    }
    else if (division == 'B') {
        console.log("Your exam starts at 08:00 AM");
    }
    else if (division == 'C') {
        console.log("Your exam starts at 09:00 AM");
    }
    else if (division == 'D') {
        console.log("Your exam starts at 10:00 AM");
    }
    else {
        console.log("Wrong Input, It should be either A, B, C, D");
    }
}
var Value = "C";
DisplayExamTime(Value);
