import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = environment.apiUrl+'/login';
  private baseUrlvista = environment.apiUrl+'/obtenvista';

  constructor(private Http : HttpClient) { }

  LoginToken(data: any) {
    return this.Http.post(`${this.baseUrl}`,data);
  }
  usertest(){
    return this.Http.get(environment.apiUrl+'/users')
  }
  ObtenerVistas(idusuario:number){
    return this.Http.post(this.baseUrlvista,idusuario)
  }
}
