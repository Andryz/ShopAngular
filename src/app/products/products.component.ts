import { Component, OnInit, Input } from '@angular/core';
import { IData } from '../store/reducers/products.reducer';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  
  @Input()
  public products: IData[];
  
  public navTitletext: string;

  constructor(private share: ShareService) {
    this.share.onClick.subscribe(titleText => this.navTitletext = titleText);
   }

  ngOnInit() {
  }

}
