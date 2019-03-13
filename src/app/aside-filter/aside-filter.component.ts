import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside-filter',
  templateUrl: './aside-filter.component.html',
  styleUrls: ['./aside-filter.component.scss']
})
export class AsideFilterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public openFilter(event: MouseEvent | any): void {
    const parentFilterBlock: HTMLDivElement = event.target.parentNode;
    const filterButtonHeight: number = event.target.getBoundingClientRect().height;
    const filterUlHeight: number =  event.target.nextElementSibling.getBoundingClientRect().height;
    parentFilterBlock.style.height = (filterButtonHeight + filterUlHeight) + 30 + "px";
    console.dir(event.target);
    console.dir(event.target.nextElementSibling);
    console.dir(parentFilterBlock);

  }
}
