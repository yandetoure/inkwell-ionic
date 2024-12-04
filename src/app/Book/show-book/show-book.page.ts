import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-book',
  templateUrl: './show-book.page.html',
  styleUrls: ['./show-book.page.scss'],
})
export class ShowBookPage implements OnInit {

  book: any;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit() {
    const bookId = this.route.snapshot.paramMap.get('id');
    this.loadBookDetails(bookId);
  }

  loadBookDetails(bookId: string | null) {
    if (bookId) {
      this.bookService.getBookDetails(bookId).subscribe(
        (response) => {
          // Vérification et construction de l'URL de la couverture
          this.book = {
            ...response.data,
            cover: response.data.cover
              ? `http://localhost:8000/storage/${response.data.cover}`
              : null,
          };
        },
        (error) => {
          console.error('Error fetching book details', error);
        }
      );
    }
  }
  // getBookDetails(bookId: string) {
  //   return this.http.get<{ data: any }>(`http://localhost:8000/api/books/${bookId}`).pipe(
  //     map(response => {
  //       if (response.data.cover) {
  //         response.data.cover = `http://localhost:8000/storage/${response.data.cover}`;
  //       }
  //       return response;
  //     })
  //   );
  // }
}
