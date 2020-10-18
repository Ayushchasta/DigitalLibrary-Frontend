import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacypolicyScreenComponent } from './privacypolicy-screen.component';

describe('PrivacypolicyScreenComponent', () => {
  let component: PrivacypolicyScreenComponent;
  let fixture: ComponentFixture<PrivacypolicyScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacypolicyScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacypolicyScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
