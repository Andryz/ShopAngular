import { Pipe, PipeTransform } from '@angular/core';
import { IData } from 'src/app/store/reducers/products.reducer';

@Pipe({
  name: 'titleFilter'
})
export class TitleFilterPipe implements PipeTransform {

private allProducts: string = "ВЕСЬ ТОВАР";

  transform(products: IData[], clickTitle: string): IData[] {
    if(!clickTitle){
      return products;
    }
    if(clickTitle == this.allProducts){
      console.log(clickTitle.toLowerCase(), this.allProducts.toLowerCase());
      return products;
    }
    return products.filter( (product)=>{
      return product.type.toLowerCase()
        .includes(clickTitle.toLowerCase());
    });
  }

}
