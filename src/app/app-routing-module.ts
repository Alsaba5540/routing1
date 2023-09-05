import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DasshboardComponent } from "./shared/components/dasshboard/dasshboard.component";
import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";
import { ProductComponent } from "./shared/components/products/product/product.component";
import { ProductsComponent } from "./shared/components/products/products.component";
import { UserComponent } from "./shared/components/users/user/user.component";
import { UsersComponent } from "./shared/components/users/users.component";


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
    },
    {
      path: "users/:userId" , component : UserComponent
    },
    
      {
        path: "products/:productId" , component : ProductComponent
      },
      {
       path : "**" , redirectTo : 'pageNotFound'
      },
      {
        path: "pageNotFound"  , component : PageNotFoundComponent
      }
    
  
  ]


@NgModule({
  imports :[
    RouterModule.forRoot(routes)
  ],
  exports : [
    RouterModule
  ]

    
})








export class AppRoutingModuleComponent{

}