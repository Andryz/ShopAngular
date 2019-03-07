import { Component, OnInit, Input } from '@angular/core';
import { IData } from '../store/reducers/products.reducer';
import { ShareService } from '../services/share.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  
  @Input()
  public products: IData[];
  
  public navTitletext: Observable<string>;

  constructor(private share: ShareService) {
    this.navTitletext = share.getShareData();
   }

  ngOnInit() {
  }

}
