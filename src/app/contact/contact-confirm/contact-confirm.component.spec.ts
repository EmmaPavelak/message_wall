import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactConfirmComponent } from './contact-confirm.component';

describe('ContactConfirmComponent', () => {
  let component: ContactConfirmComponent;
  let fixture: ComponentFixture<ContactConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
