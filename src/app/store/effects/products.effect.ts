import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { IData } from '../reducers/products.reducer';
import { GET_PRODUCTS_PENDING, GetProductsSuccess, GetProductsError } from '../actions/ptoducts.action';
import { ProductsService } from 'src/app/products.service';

@Injectable()
export class ProductsEffects {

    @Effect()
    products$ = this._actions$
        .pipe(
            ofType(GET_PRODUCTS_PENDING),
            switchMap(() => this._products.getProducts()
                .pipe(
                    map((products: IData[]) => new GetProductsSuccess(products)),
                    catchError((err) => of(new GetProductsError(err)))
                ))
        );

    constructor(
        private _actions$: Actions,
        private _products: ProductsService
        // private _products: any
    ) {}
}

