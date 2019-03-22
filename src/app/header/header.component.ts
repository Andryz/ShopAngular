import { Component, OnInit } from '@angular/core';
import { ShareService } from '../services/share.service';
import { Observable } from 'rxjs';
import { HeaderLiveSearchService } from '../services/header-live-search.service';
import { IData } from '../store/reducers/products.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  public navTitletext: Observable<string>;
  public toggleHide: string = 'show';
  public isShow: boolean = false;
  public searchAnswer: Observable<IData[]>;


  
  constructor(private share: ShareService, private liveSearchAnswer: HeaderLiveSearchService) {
    this.navTitletext = share.getShareData();
    this.searchAnswer = liveSearchAnswer.getProducts();
  }

  public clickTitle(e){
    this.share.doClick(e);
  }

  

  ngOnInit() {
    
  }

  inputLiveSearch(inputEvent, test): void{
    this.liveSearchAnswer.inputValueFilter(inputEvent);
    // console.log(inputEvent);
    console.dir(test);
  }
}
