import { ActionReducerMap } from '@ngrx/store';
import { productsReducer, IData } from './reducers/products.reducer';

export interface IStore {
    products: IData[];
    currentProduct: IData;
}

export  const reducers: ActionReducerMap<any> = {
    products: productsReducer
};
