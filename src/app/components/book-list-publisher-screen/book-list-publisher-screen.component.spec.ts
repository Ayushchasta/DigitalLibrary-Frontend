import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListPublisherScreenComponent } from './book-list-publisher-screen.component';

describe('BookListPublisherScreenComponent', () => {
    let component: BookListPublisherScreenComponent;
    let fixture: ComponentFixture<BookListPublisherScreenComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BookListPublisherScreenComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BookListPublisherScreenComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
