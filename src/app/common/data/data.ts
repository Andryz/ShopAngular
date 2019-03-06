import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IData } from 'src/app/store/reducers/products.reducer';


export const productsData: IData[] = [
    {
        title: 'Диваны',
        descriptionShort: 'descroption',
        img: '../assets/img/hotel1.jpg',
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
        type: 'Диваны'
    },
    {
        title: 'Стулья',
        descriptionShort: 'descroption',
        img: '../assets/img/hotel1.jpg',
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
        type: 'Стулья'
    },
    {
        title: 'Столы',
        descriptionShort: 'descroption',
        img: '../assets/img/hotel1.jpg',
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
        type: 'Столы'
    },
    {
        title: 'Комплекты',
        descriptionShort: 'descroption',
        img: '../assets/img/hotel1.jpg',
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
        type: 'Комплекты'
    },
    {
        title: 'Освещение',
        descriptionShort: 'descroption',
        img: '../assets/img/hotel1.jpg',
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
        type: 'Освещение'
    },
    {
        title: 'Диваны и кресла',
        descriptionShort: 'descroption',
        img: '../assets/img/hotel1.jpg',
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
        type: 'Диваны и кресла'
    }
];
export const productsData$: Observable<IData[]> = of(productsData)
    .pipe(delay(300));
