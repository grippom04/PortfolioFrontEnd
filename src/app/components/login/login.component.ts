import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticationService } from 'src/app/services/autentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  form:FormGroup;

  constructor(private formBuilder:FormBuilder, private autenticationService:AutenticationService,private router:Router){
    
    this.form = formBuilder.group({

      email:['',[Validators.email,Validators.required]],
      password:['',[Validators.required, Validators.minLength(8)]],
      deviceInfo:this.formBuilder.group({
        deviceId:[""],
        deviceType:[""],
        notificationToken:[""] })
    })
  }

  get Email() {
    return this.form.get('email');
  }

  get Password() {
    return this.form.get('password');
  }

  sendCredentials(event:Event){
    event.preventDefault();
    this.autenticationService.LogIn(this.form.value).subscribe(data=>{
      console.log("Data"+ JSON.stringify(data));
      this.router.navigate(['']);
    })   
  }
}
