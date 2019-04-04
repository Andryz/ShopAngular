import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IData } from 'src/app/store/reducers/products.reducer';


export const productsData: IData[] = [
    {
        title: 'Диван Marlborough от Eichholtz',
        descriptionShort: 'descroption',
        img: 'https://static-eu.insales.ru/images/products/1/2267/121276635/large_large_ei6181.jpg',
        price: 200,
        discount: 12,
        sale: true,
        images: {
            img1: 'https://static-eu.insales.ru/images/products/1/2267/121276635/large_large_ei6181.jpg',
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
        type: 'Диваны',
        filter: {
            type: 'sofas'
        },
        id: 1
    },
    {
        title: 'Стул Pit',
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
        id: 2
    },
    {
        title: 'Стол Maison',
        descriptionShort: 'descroption',
        img: 'https://static-eu.insales.ru/images/products/1/2115/121276483/large_large_et0015.jpg',
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
        type: 'Столы',
        filter: {
            type: 'tables'
        },
        id: 3
    },
    {
        title: 'Комплект мебели Bouton',
        descriptionShort: 'descroption',
        img: 'https://static-eu.insales.ru/images/products/1/4196/113881188/large_%D0%BA%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%82.jpg',
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
        type: 'Комплекты',
        filter: {
            type: 'kits'
        },
        id: 4
    },
    {
        title: 'Лампа Heat Felt',
        descriptionShort: 'descroption',
        img: 'https://static-eu.insales.ru/images/products/1/243/113860851/large_td0099_201.jpg',
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
        type: 'Освещение',
        filter: {
            type: 'lighting'
        },
        id: 5
    },
    {
        title: 'Диван Rebel от Andrew Martin',
        descriptionShort: 'descroption',
        img: 'https://static-eu.insales.ru/images/products/1/2459/113387931/large_01_amrebelplain_main_1.jpg',
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
        type: 'Диваны и кресла',
        filter: {
            type: 'sofas and armchairs'
        },
        id: 6
    }
];

export interface ICategory {
    name: string
    title: string
}
export interface ICategoryResponse {
    items: ICategory[]
}

export const fakeCategory: ICategoryResponse = {
    items:[
        {
            name: 'sofas',
            title: 'ДИВАНЫ'
        },
        {
            name: 'chairs',
            title: 'СТУЛЬЯ'

        },
        {
            name: 'tables',
            title: 'СТОЛЫ'
        },
        {
            name: 'kits',
            title: 'КОМПЛЕКТЫ'
        },
        {
            name: 'lighting',
            title: 'ОСВЕЩЕНИЕ'
        },
        {
            name: 'sofas-chairs',
            title: 'ДИВАНЫ И КРЕСЛА'
        }
    ]
}



