import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  private navTitletext: string;
  // public onClick: EventEmitter<string> = new EventEmitter();

  private shareSubject$$ = new BehaviorSubject(this.navTitletext);

  public getShareData() {
    return this.shareSubject$$.asObservable();
  }
  
  public doClick(e){
    this.shareSubject$$
    .next(this.navTitletext = e.target.textContent)
  }
  constructor() { 
  }
}
