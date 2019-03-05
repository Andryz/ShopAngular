import { Component, OnInit } from '@angular/core';
import { productsData$ } from './common/data/data';
import { IStore } from './store';
import { Store } from '@ngrx/store';
import { GetProductsPending } from './store/actions/ptoducts.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'shop';

  // public products$ = productsData$;
  public products$;


  public constructor(
    private _store: Store<IStore>
  ){}

  public ngOnInit(): void{
    this._store.dispatch(new GetProductsPending());
    this.products$ = this._store.select('products');
  }
}
