import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TokenService } from '../../servicios/token.service';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet,RouterLink, RouterLinkActive],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent implements OnInit{
  private Token = inject(TokenService)
  private Router_ = inject(Router)
  listMenu:any[]=[]
  
  ngOnInit(): void {
    this.listMenu = [// solo un ejemplo de lo que espero del backend temp
    { id: 1, url: 'home', nombre: 'Home', icono: '', listmenu: [
        { id: 4, url: '3', nombre: 'Sub Home', icono: '', listmenu: [] },
        { id: 5, url: '12', nombre: 'Sub Registro', icono: '', listmenu: [] }
      ] 
    },
    { id: 2, url: '#3', nombre: 'Registros', icono: '', listmenu: [] },
    {id: 3, url: '#22', nombre: 'Seleccion', icono: '', listmenu: [
        { id: 4, url: '213', nombre: 'Sub Home', icono: '', listmenu: [] },
        { id: 5, url: '12', nombre: 'Sub Registro', icono: '', listmenu: [] }
      ]
    },
    { id: 6, url: 'xx', nombre: 'XXX', icono: '', listmenu: [] }
  ];
  }

  CerrarSesion(){
    this.Token.clear()
    this.Router_.navigate(['/login'])
  }
}
