import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myadd',
  standalone: true
})
export class MyaddPipe implements PipeTransform 
{
  transform(value1 : number, value2 : number): number 
  {
    let ans : number = 0;
    ans = value1 + value2;
    return ans;
  }
}
