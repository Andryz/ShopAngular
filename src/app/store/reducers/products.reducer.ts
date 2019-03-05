import { ProductsAction, GET_PRODUCTS_SUCCESS, GetProductsSuccess, GET_PRODUCTS_ERROR } from '../actions/ptoducts.action';


export interface IData {
    title: string;
    descriptionShort: string;
    img: string;
    price: number;
    discount: number;
    sale: boolean;
    images: {
        img1: string;
        img2: string;
        img3: string;
    };
    description: {
        text1: string;
        text2: string;
        text3: string;
        text4: string;
    };
    specification: {
        height: number;
        width: number;
        depth: number;
        material: string;
    };
    type: string;
}

const initialState: IData[] = [];

export function productsReducer (state: IData[] = initialState, action: ProductsAction){
    switch(action.type){
        case GET_PRODUCTS_SUCCESS:
            return (action as GetProductsSuccess).payload;
        case GET_PRODUCTS_ERROR:
            return state;
        default:
            return state;
    }
}
