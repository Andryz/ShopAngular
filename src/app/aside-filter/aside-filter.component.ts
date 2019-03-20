import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside-filter',
  templateUrl: './aside-filter.component.html',
  styleUrls: ['./aside-filter.component.scss']
})
export class AsideFilterComponent implements OnInit {

  public rangeValue: number;
  constructor() { }

  ngOnInit() {
  }

}
