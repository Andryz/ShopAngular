import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IData } from '../store/reducers/products.reducer';
import { productsData } from '../common/data/data';
import { delay, map } from 'rxjs/operators';

@Injectable()
export class ProductsService {

    public constructor(
        private _http: HttpClient,
    ) { }

    public getProducts(): Observable<IData[]> {
        // return this._http.get<IData[]>(`https://api.github.com/repositories?since=36`)
        return of(productsData)
            .pipe(delay(1000));
    }

    public getProduct(id: number): Observable<IData> {
        return of(productsData)
            .pipe(
                map((products: IData[]) => {
                    console.log(products, id);
                    return products.find(product => product.id === id);
                })
            )
            .pipe(delay(1000));

    }

    // public getProduct(id: string): Observable<IData> {
    //     return this._http.get<IData>(`/products/${id}`);
    // }
}