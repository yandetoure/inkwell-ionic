import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./Auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'add-book',
    loadChildren: () => import('./Book/add-book/add-book.module').then( m => m.AddBookPageModule)
  },
  {
    path: 'show-book/:id',
    loadChildren: () => import('./Book/show-book/show-book.module').then( m => m.ShowBookPageModule)
  },
  {
    path: 'show-book-auth/:id',
    loadChildren: () => import('./Book/show-book-auth/show-book-auth.module').then( m => m.ShowBookAuthPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
