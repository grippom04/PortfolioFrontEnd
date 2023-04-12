import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticationService {

  url='http://localhost:8080';
  currenUserSubject:BehaviorSubject<any>;

  constructor(private http:HttpClient) {

    console.log("Andaa!!!!!");
    this.currenUserSubject = new BehaviorSubject<any>('currenUser' );
  }

  LogIn(credenciales:any):Observable<any> {
    console.log("Se llamo al metodo de logueo");
    return this.http.get(this.url,credenciales).pipe(map(data=>{

      sessionStorage.setItem('currenUser',JSON.stringify(data));
      return data;
    }))
  }
}
