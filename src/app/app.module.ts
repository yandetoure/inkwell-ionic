import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AuthInterceptor } from './auth.interceptor'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,     HttpClientModule  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS, // Ajout de l'intercepteur
      useClass: AuthInterceptor,
      multi: true, // Permet d'utiliser plusieurs intercepteurs si nécessaire
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
