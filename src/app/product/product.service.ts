import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  allProducts = [
    {
      id:1,
      name:'Laptop',
      desc:'High-performance laptop with a sleek design, perfect for work or entertainment. Features include a powerful processor, ample storage, and long battery life.'
    },
    {
      id:2,
      name:'Smartphone',
      desc:'Cutting-edge smartphone with a stunning display and advanced camera system. Packed with features such as facial recognition, fast charging, and a robust operating system.'
    },
    {
      id:3,
      name:'Headphones',
      desc:'Premium wireless headphones with noise-cancellation technology for immersive audio experience. Comfortable over-ear design with long-lasting battery and intuitive controls.'
    },
    {
      id:4,
      name:'Smartwatch',
      desc:'Stylish smartwatch with fitness tracking and notifications. Features a vibrant touchscreen display, heart rate monitor, GPS, and water resistance.'
    },
    {
      id:5,
      name:'Gaming Console',
      desc:'Next-generation gaming console offering unparalleled graphics and performance. Experience immersive gaming with a vast library of titles and online multiplayer capabilities.'
    },
    {
      id:6,
      name:'Portable Charger',
      desc:"Never run out of battery on the go with this portable charger. Compact and lightweight, it's perfect for keeping your devices powered up during travel, outdoor adventures, or emergencies."
    },
    {
      id:7,
      name:'Coffee Maker',
      desc:'Brew delicious coffee at home with this coffee maker. Whether you prefer espresso, cappuccino, or drip coffee, this versatile machine delivers rich, flavorful brews every time.'
    }
  ]

  getAllProducts(){
    return this.allProducts;
  }

  getAProduct(id:any){
    
    const fetchedProduct = this.allProducts.filter((eachProduct)=>eachProduct.id==id);
    return fetchedProduct;
  }

  addProduct(newProduct:any){
    newProduct.id = this.allProducts.length+1;
    this.allProducts.push(newProduct);
  }

  editProduct(updatedProduct:any){
    for(let i=0; i<this.allProducts.length; i++){
      if(updatedProduct.id === this.allProducts[i].id){
        this.allProducts[i] = updatedProduct;
        break;
      }
    }
  }

  deleteProduct(id:number){
    for(let i=0; i<this.allProducts.length; i++){
      if(id === this.allProducts[i].id){
        this.allProducts.splice(i,1);
        console.log(i);
        break;
      }
    }
  }

}
