import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAccountScreenComponent } from './manage-account-screen.component';

describe('ManageAccountScreenComponent', () => {
  let component: ManageAccountScreenComponent;
  let fixture: ComponentFixture<ManageAccountScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAccountScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAccountScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
