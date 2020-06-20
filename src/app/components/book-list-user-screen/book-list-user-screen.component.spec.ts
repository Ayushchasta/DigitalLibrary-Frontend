import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListUserScreenComponent } from './book-list-user-screen.component';

describe('BookListUserScreenComponent', () => {
  let component: BookListUserScreenComponent;
  let fixture: ComponentFixture<BookListUserScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookListUserScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListUserScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
