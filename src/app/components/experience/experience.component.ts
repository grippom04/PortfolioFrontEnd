import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaServiceService } from 'src/app/services/experiencia-service.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  
  constructor(private experienciaService: ExperienciaServiceService,private tokenService : TokenService){}

  isLogged=false;
  listaExperiencia:Experiencia[]=[];
  
  ngOnInit() {
    this.CargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }
    else{
      this.isLogged=false;
    }
  }

  public CargarExperiencia():void {
    this.experienciaService.getAllExperiencia().subscribe(data =>{
      this.listaExperiencia = data;
      console.log(this.listaExperiencia);
      })
  }

}
    
