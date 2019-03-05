import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IData } from '../store/reducers/products.reducer';
import { productsData } from '../common/data/data';

@Injectable()
export class ProductsService {

    public constructor(
        private _http: HttpClient,
    ) {}

    public getProducts(): Observable<IData[]> {
        // return this._http.get<IData[]>(`https://api.github.com/repositories?since=36`)
        return of(productsData)
    }

    // public getProduct(id: string): Observable<IData> {
    //     return this._http.get<IData>(`/products/${id}`);
    // }
}