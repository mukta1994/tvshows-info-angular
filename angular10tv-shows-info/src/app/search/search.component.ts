import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

 
  constructor(private dataService: DataService) { }
  searchText="";

  ngOnInit(): void {
  //   this.dataService.sendGetRequest().subscribe((data:{ results: any[]} )=>{
  //     console.log(data);
  //     this.dataset = data.results;
  // });
}


}
