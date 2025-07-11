import { Component, inject, OnInit } from '@angular/core';
import { LoginService } from '../../../servicios/login.service';
import { login } from '../../../interface/interface';
import { FormsModule } from '@angular/forms';
import { TokenService } from '../../../servicios/token.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  private ServicieLogin = inject(LoginService);
  private Token = inject(TokenService)
  login!:login 
  async ngOnInit() {
    this.login = new login()
    console.log('hola')
  }

  
  async Login(){
    if(!this.login.contrasena || !this.login.id){
      console.log('Faltan datos')
      return;
    }
    this.ServicieLogin.LoginToken(this.login).subscribe(obtenido => {
      console.log((<any>obtenido).Token)
      this.Token.setTokenLocalStorage((<any>obtenido).Token)
    })
  }

  async test(){
    await this.ServicieLogin.usertest().subscribe(x=>{
      console.log(x,'dataa')
    })
  }
}
