import { Directive, HostBinding, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appOpenFilter]'
})
export class OpenFilterDirective {

  height: number;
  isClick = false ;
  el = this.element.nativeElement;


  @HostListener('click', ["$event"]) onclick(event: MouseEvent | any){
    
    if(event.target.nodeName === "BUTTON"){
      this.isClick=!this.isClick;
      this.el.childNodes[0].childNodes[1].classList.toggle("up-arrow");
      this.height = this.el.childNodes[1].childNodes[0].getBoundingClientRect().height;
      if(this.isClick){
        this.el.childNodes[1].style.height = this.height + "px";
      }else{
        this.el.childNodes[1].style.height = "0px";
      }
    }
    // console.log(event.target.nodeName);
  } 

  


  constructor(private element: ElementRef, private renderer: Renderer2) {

  }




}
