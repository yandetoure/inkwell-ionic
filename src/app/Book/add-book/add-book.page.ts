import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.page.html',
  styleUrls: ['./add-book.page.scss'],
})
export class AddBookPage  {

  title: string = '';
  description: string = '';
  cover: File | null = null;
  coverUrl: string | null = null; 
  wordCount: number = 0;

  constructor(private bookService: BookService, private router: Router) {}

  onFileSelected(event: any) {
    this.cover = event.target.files[0];
    if (this.cover) {
      this.coverUrl = URL.createObjectURL(this.cover); // Créer un URL pour l'affichage
    } else {
      this.coverUrl = null;
    }
  }

  updateWordCount() {
    // Compte les mots dans la description
    this.wordCount = this.description ? this.description.trim().split(/\s+/).length : 0;
    if (this.wordCount > 200) {
      this.wordCount = 200; // Limiter le nombre de mots à 200
      this.description = this.description.trim().split(/\s+/).slice(0, 200).join(' '); // Tronquer à 200 mots
    }
  }
  
  submit() {
    const formData = new FormData();
    formData.append('title', this.title);
    formData.append('description', this.description);
    if (this.cover) {
      formData.append('cover', this.cover);
    }

    this.bookService.addBook(formData).subscribe(
      (response) => {
        console.log('Livre ajouté avec succès', response);
        this.router.navigate(['/books']); // Redirige vers la page des livres
      },
      (error) => {
        console.error('Erreur lors de l\'ajout du livre', error);
      }
    );
  }
}
