import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientReportsComponent } from './client-reports.component';

describe('ClientReportsComponent', () => {
  let component: ClientReportsComponent;
  let fixture: ComponentFixture<ClientReportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientReportsComponent]
    });
    fixture = TestBed.createComponent(ClientReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
