import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliesManagementComponent } from './supplies-management.component';

describe('SuppliesManagementComponent', () => {
  let component: SuppliesManagementComponent;
  let fixture: ComponentFixture<SuppliesManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuppliesManagementComponent]
    });
    fixture = TestBed.createComponent(SuppliesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
