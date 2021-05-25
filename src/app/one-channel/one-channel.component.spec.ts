import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneChannelComponent } from './one-channel.component';

describe('OneChannelComponent', () => {
  let component: OneChannelComponent;
  let fixture: ComponentFixture<OneChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneChannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
