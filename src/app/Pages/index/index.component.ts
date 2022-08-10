import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  productData: any

  constructor(
    private productServ: ProductService
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    this.productServ.getProducts().subscribe(
      (products) =>{
        this.productData = products.data;
        console.log(this.productData);
      }
    )
  }

}
