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

  public openFilter(event: MouseEvent | any): void {
    if(event.target.nodeName === "BUTTON"){
      
      const parentFilterBlock: HTMLDivElement = event.target.parentNode;
      const filterButtonHeight: number = event.target.getBoundingClientRect().height;
      const filterUlHeight: number =  event.target.nextElementSibling.getBoundingClientRect().height;
      const arrow: HTMLSpanElement = event.target.childNodes[1];

      arrow.classList.toggle("up-arrow");


      if(parentFilterBlock.getBoundingClientRect().height > filterButtonHeight){
        parentFilterBlock.style.height = filterButtonHeight + "px";
      }else{
        parentFilterBlock.style.height = (filterButtonHeight + filterUlHeight) + "px";
      }
      
      // console.dir(event.target);
      // console.dir(arrow);
    }

    console.dir(event.target);
  }

  public changeFilterRange(rangeValue: number, event): void{
    this.rangeValue = rangeValue;
    const maxMoney: HTMLSpanElement = event.target.previousSibling;
    const maxMoneyPosition: number = rangeValue / (event.target.max / 100);
    // console.log(this.rangeValue);
    // console.dir(event.target.getBoundingClientRect().width);
    // console.dir(event.target.max);
    // console.log(rangeValue);
    // console.dir(event.target.max / 100);
    maxMoney.style.left = "calc(" + maxMoneyPosition + "% - 0px)";
    // console.dir(rangeValue / (event.target.max / 100));
    // console.dir(event.target);
  }

}
