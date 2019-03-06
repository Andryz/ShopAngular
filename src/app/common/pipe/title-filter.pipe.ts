import { Pipe, PipeTransform } from '@angular/core';
import { IData } from 'src/app/store/reducers/products.reducer';

@Pipe({
  name: 'titleFilter'
})
export class TitleFilterPipe implements PipeTransform {

  transform(products: IData[], clickTitle: string): IData[] {
    if(!clickTitle){
      return products;
    }
    return products.filter( (products)=>{
      return products.type.toLowerCase()
        .includes(clickTitle.toLowerCase());
    });
  }

}
