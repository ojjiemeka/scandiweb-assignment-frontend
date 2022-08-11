import { Component, OnInit } from '@angular/core';
import { Validator, FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/@core/models/product.model';
import { ProductService } from 'src/app/product.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  event : any;
  selectedValue: any;
  submitted = false;
  model: Product = new Product(); // object
 // productList: Product[] = [] // array to bind multiple product in the tABLE

 // public productFormData!: FormGroup
  type = [
    'book',
    'furniture',
    'dvd/cd'
  ]

  constructor(
  //  private formBuilder: FormBuilder,
    private route: Router,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    // this.getType();
    // this.optionChange();
    // this.addProductForm();
   // this.initializeForm();

  }

  // getType(){
  //   return this.type;
  // }

  // initializeForm(){
  //   this.productFormData = new FormGroup({
  //     sku: new FormControl (null),
  //     product_name: new FormControl (null),
  //     price: new FormControl (null),
  //     type: new FormControl (null),
  //     size: new FormControl (null),
  //     height: new FormControl (null),
  //     width: new FormControl (null),
  //     length: new FormControl (null),
  //     weight: new FormControl (null),
  //   });

    // this.productFormData = this.formBuilder.group({
    //   sku: ['', Validators.required],
    //   product_name: ['', Validators.required],
    //   price: ['', Validators.required],
    //   type: ['', Validators.required],
    //   size: ['', Validators.required],
    //   height: ['', Validators.required],
    //   width: ['', Validators.required],
    //   length: ['', Validators.required],
    //   weight: ['', Validators.required]
    // }
    // )


  // get f() {
  //   return this.productFormData.controls;
  // }

  addProductForm(form: NgForm){
    if (!form.valid) {
      return;
    }

    this.productService.addProduct(this.model).subscribe(
      (res) => {
        console.log(res.message)
      },
      err => {
        console.log('Something went wrong');
      }
    )

    console.log(this.model);
  }


  // optionChange(event : any){
  //   console.log(event.target.value);
  //   this.selectedValue = event.target.value;
  // }

  // productsPage(){
  //   this.route.navigate(['add-product'])
  // }



}
