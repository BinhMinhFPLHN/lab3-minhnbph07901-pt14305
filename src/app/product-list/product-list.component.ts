import { Component, OnInit } from '@angular/core';
import{ data } from '../MockData';
import{ Product } from '../Product'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products=data;
  selected: Product;
  showDetail(product){
    this.selected=product;
    console.log(product);
  }
  // removeItem(id){
  //   this.products= this.products.filter(products => products.id !==id);
  // }

}
