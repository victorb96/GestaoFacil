import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './utils/guards/auth/auth.guard';
import { loggedGuard } from './utils/guards/logged/logged.guard';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('./modules/backoffice/home/home.module').then(m => m.HomeModule), canActivate: [authGuard]},
  {path: 'login', loadChildren: () => import('./modules/controle-acesso/login/login.module').then(m => m.LoginModule), canActivate: [loggedGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
