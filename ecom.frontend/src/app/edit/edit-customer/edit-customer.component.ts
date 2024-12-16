import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Customer } from '../../model/customer';
import { CustomerService } from '../../service/customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  imports: [FormsModule],
  templateUrl: './edit-customer.component.html',
  styleUrl: './edit-customer.component.css'
})
export class EditCustomerComponent implements OnInit{
  id:number;
  customer: Customer = new Customer();
  constructor(private customerService: CustomerService,
    private router: Router, private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.customerService.getCustomerById(this.id).subscribe(data => {
      this.customer = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.customerService.updateCustomer(this.id, this.customer).subscribe( data =>{
      this.goToCustomerList();
    }
    , error => console.log(error));

  }
  
  goToCustomerList(){
    this.router.navigate(['/customers']);
  }

}
