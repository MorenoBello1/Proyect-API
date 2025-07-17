import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../servicios/login.service';

@Component({
  selector: 'app-raiz',
  standalone: true,
  imports: [],
  templateUrl: './raiz.component.html',
  styleUrl: './raiz.component.css'
})
export class RaizComponent {
  //componente base metodos y injecciones etc
  protected Router_ = inject(Router)
  protected vistasP:any[] = []
  private Servicie = inject(LoginService);
  
  constructor(){}

  setLocalStorage(key:string,data: any): void {
    localStorage.setItem(key,data);
  }

  getLocalStorage(key:string) {
    return localStorage.getItem(key);
  }

  clear(key:string) {
    localStorage.removeItem(key);
  }
  

}
  

