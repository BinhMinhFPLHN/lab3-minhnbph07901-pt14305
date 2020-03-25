import { Injectable } from '@angular/core';

import{ data } from './MockData';
import{ Product } from './Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  api = 'https://5e79ba7017314d0016133563.mockapi.io/product';
  // products=data;
  constructor(
     private http: HttpClient
  ) { }
 

 getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.api);
    // return this.products;
  }
  
addProduct(product){
  console.log(product);
  let newObj = {  ...product };
  this.products.push(newObj);
  
}

}
