import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

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
}
