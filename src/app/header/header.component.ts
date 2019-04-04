import { Component, OnInit } from '@angular/core';
import { ShareService } from '../services/share.service';
import { Observable } from 'rxjs';
import { HeaderLiveSearchService } from '../services/header-live-search.service';
import { IData } from '../store/reducers/products.reducer';
import { ProductsService } from '../services/products.service';
import { ICategoryResponse, ICategory } from '../common/data/data';

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
  public categories$: Observable<ICategory[]>;
  public arrTitle = [];
  public arrTitleUniq = [];


  
  constructor(
    private share: ShareService, 
    private liveSearchAnswer: HeaderLiveSearchService, 
    private _products: ProductsService
    ) {}





  
  ngOnInit(): void{
    this.navTitletext = this.share.getShareData();
    this.searchAnswer = this.liveSearchAnswer.getProducts();
    this.categories$ = this._products.getProductTypes();
  }

  inputLiveSearch(inputEvent, test): void{
    this.liveSearchAnswer.inputValueFilter(inputEvent);
  }


}
