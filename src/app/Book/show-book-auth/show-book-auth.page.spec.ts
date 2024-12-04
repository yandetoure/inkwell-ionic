import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowBookAuthPage } from './show-book-auth.page';

describe('ShowBookAuthPage', () => {
  let component: ShowBookAuthPage;
  let fixture: ComponentFixture<ShowBookAuthPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBookAuthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
