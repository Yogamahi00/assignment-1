import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  constructor(private productService:ProductService,private router:Router){

  }

  filterString:string = '';
  allProducts:any[] = [];
  filteredProducts:any[] = [];

  ngOnInit(){
    this.allProducts = this.productService.getAllProducts();
    this.filteredProducts = [...this.allProducts];
  }

  filterProduct(){
    const filterStringLower = this.filterString.toLowerCase();
    this.filteredProducts = this.allProducts.filter((eachProduct)=>{
      return eachProduct.name.toLowerCase().startsWith(filterStringLower)
    });
  }

  addProduct(){
    this.router.navigate(['product-add']);
  }

  editProduct(id:number){
    this.router.navigate(['product-edit',id]);
    console.log('Working');
  }

  deleteProduct(id:number){
    this.productService.deleteProduct(id);
    this.ngOnInit();
  }

}
