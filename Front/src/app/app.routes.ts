import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login/login.component';
import { MainLayoutComponent } from './componentes/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},

  {
    path: '',
    component: MainLayoutComponent, 
    children: [
      {path:'home',component:HomeComponent}
    ]
  },
];
