import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Iproducts } from '../../model/users';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
ProductInfo : Array<Iproducts> = []
  constructor(private _productsService : ProductsService) { }

  ngOnInit(): void {
    this.ProductInfo = this._productsService.getAllProducts()

  }

}
