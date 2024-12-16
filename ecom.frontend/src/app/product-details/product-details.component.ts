import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  providers: [DatePipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{

  id:number;
  product:Product = new Product();
  
  constructor(private productServie: ProductService,
    private router: Router, private route: ActivatedRoute, private date: DatePipe){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productServie.getProductById(this.id).subscribe(data => {
      this.product = data;
      //this.product.created_date = this.product.created_date || new Date().toISOString().slice(0, 16);
      //this.product.updated_date = this.product.updated_date || new Date().toISOString().slice(0, 16);
      console.log("CreatedDateTime...",this.product.createdDateTime);
      console.log("UpdatedDateTime...",this.product.updatedDateTime);
      console.log("Model...",this.product.model);
      console.log("Price...",this.product.price);
      console.log("Brand...",this.product.brand);         
      //this.product.createdDate = this.product.createdDate || new Date().toISOString().slice(0, 16);      

    }, error => console.log(error));   
    
  }

}
