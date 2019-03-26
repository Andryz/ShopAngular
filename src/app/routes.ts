import { AppComponent } from './app.component';
// import { Route } from '@angular/compiler/src/core';
import { Route } from '@angular/router';
import { MainProductsComponent } from './content/main-products/main-products.component';
import { ContactsComponent } from './content/contacts/contacts.component';
import { OneProductComponent } from './content/one-product/one-product.component';
import { ProductsComponent } from './products/products.component';
import { ProductsListComponent } from './content/products-list/products-list.component';

export const routes: Route[] = [

    {
        path: 'products', 
        component: MainProductsComponent,
        children: [
            {
                path: '',
                component: ProductsListComponent
            },
            {
                path: ':title',
                component: OneProductComponent
            }
        ]
    },
    {
        path: 'contacts',
        component: ContactsComponent
    }
    // ,
    // {
    //     path: '**',
    //     redirectTo: 'products',
    //     pathMatch: 'full'
    // }
    // , 
    // {
    //     path: '', 
    //     redirectTo: 'products',
    //     pathMatch: 'full'
    // }

]