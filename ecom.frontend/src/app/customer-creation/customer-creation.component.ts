import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { CustomerService } from '../service/customer.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-creation',
  imports: [FormsModule],
  templateUrl: './customer-creation.component.html',
  styleUrl: './customer-creation.component.css'
})
export class CustomerCreationComponent implements OnInit{

  customer: Customer = new Customer();

  constructor(private customerService: CustomerService, private router: Router){}

  ngOnInit(): void {   
  }
  
  onSubmit(){
    console.log(this.customer);
    this.saveCustomer();
  }

  saveCustomer(){
    this.customerService.createCustomer(this.customer).subscribe(data =>{
      console.log(data);
      this.goToCustomerList();
    },
    error => console.log(error));
  }

  goToCustomerList(){
    this.router.navigate(['/customers']);
  }

}
