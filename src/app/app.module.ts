import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './store';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { environment } from 'src/environments/environment';
import { ProductsEffects } from './store/effects/products.effect';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './services/products.service';
import { TitleFilterPipe } from './common/pipe/title-filter.pipe';
import { AsideFilterComponent } from './aside-filter/aside-filter.component';
import { OpenFilterDirective } from './directives/open-filter.directive';
import { ButtonFilterDirective } from './directives/button-filter.directive';
import { RangeFilterDirective } from './directives/range-filter.directive';
import { MainProductsComponent } from './content/main-products/main-products.component';
import { routes } from './routes';
import { ContactsComponent } from './content/contacts/contacts.component';
import { OneProductComponent } from './content/one-product/one-product.component';
import { ProductsListComponent } from './content/products-list/products-list.component';
import { UniqTitlePipe } from './common/pipe/uniq-title.pipe';
import { ResolveService } from './content/one-product/resolve.service';
import { ResolveNavService } from './services/resolve-nav.service';
import { CategoryGuard } from './services/category.guard';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    TitleFilterPipe,
    AsideFilterComponent,
    OpenFilterDirective,
    ButtonFilterDirective,
    RangeFilterDirective,
    MainProductsComponent,
    ContactsComponent,
    OneProductComponent,
    ProductsListComponent,
    UniqTitlePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ProductsEffects]),
    environment.production
      ? []
      : StoreDevtoolsModule.instrument()
  ],
  providers: [
    ProductsService, 
    ResolveService, 
    ResolveNavService,
    CategoryGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
