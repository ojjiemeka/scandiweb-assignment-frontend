import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  productData: any
  checkedItems: any = [];
  checkedID : any
  public deleteProductData!: FormGroup

  constructor(
    private productServ: ProductService,
    private router: Router, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getProduct();
    this.getCheckboxID();
  }

  getProduct(){
    this.productServ.getProducts().subscribe(
      (products) =>{
        this.productData = products.data;
        console.log(this.productData);
      }
    )
  }

  getCheckboxID(){
    this.deleteProductData = new FormGroup({
      id: new FormControl (null)
    });
  }

  /**
   * If the checkbox is checked, add the product ID to the checkedItems array. If the checkbox is
   * unchecked, remove the product ID from the checkedItems array
   * @param {any} productID - any - this is the product ID that is passed in from the HTML template.
   * @param {any} event - any - this is the event that is triggered when the checkbox is checked or
   * unchecked.
   */
  onChecked(event: any, productID: any){

    // const value  = (productID.id)
    let {checked, value} = event.target;
    if(checked) {
      this.checkedID = this.checkedItems.push(this.checkedID);
      console.log(this.checkedID);
    } else {
      let index = this.checkedItems.indexOf(value)
      if (index !== -1) this.checkedItems.splice(index, 1);
    }
  }

  deleteProduct(){
    this.checkedID = this.router.navigate(['/'], {relativeTo: this.route, queryParams: { id: this.checkedItems.join() } });
    console.log(this.checkedID);

  }
}
