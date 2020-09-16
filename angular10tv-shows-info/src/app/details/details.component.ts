import { Component, OnInit, Inject,HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private _Activatedroute:ActivatedRoute,private dataService: DataService,public dialog: MatDialog) { }
  id=this._Activatedroute.snapshot.paramMap.get("id");
  details:any;
  seasonEpisodes=[];
  directorList:any;
  viewmore=false;
  selected_season:any;
  default_path:any;
  errorMessage:any;

  ngOnInit(): void {
    this.dataService.getDetails(this.id).subscribe((data)=>{
      this.details=data;
      console.log(this.details)
      if(this.details && this.details.seasons.length){
        this.selected_season= this.details.seasons.sort((a, b) =>(<any>new Date(b.air_date)  - <any>new Date(a.air_date)))[0]
      this.dataService.getSeasons(this.details.seasons[0].season_number,this.details.id).subscribe((data)=>{
        this.seasonEpisodes.push(data);

      },
      (error) => {
          this.errorMessage = error.message; 
          console.log(this.errorMessage);
          console.log("something went wrong with status code "+ error.status )
       },
       )
    }
    })
  }


  onSeasonChange(selected_data,id){     
    this.getEpisodes(selected_data,id);
  }

  getEpisodes(sel_data,id){
    if(sel_data.value=='all'){
      this.seasonEpisodes=[];
      this.details.seasons.map((item) => { 
        this.dataService.getSeasons(item.season_number,this.details.id).subscribe((data)=>{
          this.seasonEpisodes.push(data) ;

        },(error) => {
          this.errorMessage = error.message; 
          console.log(this.errorMessage);
          console.log("something went wrong with status code "+ error.status )
       })
      })
     

    }
    else{
      this.seasonEpisodes=[];
      this.dataService.getSeasons(sel_data.value.season_number,id).subscribe((data)=>{
        this.seasonEpisodes.push(data);
        //return this.data.sort((a, b) => {
      },(error) => {
        this.errorMessage = error.message; 
        console.log(this.errorMessage);
        console.log("something went wrong with status code "+ error.status )
     })

    }
   
  }





}


