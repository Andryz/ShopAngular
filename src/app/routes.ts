import { AppComponent } from './app.component';
import { Route } from '@angular/router';
import { MainProductsComponent } from './content/main-products/main-products.component';
import { ContactsComponent } from './content/contacts/contacts.component';
import { OneProductComponent } from './content/one-product/one-product.component';
import { ProductsListComponent } from './content/products-list/products-list.component';
import { ResolveService } from './content/one-product/resolve.service';
import { ResolveNavService } from './services/resolve-nav.service';
import { CategoryGuard } from './services/category.guard';


export const routes: Route[] = [

    {
        path: '',
        component: MainProductsComponent,
        children: [
            {
                path: ':category',
                component: MainProductsComponent,
                canActivate: [
                    CategoryGuard
                ],
                children: [
                    {
                        path: ':id',
                        component: OneProductComponent,
                        resolve: {
                            product: ResolveService
                        }
                    },
                    {
                        path: '',
                        component: ProductsListComponent,
                    }
                      
                ]
            }
            ,
            {
                path: 'contacts',
                component: ContactsComponent
            }
        ]
        
    }
    
    

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