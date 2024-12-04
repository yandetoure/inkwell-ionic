import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowBookPage } from './show-book.page';

describe('ShowBookPage', () => {
  let component: ShowBookPage;
  let fixture: ComponentFixture<ShowBookPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
