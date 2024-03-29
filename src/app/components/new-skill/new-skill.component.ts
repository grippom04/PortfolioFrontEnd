import { ImageConfig } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ImagePickerConf } from 'ngp-image-picker';
import { Skill } from 'src/app/model/skill';
import { SkillServiceService } from 'src/app/services/skill-service.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})


export class NewSkillComponent {

  img : string = '../../../assets/Img/img_notFound.png' ;
  porcentaje:number = 0;
  outerColor:string = '#bd9046';
  innerColor:string = '#f8c679';
  nombre:string =  "Sin Nombre";

  constructor(private skillService: SkillServiceService, private router:Router){


  }

  onCreate():void{
    const s =  new Skill(this.img,this.porcentaje,this.outerColor,this.innerColor,
      this.nombre);
      this.skillService.setSkill(s).subscribe(data =>{
      alert("Skill Creada");
      this.router.navigate(['']);
      }, err =>{
      alert("Fallo la creacion de la skill");
      this.router.navigate(['']);
      })
                                   
  }

  Conf: ImagePickerConf  = {
    borderRadius: '4px',
    language: 'en',
    width: '320px',
    height: '240px',
  };

}


