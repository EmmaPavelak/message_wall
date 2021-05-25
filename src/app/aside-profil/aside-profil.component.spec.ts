import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideProfilComponent } from './aside-profil.component';

describe('AsideProfilComponent', () => {
  let component: AsideProfilComponent;
  let fixture: ComponentFixture<AsideProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
