import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  books: any[] = [];

  constructor(
    private bookService: BookService,
    private router: Router

  ) {}

  ngOnInit() {
    this.loadBooks();
  }

  // loadBooks() {
  //   this.bookService.getBooks().subscribe(
  //     (response) => {
  //       this.books = response.data.map((book: unknown) => {
  //         if (typeof book === 'object' && book !== null && 'cover' in book) {
  //           // Crée une URL complète pour l'image
  //           return {
  //             ...book,
  //             cover: (book as any).cover ? `http://localhost:8000/storage/${(book as any).cover}` : null
  //           };
  //         }
  //         return null; // ou gérez le cas où book n'est pas un objet valide
  //       }).filter(Boolean); // Supprimez les valeurs null
  //     },
  //     (error) => {
  //       console.error('Error fetching books', error);
  //     }
  //   );
  // }
  
  loadBooks() {
    this.bookService.getBooks().subscribe(
      (response) => {
        // Limitez à 8 livres
        this.books = response.data.slice(0, 6).map((book: any) => {
          return {
            ...book,
               cover: (book as any).cover ? `http://localhost:8000/storage/${(book as any).cover}` : null
};
        });
      },
      (error) => {
        console.error('Error fetching books', error);
      }
    );
  }

  viewBookDetails(bookId: number) {
    this.router.navigate(['/show-book', bookId]);
  }
  
}
