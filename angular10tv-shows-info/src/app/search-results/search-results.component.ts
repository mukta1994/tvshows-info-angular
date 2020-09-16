import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DataService } from '../services/data.service';



@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  loadpage: any;
  selected_filter: any;
  filter_type: any;
  errorMessage: any;

  constructor(private _Activatedroute: ActivatedRoute, private dataService: DataService, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

    this.filter_type = "name asc";
    this.selected_filter = "name asc";

    this.loadpage = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
      }
    });

  }

  i = 0;
  j = 0;
  dataset = [];
  query: any;
  type: string;

  ngOnInit(): void {
    this.dataset = [];
    this.callFunctions();

  }
  //switch condition which checks on snapshot parameter and relevent function is called
  callFunctions() {
    switch (this._Activatedroute.snapshot.paramMap.get("type")) {
      case 'popularShows': {
        this.getAllPopularshows();
        break;
      }
      case 'topShows': {
        this.getAlltopShows();
        break;
      }

      case 'airingToday': {
        this.getAllAiringshows();
        break;
      }
      default: {

        break;
      }
    }
    if (this._Activatedroute.snapshot.paramMap.get("query")) {
      this.query = this._Activatedroute.snapshot.paramMap.get("query");
      this.getData(this.query);
    }
  }
  onSelectionChange(event) {
    this.filter_type = event.value;
  }

  //this function is also called on scroll
  onScroll() {
    this.callFunctions();
  }

  //get search results 
  getData(event) {
    this.i++;
    if (event == undefined)
      event = this._Activatedroute.snapshot.paramMap.get("query");
    this.dataService.sendGetRequest(event, this.i).subscribe((data: { results: any[] }) => {
      this.dataset = [...this.dataset];
      data.results.map((item) => {
        this.dataService.getDetails(item.id).subscribe((data) => {
          this.dataset.push(data)
        },
          (error) => {
            this.handleError(error);

          })
      })
    },
      (error) => {
        this.handleError(error);
      },
    );
  }

  //function to get popular shows on TV
  getAllPopularshows() {
    this.j++
    this.dataService.getpopularShows(this.j).subscribe((data: { results: any[] }) => {
      this.dataset = [...this.dataset];
      this.pushItems(data.results);
    },
      (error) => {
        this.handleError(error);
      })
  }

  //function to get Top rated shows on TV
  getAlltopShows() {
    this.j++
    this.dataService.getTopRatedShows(this.j).subscribe((data: { results: any[] }) => {
      this.dataset = [...this.dataset];
      this.pushItems(data.results);
    },
      (error) => {
        this.handleError(error);
      });
  }

  //function to get shows which are airing today
  getAllAiringshows() {
    this.j++
    this.dataService.getTodaysAiring(this.j).subscribe((data: { results: any[] }) => {
      this.dataset = [...this.dataset];
      this.pushItems(data.results);

    },
      (error) => {
        this.handleError(error);
      })
  }

  pushItems(items) {
    items.map((item) => {
      this.dataset.push(item)
    })
  }

  handleError(err) {
    this.errorMessage = err.message;
    console.log(this.errorMessage);
    alert("something went wrong with status code " + err.status);
    this.router.navigate(["/"]);
  }

  // this is called when search component is rendered in search-results components
  fetchResults(eve) {
    this.dataset = [];
    this.i = 0;
    this.getData(eve);
  }

  gotoDetails(id: any) {
    this.router.navigate(['details/' + id], {
    });
  }


  ngOnDestroy() {
    if (this.loadpage) {
      this.loadpage.unsubscribe();
    }
  }



}



