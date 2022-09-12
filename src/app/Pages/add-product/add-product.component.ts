import { Component, OnInit } from '@angular/core';
import { Validator, FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/@core/models/product.model';
import { ProductService } from 'src/app/product.service';
import Swal from 'sweetalert2';
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
  // message: any;
  errorMessage: any;


  type = [
    'Book',
    'Furniture',
    'DVD'
  ]

  constructor(
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
  }


  addProductForm(form: NgForm){
    // console.log(form)
    if (!form.valid) {
      return;
    }

    this.productService.addProduct(this.model).subscribe({
      next: res => {

          if(res.status != "200"){
            Swal.fire(res.message);
          }
          else{
            Swal.fire(res.message);
            this.router.navigate(['/']);
          }
        },
        error: (err: any) => {
          this.errorMessage = err;
          Swal.fire(this.errorMessage);
          // console.error(this.errorMessage);
        }
  });
}

}
