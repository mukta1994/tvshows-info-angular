import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';



@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css']
})
export class TvshowsComponent implements OnInit {

  constructor(private dataService: DataService) { }
  dataset =  [];
  searchText="";

  ngOnInit(): void {
    this.dataService.sendGetRequest().subscribe((data:{ genres: any[]} )=>{
      console.log(data);
      this.dataset = data.genres;
  });
}
  //dataset = ['MDB', 'Angular', 'Bootstrap', 'Framework', 'SPA', 'React', 'Vue'];

}
