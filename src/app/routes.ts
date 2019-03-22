import { AppComponent } from './app.component';
// import { Route } from '@angular/compiler/src/core';
import { Route } from '@angular/router';
import { MainProductsComponent } from './content/main-products/main-products.component';

export const routes: Route[] = [

    {
        path: 'home', 
        component: MainProductsComponent 
    },
    {
        path: '', 
        redirectTo: 'home',
        pathMatch: 'full'
    }

]