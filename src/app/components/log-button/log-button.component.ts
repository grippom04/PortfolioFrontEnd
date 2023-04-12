import { Component,OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-log-button',
  templateUrl: './log-button.component.html',
  styleUrls: ['./log-button.component.css']
})
export class LogButtonComponent {

    constructor(private r:Router){}

    ngOnInit() {}

    login() {this.r.navigate(['/login']);}
}
