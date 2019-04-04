import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { skip, take, map } from 'rxjs/operators';
import { ProductsService } from 'src/app/services/products.service';
import { IData } from 'src/app/store/reducers/products.reducer';

@Injectable()
export class ResolveNavService implements Resolve<boolean> {

  constructor(
    private _router: Router,
    private _products:  ProductsService

  ) { }

  public resolve(route: ActivatedRouteSnapshot): Observable<boolean> {

    let productType: string = route.params.type;
    
    return this._products.getProductTypes()
      .pipe(
        map(product=>{
          if(product) return true
          this._router.navigate(['/'])
          return false
        })
      )
  }


}
