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
  errorMessage = "";

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: any;


  constructor(private dataService: DataService, private router: Router) { }
  searchText = "";

  ngOnInit(): void {
    if (this.myControl.value != null) {
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this.getData(value))
      );
    }
  }


  onSubmit(search: string) {
    this.router.navigate(['results/' + search], {
    });
    this.shows = [];
    this.searchEvent.emit(search);
  }

  gotoDetails(id: any) {
    this.router.navigate(['details/' + id], {
    });
  }

  //search result which is used in autocomplete
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
      },
        (error) => {
          this.handleError(error);
        })
    }
    else
      this.shows = [];

  }

  handleError(err) {
    this.errorMessage = err.message;
    console.log(this.errorMessage);
    alert("something went wrong with status code " + err.status);
    this.router.navigate(["/"]);
  }


}
