import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service'; 

@Component({
  selector: 'app-show-book-auth',
  templateUrl: './show-book-auth.page.html',
  styleUrls: ['./show-book-auth.page.scss'],
})
export class ShowBookAuthPage implements OnInit {

  book: any;
  isEditing: boolean = false; // Variable pour le mode édition

  constructor(private route: ActivatedRoute, private bookService: BookService, private router: Router) {}

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
  enableEditing() {
    this.isEditing = true; // Active le mode édition
  }

  saveChanges() {
    this.bookService.updateBook(this.book).subscribe(() => {
      // Gérer la réponse de sauvegarde ici
      this.isEditing = false; // Désactive le mode édition après la sauvegarde
      this.router.navigate(['/tabs/tab4']); // Rediriger après la sauvegarde
    });
  }
}
