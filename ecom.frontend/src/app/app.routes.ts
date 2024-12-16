import { Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { ProductComponent } from './product/product.component';
import { CustomerCreationComponent } from './customer-creation/customer-creation.component';
import { ProductCreationComponent } from './product-creation/product-creation.component';
import { EditCustomerComponent } from './edit/edit-customer/edit-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { EditProductComponent } from './edit/edit-product/edit-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
    {path:'customers', component:CustomerComponent},
    {path:'products', component:ProductComponent},
    {path:'customer-creation', component:CustomerCreationComponent},
    {path:'product-creation', component:ProductCreationComponent},
    {path: '', redirectTo: 'customers', pathMatch: 'full'},
    {path:'edit-customer/:id', component:EditCustomerComponent},
    {path:'customer-details/:id', component:CustomerDetailsComponent},
    {path:'edit-product/:id', component:EditProductComponent},
    {path:'product-details/:id', component:ProductDetailsComponent}
    
];
