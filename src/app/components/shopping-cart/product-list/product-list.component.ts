import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service'
import { Product } from 'src/app/models/product';
import {MessengerService} from '../../../services/messenger.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = [];
  filteredProductList: Product[] = [];

  constructor(private productService: ProductService, private msg: MessengerService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      this.productList = products['hydra:member'];
    });
    this.handleFilter();
  }

  handleFilter() {
    this.msg.getMsg().subscribe((value: string) => {
      console.log(value);
    });
  }

}
