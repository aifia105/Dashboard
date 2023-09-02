import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorTrafficComponent } from './visitor-traffic.component';

describe('VisitorTrafficComponent', () => {
  let component: VisitorTrafficComponent;
  let fixture: ComponentFixture<VisitorTrafficComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisitorTrafficComponent]
    });
    fixture = TestBed.createComponent(VisitorTrafficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
