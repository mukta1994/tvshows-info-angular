import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DataService } from '../services/data.service';

export interface DialogData {
   episode: any;
   directorList:any
}


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
  seasonEpisodes=[]
  isChecked = false;
  directorList:any;

  ngOnInit(): void {
    this.dataService.getDetails(this.id).subscribe((data)=>{
      this.details=data
      console.log(this.details);
      this.dataService.getSeasons(this.details.seasons,this.details.id);
      
      this.details.seasons.map((item) => { 
        this.dataService.getSeasons(item.season_number,this.details.id).subscribe((data)=>{
          this.seasonEpisodes.push(data) 
        })
      })
      console.log(this.seasonEpisodes)

    })
  }

  openDialog(episode) {
    //this.directorList=Object.keys(episode.crew).map(function(k){return episode.crew[name]}).join(",")
    this.directorList=Array.prototype.map.call(episode.crew.filter(t=>t.job ==='Director'), function(item) { return item.name; }).join(",");
    console.log(this.directorList,"ghjk");
    this.dialog.open(DialogDataExampleDialog, {
      width:'50%',
      data: {
        episode: episode,
        directorList:this.directorList
      }
    });
  }

}

@Component({
  selector: 'dialog-data',
  templateUrl: 'dialog-data.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
