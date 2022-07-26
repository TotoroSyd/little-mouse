import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { AddCartComponent } from './add-cart/add-cart.component';
import { QuantityComponent } from './quantity/quantity.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { PriceCardComponent } from './price-card/price-card.component';
import { FooterComponent } from './footer/footer.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductDisplayComponent,
    CategoryComponent,
    ProductComponent,
    AddCartComponent,
    QuantityComponent,
    ProductCardComponent,
    PriceCardComponent,
    FooterComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
