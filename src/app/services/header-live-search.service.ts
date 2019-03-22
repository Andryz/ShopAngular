import { Injectable } from '@angular/core';
import { productsData } from '../common/data/data';
import { IData } from '../store/reducers/products.reducer';
import { Observable, BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeaderLiveSearchService {

  private products = productsData;
  private searchValue: any;

  private answerSubject$$ = new BehaviorSubject(this.products);
  
  public getProducts(): Observable<IData[]> {
    return this.answerSubject$$.asObservable();
  }

  public inputValueFilter(value): void{
    this.searchValue = this.products.filter( (product)=>{
      return  product.title.toLowerCase().includes(value.toLowerCase());
    });
    this.answerSubject$$
      .next(this.searchValue)
  }


}
