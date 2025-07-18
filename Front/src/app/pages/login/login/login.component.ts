import { Component, inject, OnInit } from '@angular/core';
import { LoginService } from '../../../servicios/login.service';
import { login } from '../../../interface/interface';
import { FormsModule } from '@angular/forms';
import { TokenService } from '../../../servicios/token.service';
import { RaizComponent } from '../../raiz/raiz.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent extends RaizComponent implements OnInit{
  //raiz sera la base del proyecto asi como las funciones del backen para usarlas y no estar injectando servicios repetidamente 
  // en este caso router..
  private ServicieLogin = inject(LoginService);
  private Token = inject(TokenService)
  login!:login 

  private keydownHandler = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      console.log('Enter presionado');
      this.Login(); // ahora sí tiene acceso a this
    }
  };
  async ngOnInit() {
    this.login = new login()
    document.addEventListener('keydown', this.keydownHandler);

    console.log('hola')
  }
  ngOnDestroy() {
    document.removeEventListener('keydown', this.keydownHandler);
  }
  
  async Login(){
    if(!this.login.contrasena || !this.login.id){
      console.log('Faltan datos')
      return;
    }
    this.login.id = this.login.id.trim()
    this.ServicieLogin.LoginToken(this.login).subscribe(obtenido => {
      console.log((<any>obtenido))
      this.Token.setTokenLocalStorage((<any>obtenido).Token);
     
      this.setLocalStorage('user',JSON.stringify((<any>obtenido).user))
      this.Router_.navigate(['/home'])
    })
  }
  Registro(){
    this.Router_.navigate(['/registro'])
  }

 


  


}
