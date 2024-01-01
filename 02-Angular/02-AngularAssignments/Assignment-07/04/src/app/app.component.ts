import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
    public str : string = "SOMSHEKHAR KARLE";

    public changeCase(value : string)
    {
        if(value == 'upper')
        {
            this.str = this.str.toUpperCase();
            return this.str;
        }
        else if(value == 'lower')
        {
          this.str = this.str.toLowerCase();
          return this.str;
        }
        return this.str;
        
    }
}
