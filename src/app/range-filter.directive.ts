import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRangeFilter]'
})
export class RangeFilterDirective {

  el: HTMLInputElement = this.element.nativeElement;

  // @HostListener('mousedown') onMouseDown(){
  //   console.log('click');
  //   console.dir(this.el);
  // }

  @HostListener('mousemove') onMouseMove(){
    // console.log('Move');
    console.dir(this.el.value);
  }

  constructor(private element: ElementRef) { }

}
