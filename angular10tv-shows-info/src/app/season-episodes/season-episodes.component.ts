import { Component, OnInit,Input,Inject,HostListener } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DataService } from '../services/data.service';


export interface DialogData {
  episode: any;
  directorList:any
}



@Component({
  selector: 'app-season-episodes',
  templateUrl: './season-episodes.component.html',
  styleUrls: ['../details/details.component.css']
})
export class SeasonEpisodesComponent implements OnInit {

  constructor(public dialog: MatDialog,private dataService: DataService) { }
  @Input() season_data:any;
  defaultElevation = 2;
  raisedElevation = 8;
  isChecked = false;
  directorList:any;
  screenWidth:any;
  dialogue_box:any;




  ngOnInit(): void {
  }

  openDialog(episode) {
    //this.directorList=Object.keys(episode.crew).map(function(k){return episode.crew[name]}).join(",")
    this.directorList=Array.prototype.map.call(episode.crew.filter(t=>t.job ==='Director'), function(item) { return item.name; }).join(",");
    if(this.screenWidth<992)
      this.dialogue_box='80%';
    else
      this.dialogue_box='50%';

    this.dialog.open(DialogDataExampleDialog, {
      width:this.dialogue_box,
      data: {
        episode: episode,
        directorList:this.directorList
      }
    });
  }



  @HostListener('window:resize', ['$event'])
  onResize(event?) {
     this.screenWidth = window.innerWidth;
  }

}

@Component({
  selector: 'dialog-data',
  templateUrl: 'dialog-data.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
