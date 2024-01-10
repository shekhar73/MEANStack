import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellouscheck',
  standalone: true
})
export class MarvellouscheckPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): any 
  {
    if(args[0] == "Prime")
    {
      var iCnt : number;

      for(iCnt = 2; iCnt <= value / 2; iCnt++)
      {
          if(value % iCnt == 0)
          {
              return "The given number is not a Prime Number!"; 
          }
      }
  
      return "The given number is a Prime Number!";
    }
    
    if(args[0] == "Perfect")
    {
        var iCnt : number;
        var iSum : number = 0;

        for(iCnt = 1; iCnt <= value / 2; iCnt++)
        {
            if(value % iCnt)
            {
              iSum = iSum + iCnt;
            }
        }
        if(iSum == value)
        {
          return "The given number is a Perfect Number!";
        }
        return "The given number is not a Perfect Number!";
    }

    if(args[0] == "Even")
    {
      if(value % 2 == 0)
      {
         return "It is an Even Number!"
      }
    }

    if(args[0] == "Odd")
    {
      if(value % 2 != 0)
      {
         return "It is an Odd Number!"
      }
    }
  }
}
