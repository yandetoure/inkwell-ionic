import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastController: ToastController
  ) {}

  login() {
    this.authService.login(this.email, this.password).subscribe(
      async (response: any) => {
        console.log('Réponse API:', response);
  
        // Vérifiez si le token est présent
        if (response.access_token) {
          // Stockez le token (dans un service ou localStorage)
          this.authService.setToken(response.access_token);
  
          // Redirigez l'utilisateur
          this.router.navigateByUrl('/tabs/tab1').then(() => {
            console.log('Navigation réussie vers /tabs/tab1');
          });
        } else {
          // Affichez un message d'erreur
          const toast = await this.toastController.create({
            message: 'Erreur : Aucun token reçu.',
            duration: 2000,
            color: 'danger',
          });
          toast.present();
        }
      },
      async (error) => {
        console.error('Erreur lors de la connexion:', error);
  
        // Affichez une notification d'erreur
        const toast = await this.toastController.create({
          message: 'Erreur de connexion. Vérifiez vos identifiants.',
          duration: 2000,
          color: 'danger',
        });
        toast.present();
      }
    );
  }  
  
}
