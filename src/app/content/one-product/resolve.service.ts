import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { skip, take, map } from 'rxjs/operators';
import { ProductsService } from 'src/app/services/products.service';
import { IData } from 'src/app/store/reducers/products.reducer';

@Injectable()
export class ResolveService implements Resolve<IData | false> {

  constructor(
    private _router: Router,
    private _products:  ProductsService

  ) { }

  public resolve(route: ActivatedRouteSnapshot): Observable<IData | false> {
    let productId: number = +route.params.id;
    return this._products.getProduct(productId)
      .pipe(
        map(product=>{
          if(product) return product
          this._router.navigate(['/'])
          return false
        })
      )
  }


}
