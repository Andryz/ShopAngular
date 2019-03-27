import { Pipe, PipeTransform } from '@angular/core';
import { IData } from 'src/app/store/reducers/products.reducer';
import { ProductsListComponent } from 'src/app/content/products-list/products-list.component';


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
      // ProductsListComponent.innerHtml = "rtr";
      console.dir(ProductsListComponent);
      console.log(clickTitle.toLowerCase(), this.allProducts.toLowerCase());
      //  console.log(products);
       return products;
    }
    return products.filter( (product)=>{
      return product.type.toLowerCase()
        .includes(clickTitle.toLowerCase());
    });
  }


}
