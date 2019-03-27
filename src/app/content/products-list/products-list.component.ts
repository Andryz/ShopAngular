import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { IStore } from 'src/app/store';
import { GetProductsPending } from 'src/app/store/actions/products.action';

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
