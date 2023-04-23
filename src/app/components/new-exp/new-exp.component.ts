import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaServiceService } from 'src/app/services/experiencia-service.service';

@Component({
  selector: 'app-new-exp',
  templateUrl: './new-exp.component.html',
  styleUrls: ['./new-exp.component.css']
})
export class NewExpComponent {

  img : string='';
  nombre_trabajo: string='';
  nombre_compania: string='';
  fecha_inicio: string='2000-12-66';
  fecha_fin: string='2000-12-66'
  descripcion: string='sadadasd';

constructor(private experienciaService: ExperienciaServiceService, private router:Router){}

onCreate():void{
  const e =  new Experiencia(this.img,this.nombre_trabajo,this.nombre_compania,this.fecha_inicio,
                                    this.fecha_fin,this.descripcion);
  this.experienciaService.setExperiencia(e).subscribe(data =>{
    alert("Experiencia Creada");
    this.router.navigate(['']);
  }, err =>{
    alert("Fallo la creacion de la experiencia");
    this.router.navigate(['']);
  })                                  
}
  

}


