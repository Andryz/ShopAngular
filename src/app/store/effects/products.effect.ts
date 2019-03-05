import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap, mergeMap } from 'rxjs/operators';
import { IData } from '../reducers/products.reducer';
import { GET_PRODUCTS_PENDING, GetProductsSuccess, GetProductsError } from '../actions/ptoducts.action';
import { ProductsService } from 'src/app/services/products.service';



@Injectable()
export class ProductsEffects {

    constructor(
        private _actions$: Actions,
        private products: ProductsService
    ) {}

    @Effect()
    products$ = this._actions$
        .pipe(
            ofType(GET_PRODUCTS_PENDING),
            // tap((e)=>{console.log(this._actions$, e);}),
            mergeMap(() => this.products.getProducts()
                .pipe(
                    map((products: IData[]) => new GetProductsSuccess(products)),
                    catchError((err) => of(new GetProductsError(err)))
                ))
                
        );

    
}

