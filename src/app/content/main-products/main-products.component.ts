import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IStore } from 'src/app/store';
import { GetProductsPending } from 'src/app/store/actions/ptoducts.action';

@Component({
  selector: 'app-main-products',
  templateUrl: './main-products.component.html',
  styleUrls: ['./main-products.component.scss']
})
export class MainProductsComponent implements OnInit {

  public products$;


  public constructor(
    private _store: Store<IStore>
  ){}

  public ngOnInit(): void{
    this._store.dispatch(new GetProductsPending());
    this.products$ = this._store.select('products');
  }

}
