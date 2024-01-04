import { Component } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent 
{
    @Output() public message = new EventEmitter();

    public SendMessage(value : any)
    {
        this.message.emit("Hello parent, I'm your "+value);
    }
}
