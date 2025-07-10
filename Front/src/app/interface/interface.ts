
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