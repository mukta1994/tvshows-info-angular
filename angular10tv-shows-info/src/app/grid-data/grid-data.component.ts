import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid-data',
  templateUrl: './grid-data.component.html',
  styleUrls: ['./grid-data.component.css']
})
export class GridDataComponent implements OnInit {

  constructor() { }
  @Input() data_set:any;
  @Input() id:number;


  ngOnInit(): void {
  }

}
