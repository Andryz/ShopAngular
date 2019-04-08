import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IData } from 'src/app/store/reducers/products.reducer';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.scss']
})
export class OneProductComponent implements OnInit {

  public product: IData;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _products: ProductsService
  ) { }

  ngOnInit() {
    console.log(this._activatedRoute.snapshot.data.product);
    this.product = this._activatedRoute.snapshot.data.product;
    // console.log(this._activatedRoute.snapshot.data);
    console.log('one kek');
  }

  
}
