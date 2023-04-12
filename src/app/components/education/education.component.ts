import { Component, OnInit } from '@angular/core';
import { ServService } from 'src/app/services/serv.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  constructor(private dataServ:ServService){}

  educationList:any;

  ngOnInit() {
    this.dataServ.getData().subscribe(data =>{ this.educationList=data.education; });
  }
}
