import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSalesComponent } from './data-sales.component';

describe('DataSalesComponent', () => {
  let component: DataSalesComponent;
  let fixture: ComponentFixture<DataSalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataSalesComponent]
    });
    fixture = TestBed.createComponent(DataSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
