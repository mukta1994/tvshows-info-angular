import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

export class AllTypes
{
  public data: any;
  public name: any;
}

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent implements OnInit {

  all_types: AllTypes[]=[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getpopularShows();
    this.getTopRatedShows();
    this.getTodaysShows();
  }

  getpopularShows(){
    this.dataService.getpopularShows(1).subscribe((data:{results:any})=>{
      this.all_types.push( {
        data: data.results,
        name:"Popular shows"
      })
      console.log(this.all_types,"test")
    })

  }

  getTopRatedShows(){
    this.dataService.getTopRatedShows(1).subscribe((data:{results:any})=>{
      this.all_types.push({
        data: data.results,
        name:"Top rated shows"
      })
    })
  }

  getTodaysShows(){
    this.dataService.getTodaysAiring(1).subscribe((data:{results:any})=>{
      this.all_types.push({
        data: data.results,
        name:"Today airing"
      })
    })
  }
}
