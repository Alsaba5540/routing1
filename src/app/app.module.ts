import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DasshboardComponent } from './shared/components/dasshboard/dasshboard.component';
import { UsersComponent } from './shared/components/users/users.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { UserComponent } from './shared/components/users/user/user.component';
import { ProductComponent } from './shared/components/products/product/product.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { AppRoutingModuleComponent } from './app-routing-module';



@NgModule({
  declarations: [
    AppComponent,
    DasshboardComponent,
    UsersComponent,
    ProductsComponent,
    NavBarComponent,
    UserComponent,
    PageNotFoundComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModuleComponent
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
