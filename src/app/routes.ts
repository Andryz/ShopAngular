import { AppComponent } from './app.component';
import { Route } from '@angular/router';
import { MainProductsComponent } from './content/main-products/main-products.component';
import { ContactsComponent } from './content/contacts/contacts.component';
import { OneProductComponent } from './content/one-product/one-product.component';
import { ProductsListComponent } from './content/products-list/products-list.component';
import { ResolveService } from './content/one-product/resolve.service';


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
                path: ':id',
                component: OneProductComponent,
                resolve: {
                    product: ResolveService
                }
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