import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListScreenComponent } from './user-list-screen.component';

describe('UserListScreenComponent', () => {
  let component: UserListScreenComponent;
  let fixture: ComponentFixture<UserListScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
