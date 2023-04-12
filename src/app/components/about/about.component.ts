import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

p : Persona = new Persona("","","","","");
data:any = [];

constructor(public personaService: PersonaService){}

  ngOnInit(): void{
    this.loadData(); 
    //this.createPerson(); 
  }

  public loadData(): void{
    this.personaService.getPerson().subscribe(response =>{
      this.data = response;
      this.p = this.data[0];
    })
  }

}
