import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'product-add',
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {

  constructor(private productService:ProductService,private router:Router){

  }

  newProduct = {
    id:0,
    name:'',
    desc:''
  }
  
  addProduct(myForm:any){
    this.productService.addProduct(this.newProduct);
    this.router.navigate(['product-list']);
  }

}
