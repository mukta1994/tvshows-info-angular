import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minuteToHours'
})
export class MinuteToHoursPipe implements PipeTransform {

  transform(value: number): string {
    let hours = Math.floor(value / 60);
    let minutes = Math.floor(value % 60);
   // return time + minutes + ' mins';
    return (hours!=0) ? hours+"hr" : "" + (minutes!=0) ? minutes+"mins" : "";
  }
}
