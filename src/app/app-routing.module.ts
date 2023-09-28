import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: '', redirectTo: 'LoginComponent', pathMatch: 'full' },

  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path:'home',
    component:HomeComponent
  }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}