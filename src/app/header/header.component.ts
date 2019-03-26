import { Component, OnInit } from '@angular/core';
import { ShareService } from '../services/share.service';
import { Observable } from 'rxjs';
import { HeaderLiveSearchService } from '../services/header-live-search.service';
import { IData } from '../store/reducers/products.reducer';
import { Store } from '@ngrx/store';
import { IStore } from '../store';
import { GetProductsPending } from '../store/actions/ptoducts.action';

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
  public products$;
  public arrTitle = [];
  public arrTitleUniq = [];


  
  constructor(private share: ShareService, private liveSearchAnswer: HeaderLiveSearchService, private _store: Store<IStore>) {
    this.navTitletext = share.getShareData();
    this.searchAnswer = liveSearchAnswer.getProducts();
  }




  public clickTitle(e){
    this.share.doClick(e);
  }

  
  public ngOnInit(): void{
    this._store.dispatch(new GetProductsPending());
    this.products$ = this._store.select('products');

    this.uniqArr()
    // console.log(this.arrTitleUniq);

    
  }

  inputLiveSearch(inputEvent, test): void{
    this.liveSearchAnswer.inputValueFilter(inputEvent);
  }

    // Метод
    // Уникайный Тип продукта
    uniqArr(){
      // console.log(this.products$.actionsObserver._value.payload);
      this.products$.subscribe((products: IData[])=>{

        for (let product of products){
          this.arrTitle.push(product.type); 
        }
        function uniq( value, index, self){
          return self.indexOf(value) === index;
        }
        this.arrTitleUniq = this.arrTitle.filter(uniq);
      })
    }
}
