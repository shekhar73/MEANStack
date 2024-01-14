import { Component } from '@angular/core';
import { ChkPrimeService } from '../chk-prime.service';
import { CountCapitalService } from '../count-capital.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  providers : [ChkPrimeService, CountCapitalService]
})

export class ChildComponent 
{

  public isPrime : string;
  public val1 : number = 11;
  public val2 : number = 12;

  public count : number = 0;
  public str : string = "Marvellous InfoSystems";
  
  constructor(private obj1 : CountCapitalService, private obj2 : ChkPrimeService)
  {
    this.count = this.obj1.CountCapital(this.str);

    this.isPrime = this.obj2.ChkPrime(this.val1);
    this.isPrime = this.obj2.ChkPrime(this.val2);
  }
}
