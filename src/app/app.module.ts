import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DasshboardComponent } from './shared/components/dasshboard/dasshboard.component';
import { UsersComponent } from './shared/components/users/users.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';

const routes : Routes = [
  {
    path : '' , redirectTo : 'home' , pathMatch : 'full'
  },
  {
    path : "home" , component : DasshboardComponent
  },
  {
    path : "users" , component : UsersComponent
  },
  {
    path: "products" , component : ProductsComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    DasshboardComponent,
    UsersComponent,
    ProductsComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
