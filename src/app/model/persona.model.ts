export class Persona {

    id?: number;
    nombre: String;
    apellido: String;
    descripcion: String;
    nacimiento: String;
    img: String;

    constructor(nombre: String, apellido:String, nacimiento:String, descripcion:String, img:String){

        this.nombre = nombre;
        this.apellido = apellido;
        this.nacimiento = nacimiento;
        this.descripcion = descripcion;
        this.img = img; 
    }

    setNombre(nombre: String){this.nombre = nombre;}

}
