import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
  providers : [ArithmeticService]
})

export class DemoComponent 
{
    public add : number = 0;
    public sub : number = 0;

    constructor(private obj : ArithmeticService)
    {
        this.add = this.obj.Add(4, 7);
        this.sub = this.obj.Sub(23, 11);
    }
}
