import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorrySatutsComponent } from './inventorry-satuts.component';

describe('InventorrySatutsComponent', () => {
  let component: InventorrySatutsComponent;
  let fixture: ComponentFixture<InventorrySatutsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventorrySatutsComponent]
    });
    fixture = TestBed.createComponent(InventorrySatutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
