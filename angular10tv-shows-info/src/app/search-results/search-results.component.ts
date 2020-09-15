import { Component, OnInit,Input, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor(private _Activatedroute:ActivatedRoute,private dataService: DataService) { 
    this.getData(this.query);
  }
  
  @Input() search_data:any;
  i=0;
  dataset = [];
  query:any;
  
  ngOnInit(): void {
    this.query=this._Activatedroute.snapshot.paramMap.get("query");
     this.getData(this.query);
    
  }

  onScroll() {
    this.getData(this.query)
  }
  getData(event){
    this.i++;
    if(event==undefined)
      event=this._Activatedroute.snapshot.paramMap.get("query");
    this.dataService.sendGetRequest(event,this.i).subscribe((data:{ results: any[]} )=>{
      this.dataset = [...this.dataset];
      data.results.map((item) => { 
        this.dataService.getDetails(item.id).subscribe((data)=>{
          this.dataset.push(data) 
        })
      })
    });
  }
  

  fetchResults(eve){
    this.dataset = [];
    this.i=0;
    this.getData(eve);

  }

 

}



