import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mymult',
  standalone: true
})
export class MymultPipe implements PipeTransform 
{
  transform(value1 : number, value2 : number): number 
  {
    let ans : number = 0;
    ans = value1 * value2;
    return ans;
  }
}
