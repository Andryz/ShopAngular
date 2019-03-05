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

const initialState: IData[] = [
    {
        title: 'string',
        descriptionShort: 'string',
        img: 'string',
        price: 2,
        discount: 5,
        sale: true,
        images: {
            img1: 'string',
            img2: 'string',
            img3: 'string',
        },
        description: {
            text1: 'string',
            text2: 'string',
            text3: 'string',
            text4: 'string',
        },
        specification: {
            height: 5,
            width: 7,
            depth: 8,
            material: 'string',
        },
        type: 'string'
    }
];

export function productsReducer (state: IData[] = initialState, action: ProductsAction){
    switch(action.type){
        case GET_PRODUCTS_SUCCESS:{
            return [...state, ...action.payload]
        }
        case GET_PRODUCTS_ERROR:
            return state;
        default:
            return state;
    }
}
