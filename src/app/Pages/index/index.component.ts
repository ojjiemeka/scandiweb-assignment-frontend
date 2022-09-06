import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/@core/models/product.model';
import { ProductService } from 'src/app/product.service';
import * as AOS from 'aos';
import 'aos/dist/aos.css';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  // productData: any
  checkedItems: number[] = [];
  checkedID : any
  productData: Product[] = [];
  model: Product = new Product();
  toggle = false;
  isHidden = false;

  public deleteProductData!: FormGroup

  constructor(
    private productServ: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getProduct();
    AOS.init();
  //  this.getCheckboxID();
  }

 /**
  * The function getProduct() is a function that is called when the component is initialized. It calls
  * the getProducts() function in the product service, which returns an observable. The observable is
  * then subscribed to, and the data is stored in the productData variable
  */
  getProduct(){
    this.productServ.getProducts().subscribe(
      (products) =>{
        this.productData = products.data;
        // console.log(this.productData);
      }
    )
  }



  /**
   * It takes the id of the checkbox that was clicked, converts it to a number, checks if it exists in
   * the array of checked items, and if it doesn't, it adds it to the array. If it does exist, it
   * removes it from the array
   * @param {string} id - string - the id of the checkbox
   */
  getSelectedCheckBox(id: string){
    const pid = Number(id);
    const exist =this.model.checkedItems.findIndex((x: number) => x === pid);
    if(exist === -1){
      this.model.checkedItems.push(pid);
    }else{
      this.model.checkedItems.splice(exist, 1);
    }
  }


  /**
   * The function first checks if the user has selected any items to delete. If not, it displays an
   * alert message. If the user has selected items, it calls the deleteProduct() function in the
   * product service
   * @returns The response from the server is being returned.
   */
  deleteSelected(){
    if(this.model.checkedItems.length <= 0){
     alert('Please select Some items to delete');
     return;
    }
    this.productServ.deleteProduct(this.model).subscribe(res => {
      const data = res;
      // console.log(data.message);
      this.isHidden = true;
     alert(data.message);
    //  this.getProduct();
      // this.router.navigate(['/'])
      this.router.navigate(['/'])
      .then(() => {
        window.location.reload();
      });
     this.model.checkedItems = [];
    });

  }
}
