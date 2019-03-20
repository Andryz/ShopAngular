import { Component, OnInit, Input } from '@angular/core';
import { IData } from '../store/reducers/products.reducer';
import { ShareService } from '../services/share.service';
import { Observable } from 'rxjs';
import { HeaderLiveSearchService } from '../services/header-live-search.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  
  @Input()
  public products: IData[];
  
  public navTitletext: Observable<string>;
  public searchAnswer: Observable<IData[]>;

  constructor(private share: ShareService, private liveSearchAnswer: HeaderLiveSearchService) {
    this.navTitletext = share.getShareData();
    this.searchAnswer = liveSearchAnswer.getProducts();
   }

  ngOnInit() {
    // console.log(this.searchAnswer);
  }
   
}
