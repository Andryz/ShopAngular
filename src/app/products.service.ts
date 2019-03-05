import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IData } from './store/reducers/products.reducer';

@Injectable()
export class ProductsService {

    public constructor(
        private _http: HttpClient,
    ) {}

    public getProducts(): Observable<IData[]> {
        // example const user: IUser = { firstName: 'Igor' };
        return this._http.get<IData[]>(`/products`);
    }

    public getProduct(id: string): Observable<IData> {
        return this._http.get<IData>(`/products/${id}`);
    }
}