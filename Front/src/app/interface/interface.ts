
export class login{
    fecha:string
    contrasena:string | null
    id:string | null
    constructor(){
        this.fecha = new Date().toString();
        this.contrasena = null;
        this.id = null
    }
}
export class Usuario {
  fecha:string
  contrasenia:string
  usuario:string
  idrol:number
  constructor(){
    this.fecha = new Date().toISOString()
    this.contrasenia = ''
    this.usuario = ''
    this.idrol = 2
  }
}

export class vistaActual{
    id:number
    idusuario:number
    constructor(){
        this.id = 0
        this.idusuario = 0
    }
}
export class Vista {
  id: number;
  url: string;
  nombre: string;
  icono: string;
  submenus?: Vista[];

  constructor() {
    this.id = 0;
    this.url = '';
    this.nombre = '';
    this.icono = '';
    this.submenus = [];
  }
}
export class Menu {
  idusuario: number;
  idvista: number;

  constructor() {
    this.idusuario = 0;
    this.idvista = 0;
  }
}