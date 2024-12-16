import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../model/product';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-creation',
  imports: [FormsModule],
  templateUrl: './product-creation.component.html',
  styleUrl: './product-creation.component.css'
 
})
export class ProductCreationComponent implements OnInit{

  product: Product = new Product(); 
  constructor(private productService:ProductService, private router:Router){    
  }

  ngOnInit(): void { 
    
    console.log("Product fetched in ngOnInit:", this.product);
  }

  onSubmit(){      
    this.saveProduct();
    
  }

  saveProduct(){
    //this.product.createdDateTime = new Date().toISOString().slice(0, 16);
    //this.product.updatedDateTime = new Date().toISOString().slice(0, 16);    
    this.productService.createProduct(this.product).subscribe(data =>{
      console.log('API response:', data);
      this.goToProductList();
    },
    error => console.log(error));
  }

  goToProductList(){
    this.router.navigate(['/products']);
  }

}
