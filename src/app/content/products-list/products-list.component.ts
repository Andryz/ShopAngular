import { Component, OnInit, Input } from '@angular/core';
import { IData } from 'src/app/store/reducers/products.reducer';
import { Observable } from 'rxjs';
import { ShareService } from 'src/app/services/share.service';
import { HeaderLiveSearchService } from 'src/app/services/header-live-search.service';
import { Store } from '@ngrx/store';
import { IStore } from 'src/app/store';
import { GetProductsPending } from 'src/app/store/actions/ptoducts.action';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  
  public products$;


  public constructor(
    private _store: Store<IStore>
  ){}

  public ngOnInit(): void{
    this._store.dispatch(new GetProductsPending());
    this.products$ = this._store.select('products');
  }



}
