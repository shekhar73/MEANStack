import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `<h1 [class]="'text-color'">Marvellous Infosystems</h1><label for="textField">Enter Text:</label><input type="text" name="textField">`,
  styles: [`.text-color {color: blue;}`]
})
export class AppComponent {
  title = '03-Assignment-6c';
}
