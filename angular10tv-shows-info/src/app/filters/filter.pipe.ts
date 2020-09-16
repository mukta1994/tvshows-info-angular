
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], val: any): any[] {

    if (!items) {
      return [];
    }
    if (!val) {
      return items;
    }

    switch(val) { 
      case 'date': { 
        return(items.sort((a, b) => { return <any>new Date(b.first_air_date) - <any>new Date(a.first_air_date)}))
      } 
      case 'name asc': { 
        return(items.sort((a, b) =>{ return  a.name.localeCompare(b.name)}));  
      } 
      
      case 'name desc': { 
        return(items.sort((a, b) =>{ return  a.name.localeCompare(b.name)})).reverse();
     } 
     case 'vote': { 
      return(items.sort((a, b) =>{ return a.vote_average - b.vote_average})).reverse();
   } 
   case 'latest': { 
    return(items.sort((a, b) => { return <any>new Date(b.air_date) - <any>new Date(a.air_date)}))
  } 
  case 'latest-asc': { 
    return(items.sort((a, b) => { return <any>new Date(b.air_date) - <any>new Date(a.air_date)})).reverse();
  } 
     default: { 
       return items;    
   } 
   } 
  }
}