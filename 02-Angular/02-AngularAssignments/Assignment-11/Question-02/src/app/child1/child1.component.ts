import { Component } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  providers : [NumberService]
})

export class Child1Component 
{
  public isPrime : string;
  public val1 : number = 11;
  public val2 : number = 12;

  constructor(private obj : NumberService)
  {
    this.isPrime = this.obj.ChkPrime(this.val1);
    this.isPrime = this.obj.ChkPrime(this.val2);
  }
}
