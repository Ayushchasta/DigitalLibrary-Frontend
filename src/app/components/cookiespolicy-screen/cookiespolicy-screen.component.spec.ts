import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiespolicyScreenComponent } from './cookiespolicy-screen.component';

describe('CookiespolicyScreenComponent', () => {
  let component: CookiespolicyScreenComponent;
  let fixture: ComponentFixture<CookiespolicyScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookiespolicyScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookiespolicyScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
