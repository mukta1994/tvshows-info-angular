import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor(private _Activatedroute:ActivatedRoute,private dataService: DataService) { 
    this.getData();
  }
  defaultElevation = 2;
  raisedElevation = 8;
  i=0;
  dataset =  [];
  query=this._Activatedroute.snapshot.paramMap.get("query");
  ngOnInit(): void {
     this.getData();

  }

  onScroll() {
    this.getData()
  }
  getData(){
    this.i++;
  
    this.dataService.sendGetRequest(this.query,this.i).subscribe((data:{ results: any[]} )=>{
      console.log(data);
      this.dataset = [...this.dataset];
      data.results.map((item) => { 
        this.dataService.getDetails(item.id).subscribe((data)=>{
          this.dataset.push(data) 
        })
      })
    });
  }

 

}



