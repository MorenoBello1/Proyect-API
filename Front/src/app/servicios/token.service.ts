import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private readonly TOKEN_KEY = 'auth_token';

  // Guarda el token en localStorage
  setTokenLocalStorage(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  // Obtiene el token desde localStorage
  getTokenLocalStorage(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  // Elimina el token de localStorage (por ejemplo en logout)
  clear(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }
}
