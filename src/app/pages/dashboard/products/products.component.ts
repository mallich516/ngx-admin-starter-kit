import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NetworkserviceService, Products } from '../../../services/networkservice.service';

@Component({
  selector: 'ngx-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {

  products: Array<Products>

  constructor(private productService: NetworkserviceService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((response) => {
      this.products = response.body["product"];
      console.log(this.products);
    }, (error: HttpErrorResponse) => {
      console.log(error.message);
    });
  }

}
