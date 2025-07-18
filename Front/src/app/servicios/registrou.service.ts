import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrouService {
  private baseUrl = environment.apiUrl+'/register';

  constructor(private Http : HttpClient) { }

  RegistroPost(data: any) {
    return this.Http.post(this.baseUrl,data).toPromise();
  }
}
