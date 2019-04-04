import { ProductsAction, GET_PRODUCTS_SUCCESS, GetProductsSuccess, GET_PRODUCTS_ERROR } from '../actions/products.action';



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
    filter: {
        type: string;
    };
    id: number;
}

const initialState: IData[] = [
    {
        title: 'Стул "Pit"',
        descriptionShort: 'descroption',
        img: 'https://static-eu.insales.ru/images/products/1/2134/121276502/large_large_to0284.jpg',
        price: 200,
        discount: 12,
        sale: true,
        images: {
            img1: '../assets/img/hotel1.jpg',
            img2: '../assets/img/hotel1.jpg',
            img3: '../assets/img/hotel1.jpg'
        },
        description: {
            text1: 'nice text',
            text2: 'nice text',
            text3: 'nice text',
            text4: 'nice text'
        },
        specification: {
            height: 10,
            width: 10,
            depth: 10,
            material: 'text'
        },
        type: 'Стулья',
        filter: {
            type: 'chairs'
        },
        id: 134
    }
];

export function productsReducer (state: IData[] = initialState, action: ProductsAction){

    switch(action.type){
        case GET_PRODUCTS_SUCCESS:{
            return action.payload
        }
        case GET_PRODUCTS_ERROR:
            return state;
        default:
            return state;
    }
}
