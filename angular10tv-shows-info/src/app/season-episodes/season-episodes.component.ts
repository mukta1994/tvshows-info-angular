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
  isChecked =false;
  directorList:any;
  screenWidth:any;
  dialogue_box:any;
  episodeShow=false;
  directors=[];
  errorMessage:any;

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;

  }

  openDialog(episode) {
    this.directorList=Array.prototype.map.call(episode.crew.filter(t=>t.department ==="Directing"), function(item) { return item.id; });
    this.directors=[]
    episode.crew.map((item) => { 
      this.dataService.getDirectors(item.id).subscribe((data)=>{
        this.directors.push(data) ;

      },(error) => {
        this.errorMessage = error.message; 
        console.log(this.errorMessage);
        alert("something went wrong with status code "+ error.status )
     })
    })
    console.log(this.directors);

    if(this.screenWidth<992)
      this.dialogue_box='90%';
    else
      this.dialogue_box='50%';

      console.log(episode)

    this.dialog.open(DialogDataExampleDialog, {
      width:this.dialogue_box,
      data: {
        episode: episode,
        directorList:this.directors
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
