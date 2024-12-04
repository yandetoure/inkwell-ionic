import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  books: any[] = [];
  loading = true;
  constructor(private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.getUserBooks().subscribe(
      (response) => {
        this.books = response.data;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching books', error);
        this.loading = false;
      }
    );
  }

  goToBookDetails(bookId: number) {
    this.router.navigate(['/show-book-auth', bookId]);
  }
}
