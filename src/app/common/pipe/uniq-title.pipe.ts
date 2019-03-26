import { Pipe, PipeTransform } from '@angular/core';
import { IData } from 'src/app/store/reducers/products.reducer';

@Pipe({
  name: 'uniqTitle'
})
export class UniqTitlePipe implements PipeTransform {

  public arrTitleUniq: [];
  private arrTitle: [];
  transform(products: IData[]): IData[] {
    // console.log(this.products$.actionsObserver._value.payload);
    // for (let product of products){
    //   this.arrTitle.push(product.type); 
    // }
    // function uniq( value, index, self){
    //   return self.indexOf(value) === index;
    // }
    // // this.arrTitleUniq = this.arrTitle.filter(uniq);
    // return this.arrTitleUniq = this.arrTitle.filter(uniq);

    // this.products.subscribe((products: IData[])=>{

    //   for (let product of products){
    //     this.arrTitle.push(product.type); 
    //   }
    //   function uniq( value, index, self){
    //     return self.indexOf(value) === index;
    //   }
    //   this.arrTitleUniq = this.arrTitle.filter(uniq);
    // })

    return products;

    // return console.log(products);

  }

}
