function DisplayTime(Division : string) : void
{
    switch(Division)
    {
        case "A":
            console.log("Your exam starts at 07:00 AM");
            break;
        case "B":
        {
            console.log("Your exam starts at 08:00 AM");
            break;
        }
        case "C":
        {
            console.log("Your exam starts at 09:00 AM");
            break;
        }
        case "D":
        {
            console.log("Your exam starts at 10:00 AM");
            break;
        }
        default:
        {   
            console.log("Wrong Input, It should be either A, B, C, D");
        }
    }
}

var Value : string = "A";
DisplayTime(Value);
