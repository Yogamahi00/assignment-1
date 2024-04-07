import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'product-edit',
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent {
    constructor(private productService:ProductService,private router:Router,private activatedRoute:ActivatedRoute){
      
    }

    myReactiveForm!: FormGroup;

    ngOnInit():void{
      this.myReactiveForm = new FormGroup({
        id: new FormControl(''),
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        desc: new FormControl('', [Validators.required, Validators.minLength(10)]),
      });
    
      let productId = this.activatedRoute.snapshot.paramMap.get('id');
      let fetchedProduct = this.productService.getAProduct(productId);
    
      console.log(fetchedProduct); 
    
      if (fetchedProduct) {
        this.myReactiveForm.setValue({
          id: fetchedProduct[0].id,
          name: fetchedProduct[0].name,
          desc: fetchedProduct[0].desc
        });
      } else {
        console.error('Product not found');
      }
    }

    editProduct(){
      // console.log(this.myReactiveForm.value);
      this.productService.editProduct(this.myReactiveForm.value);
      this.router.navigate(['product-list']);
    }
}


