import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsandconditionScreenComponent } from './termsandcondition-screen.component';

describe('TermsandconditionScreenComponent', () => {
  let component: TermsandconditionScreenComponent;
  let fixture: ComponentFixture<TermsandconditionScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsandconditionScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsandconditionScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
