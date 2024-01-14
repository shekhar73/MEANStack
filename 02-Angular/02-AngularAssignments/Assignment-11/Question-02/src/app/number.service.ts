import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  ChkPrime(value : number) : string
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
}
