import { Component, inject, OnInit } from '@angular/core';
import { RaizComponent } from '../raiz/raiz.component';
import { NgClass } from '@angular/common';
import { Usuario } from '../../interface/interface';
import { FormsModule } from '@angular/forms';
import { RegistrouService } from '../../servicios/registrou.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [NgClass,FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent extends RaizComponent implements OnInit{
  visiblecontra = false
  oUsuario:Usuario
  private ServicioRegistro = inject(RegistrouService)
  
  ngOnInit() {
    this.nuevo()
  }

  nuevo(){
    console.log('usuario nuevo')
    this.oUsuario = new Usuario()

  }

  async Registrar(){
    //faltan validaciones mensajes o formgrup
    if(!this.oUsuario.contrasenia ){
      console.log('Complete el campo Contraseña')
      return;
    }
    if(!this.oUsuario.usuario){
      console.log('Complete el campo usuario')
      return;
    }
    this.oUsuario.usuario = this.oUsuario.usuario.trim()
    await this.ServicioRegistro.RegistroPost(this.oUsuario).then(res=>{
      console.log(res)
      this.nuevo()
    }).catch(err => {
        console.log(err)
    })
    
  }
  Volver() {
    this.Router_.navigate(['/login']);
  }
}
