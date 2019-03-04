import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

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
    },
    description: {
        text1: string;
        text2: string;
        text3: string;
        text4: string;
    },
    specification: {
        height: number;
        width: number;
        depth: number;
        material: string;
    },
    type: string;
 }

export const data: IData[] = [
    {
        title: 'title',
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
        title: 'title',
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
        title: 'title',
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
        title: 'title',
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
        title: 'title',
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
        title: 'title',
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
    }
];
export const data$: Observable<IData[]> = of(data)
    .pipe(delay(300));
