import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCreationComponent } from './customer-creation.component';

describe('CustomerCreationComponent', () => {
  let component: CustomerCreationComponent;
  let fixture: ComponentFixture<CustomerCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerCreationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
