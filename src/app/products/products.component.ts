import { Component, OnInit, Input } from '@angular/core';
import { IData } from '../store/reducers/products.reducer';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  @Input()
  public products: IData[];

  ngOnInit() {
  }

}
