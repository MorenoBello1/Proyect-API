import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TokenService } from '../../servicios/token.service';
import { RaizComponent } from '../../pages/raiz/raiz.component';
import { LoginService } from '../../servicios/login.service';
declare var bootstrap: any;  // para acceder a Bootstrap JS global

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet,RouterLink, RouterLinkActive],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent extends RaizComponent implements OnInit{
  private Token = inject(TokenService)
  private ServicieLogin = inject(LoginService);
  listMenu:any[]=[]
  user:any
  modal:any
  async ngOnInit() {
    
  const userString = localStorage.getItem('user');
    if (!userString) return;

    const user = JSON.parse(userString);
    this.user = user;
    this.ServicieLogin.ObtenerVistas(user).subscribe((res: any) => {
      this.listMenu = res;
      console.log('Vistas cargadas:', this.listMenu);
    });   
    const modalElement = document.getElementById('staticBackdrop');
    this.modal = new bootstrap.Modal(modalElement, {
     
    });
  }

  CerrarSesion(){
    this.Token.clear()
    this.Router_.navigate(['/login'])
  }
  Modal(){
    this.modal.show();
  }
  

}
