import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusScreenComponent } from './aboutus-screen.component';

describe('AboutusScreenComponent', () => {
  let component: AboutusScreenComponent;
  let fixture: ComponentFixture<AboutusScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutusScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
