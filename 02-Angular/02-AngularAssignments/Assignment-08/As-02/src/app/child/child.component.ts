import { Component, Input, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})

export class ChildComponent 
{
    @Input() public parentData : any;
    @Output() public childData : any = new EventEmitter();

    public ChildToParent()
    {
        this.childData.emit("Thanks parent for the panipuri.");
    }
}
