import { Component, OnInit, Inject,HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
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
  defaultElevation = 2;
  raisedElevation = 8;
  seasonEpisodes:any;
  directorList:any;
  viewmore=false;
  selected_season:any;
  default_path:any;



  ngOnInit(): void {
    this.dataService.getDetails(this.id).subscribe((data)=>{
      this.details=data;
      console.log(this.details)
      if(this.details && this.details.seasons.length){
      this.selected_season=this.details.seasons[0];
      this.dataService.getSeasons(this.details.seasons[0].season_number,this.details.id).subscribe((data)=>{
        this.seasonEpisodes=data;
        console.log(this.seasonEpisodes,"season");

      })
    }
      // this.dataService.getSeasons(this.details.seasons,this.details.id);   
      // this.details.seasons.map((item) => { 
      //   this.dataService.getSeasons(item.season_number,this.details.id).subscribe((data)=>{
      //     this.seasonEpisodes.push(data) 
      //   })
      // })

    })
  }


  onSeasonChange(selected_data,id){     
    this.getEpisodes(selected_data,id);
  }

  getEpisodes(sel_data,id){
    this.dataService.getSeasons(sel_data.value.season_number,id).subscribe((data)=>{
      this.seasonEpisodes=data;
    })
  }





}


