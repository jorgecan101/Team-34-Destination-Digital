import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDeskRegistrationComponent } from './new-desk-registration.component';

describe('NewDeskRegistrationComponent', () => {
  let component: NewDeskRegistrationComponent;
  let fixture: ComponentFixture<NewDeskRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDeskRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewDeskRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
