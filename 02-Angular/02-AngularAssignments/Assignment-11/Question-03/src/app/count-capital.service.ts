import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountCapitalService {

  constructor() { }

  CountCapital(str : string) : number
  {
    let count = 0;

    for (let i = 0; i < str.length; i++) 
    {
      const currentChar = str.charAt(i);
      
      if (currentChar >= 'A' && currentChar <= 'Z') 
      {
        count++;
      }
    }
    return count;
  }
}
