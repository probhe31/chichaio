import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FeaturedGamesComponent } from './featured-games/featured-games.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  { path: '',   redirectTo: '/featured', pathMatch: 'full' },
  {path:'register', component: RegisterComponent},  
  {path:'login', component: LoginComponent},  
  {path:'featured', component: FeaturedGamesComponent},  
  {path:'reset-password', component: ResetPasswordComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RegisterComponent, LoginComponent, FeaturedGamesComponent, ResetPasswordComponent]