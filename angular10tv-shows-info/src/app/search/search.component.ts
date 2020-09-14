import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() searchEvent = new EventEmitter();
  i = 0;
  shows = [];
  test = "";

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: any;


  constructor(private dataService: DataService, private router: Router) { }
  searchText = "";

  ngOnInit(): void {
    //   this.dataService.sendGetRequest().subscribe((data:{ results: any[]} )=>{
    //     console.log(data);
    //     this.dataset = data.results;
    // });
    if (this.myControl.value != null) {
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this.getData(value))
      );
    }
  }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  // }

  onSubmit(search: string) {
    this.router.navigate(['results/' + search], {
    });
    this.shows = [];
    this.searchEvent.emit(search);
  }

  getData(searchText) {
    if (searchText != "") {
      this.shows = [];
      this.dataService.sendGetRequest(searchText, 1).subscribe((data: { results: any[] }) => {
        this.shows = [...this.shows];
        data.results.map((item) => {
          this.dataService.getDetails(item.id).subscribe((data) => {
            this.shows.push(data)
          })
        })
      });
    }
    else
    this.shows = [];

  }


}
