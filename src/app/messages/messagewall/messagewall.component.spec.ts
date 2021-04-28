import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagewallComponent } from './messagewall.component';

describe('MessagewallComponent', () => {
  let component: MessagewallComponent;
  let fixture: ComponentFixture<MessagewallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagewallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagewallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
