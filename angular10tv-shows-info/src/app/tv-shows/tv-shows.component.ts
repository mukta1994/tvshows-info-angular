import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

export class AllTypes
{
  public data: any;
  public name: string;
  public param:string;
}

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent implements OnInit {

  all_types: AllTypes[]=[];
  errorMessage="";

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getpopularShows();
    this.getTopRatedShows();
    this.getTodaysShows();
  }

  //get all popular shows
  getpopularShows(){
    this.dataService.getpopularShows(1).subscribe((data:{results:any})=>{
      this.all_types.push( {
        data: data.results,
        name:"Popular Shows",
        param:"popularShows"

      })
      console.log(this.all_types,"test")
    },(error) => {
      this.handleError(error);
     })

  }

    //get all top rated shows
  getTopRatedShows(){
    this.dataService.getTopRatedShows(1).subscribe((data:{results:any})=>{
      this.all_types.push({
        data: data.results,
        name:"Top Rated Shows",
        param:"topShows"

      })
    },(error) => {
      this.handleError(error);
     })
  }

    //get all today's shows
  getTodaysShows(){
    this.dataService.getTodaysAiring(1).subscribe((data:{results:any})=>{
      this.all_types.push({
        data: data.results,
        name:"Airing Today",
        param:"airingToday"
      })
    },(error) => {
      this.handleError(error);
     })
  }

  handleError(err){
    this.errorMessage = err.message; 
    console.log(this.errorMessage);
    alert("something went wrong with status code "+err.status);
  }
}
