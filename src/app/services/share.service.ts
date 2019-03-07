import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  private navTitletext: string;
  public onClick: EventEmitter<string> = new EventEmitter();
  
  public doClick(e){
    this.navTitletext = e.target.textContent;
    this.onClick.emit(this.navTitletext);
  }
  constructor() { 
    // this.onClick.emit(this.text);
  }
}
