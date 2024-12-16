import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [CommonModule, MatPaginatorModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  products: Product[]|undefined;
  id: number;

  totalElements: number = 0; // Total number of elements
  page: number = 0; // Current page index
  size: number = 7; // Number of items per page 

  constructor(private productService: ProductService,
    private router: Router, private http: HttpClient, private changeDetector: ChangeDetectorRef){}

  ngOnInit(): void {
    //this.getProductList();
    this.getProductsList(this.page, this.size);
  }

  /*private getProductList(){
    this.customerService.getProducts().subscribe(data=>{
      this.products=data;      
    });
  }

  getProducts(page: number, size: number): void {
    const params = { page: page.toString(), size: size.toString() };
    this.http.get('http://localhost:8080/e-com/api/v1/product', { params })
      .subscribe((response: any) => {
          this.products = response.content; // Array of products
          this.totalElements = response.totalElements; // Total number of items
        });
  }*/

  getProductsList(page: number, size: number): void {
    this.productService.getProducts(page, size).subscribe((response) => {
      this.products = response.content; // Array of products
      this.totalElements = response.totalElements; // Total number of items
    });
  }

  // Handle pagination event
  onPageChange(event: any): void {
    this.page = event.pageIndex; // Set new page index
    this.size = event.pageSize; // Set new page size
    //this.getProducts(this.page, this.size); // Fetch data for the new page
    this.getProductsList(this.page, this.size);
  }

  updateProduct(id: number){
    this.router.navigate(['edit-product', id]);
  }
  
  /*deleteProduct(id: number){
    this.productService.deleteProduct(id).subscribe( data => {
      console.log(data);     
      this.getProducts(this.page, this.size);
      
    })
  }*/

    deleteProduct(id: number) {
      const confirmDelete = window.confirm('Are you sure you want to delete this product?');

      if (confirmDelete){
        this.productService.deleteProduct(id).subscribe(response => {
          console.log(response); // Log plain text message
          alert('Product deleted successfully!');
          if (this.products.length === 1 && this.page > 0) {
            this.page--; // Adjust page
          }
          this.getProductsList(this.page, this.size);
        }, error => {
          console.error("Error deleting product:", error);
        });
      }
      
    }

  productDetails(id: number){
    this.router.navigate(['product-details', id]);
  }

}
