import { Component, OnInit } from '@angular/core';
import { ServService } from 'src/app/services/serv.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  
  constructor(private dataServ:ServService){}

  experienceList:any;

  ngOnInit() {
    this.dataServ.getData().subscribe(data =>{ this.experienceList=data.wexperience; });
  }
}
    
