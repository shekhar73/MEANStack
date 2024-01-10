import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myrev',
  standalone: true
})
export class MyrevPipe implements PipeTransform {

  transform(str : string): string
  {
    let temp : string = "";
    let icnt : number;
    icnt = str.length;

    for(let i = icnt - 1; i >= 0; i--)
    {
      temp = temp + str[i];
    }

    return temp;
  }

}
