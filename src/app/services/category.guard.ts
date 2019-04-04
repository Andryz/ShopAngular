import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductsService } from './products.service';
import { map } from 'rxjs/operators';

@Injectable()
export class CategoryGuard implements CanActivate{

    constructor(
        private _products: ProductsService
    ){}

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean>{
        console.log(route.params.category)
        let category = route.params.category
            
        return this._products.getProductTypes()
        .pipe(
            map(products=>{
                
                return Boolean(products.find(product=> product.name === category))
                
            })
        )
    }
}