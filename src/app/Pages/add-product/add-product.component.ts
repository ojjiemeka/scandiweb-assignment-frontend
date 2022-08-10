import { Component, OnInit } from '@angular/core';
import { Validator, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  type = [
    'book',
    'furniture',
    'dvd/cd'
  ]

  event : any;
  selectedValue: any;
  submitted = false;
  public productFormData!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.getType();
    // this.optionChange();
    // this.addProductForm();
    this.initializeForm();
   
  }

  getType(){
    return this.type;
  }

  initializeForm(){
    // this.productFormData = new FormGroup({
    //   sku: new FormControl (null),
    //   product_name: new FormControl (null),
    //   price: new FormControl (null),
    //   type: new FormControl (null),
    //   size: new FormControl (null),
    //   height: new FormControl (null),
    //   width: new FormControl (null),
    //   length: new FormControl (null),
    //   weight: new FormControl (null),
    // });

    this.productFormData = this.formBuilder.group({
      sku: ['', Validators.required],
      product_name: ['', Validators.required],
      price: ['', Validators.required],
      type: ['', Validators.required],
      size: ['', Validators.required],
      height: ['', Validators.required],
      width: ['', Validators.required],
      length: ['', Validators.required],
      weight: ['', Validators.required]
    }
    )
  }

  get f() {
    return this.productFormData.controls;
  }
  
  addProductForm(){

    this.submitted = true;

    if (this.productFormData.invalid) {
      return;
    }

    console.log(this.productFormData.value);
  }


  optionChange(event : any){
    console.log(event.target.value);
    this.selectedValue = event.target.value;

  }

  submit(){

  }

}
