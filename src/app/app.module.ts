import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { OpenFilterDirective } from './open-filter.directive';
import { ButtonFilterDirective } from './button-filter.directive';
import { RangeFilterDirective } from './range-filter.directive';

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
    RangeFilterDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ProductsEffects]),
    environment.production
      ? []
      : StoreDevtoolsModule.instrument()
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
