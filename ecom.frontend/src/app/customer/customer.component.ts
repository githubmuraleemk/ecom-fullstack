import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../service/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  imports: [CommonModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements OnInit {

  customers: Customer[] | undefined;

  constructor(private customerService: CustomerService,
    private router: Router){}

  ngOnInit(): void {    
    this.getCustomerList();
  }

  private getCustomerList(){
    this.customerService.getCustomers().subscribe(data=>{
      this.customers=data;
      console.log("Return data....",data);
    });
  }

  updateCustomer(id: number){
    this.router.navigate(['edit-customer', id]);
  }

  deleteCustomer(id: number){
    this.customerService.deleteCustomer(id).subscribe( data => {
      console.log(data);
      this.getCustomerList();
    })
  }
  customerDetails(id: number){
    this.router.navigate(['customer-details', id]);
  }

}
