import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { IStore } from 'src/app/store';
import { GetProductsPending } from 'src/app/store/actions/products.action';
import { ActivatedRoute } from '@angular/router';
import { IData } from 'src/app/store/reducers/products.reducer';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  
  public products$: Observable<IData[]>;


  public constructor(
    private _activatedRoute: ActivatedRoute,
    private _products: ProductsService
  ){}

  public ngOnInit(): void{
    this.products$ = this._activatedRoute.params
      .pipe(
        switchMap((params)=>{
         return  this._products.getProductsByCategory(params.category)
        })
      )

      
    
    
    
  }



}

