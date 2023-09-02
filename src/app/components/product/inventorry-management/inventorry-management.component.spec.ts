import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorryManagementComponent } from './inventorry-management.component';

describe('InventorryManagementComponent', () => {
  let component: InventorryManagementComponent;
  let fixture: ComponentFixture<InventorryManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventorryManagementComponent]
    });
    fixture = TestBed.createComponent(InventorryManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
