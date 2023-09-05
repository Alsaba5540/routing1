import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Iproducts } from '../../model/users';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
ProductInfo : Array<Iproducts> = []
  constructor(private _productsService : ProductsService ,
    private _router : Router) { }

  ngOnInit(): void {
    this.ProductInfo = this._productsService.getAllProducts()

  }

  onUsersShow(){
   this._router.navigate(['/users'])


  }
  

}
