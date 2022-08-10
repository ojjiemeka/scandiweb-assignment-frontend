import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient,
  ) { }

  $base_URL = "https://localhost/products-backend/Api/products";

  getProducts(){
    const httpOptions = { 
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
    return this.http.get<any>(this.$base_URL +'/index.php', httpOptions);
  }

  addProduct(){
    
  }
}
