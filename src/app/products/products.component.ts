import { Component, OnInit, Input } from '@angular/core';
import { IData } from '../store/reducers/products.reducer';
import { ShareService } from '../services/share.service';
import { Observable } from 'rxjs';
import { HeaderLiveSearchService } from '../services/header-live-search.service';
import { ActivatedRoute } from '@angular/router';

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
  public productsCategory;

  constructor(private share: ShareService, private liveSearchAnswer: HeaderLiveSearchService, private _activatedRoute: ActivatedRoute) {
    this.navTitletext = share.getShareData();
    this.searchAnswer = liveSearchAnswer.getProducts();
   }

  ngOnInit() {
    // console.log(this._activatedRoute.snapshot.data.product);
    // this.productsCategory = this._activatedRoute.snapshot.data.product;
    // console.log(this._activatedRoute.snapshot.data.product);
    // console.log(this.searchAnswer);
  }
   
}
