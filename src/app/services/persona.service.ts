import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url:String ='http://localhost:8080/persona';

  constructor(private http:HttpClient) {}

  public getPerson():Observable<Persona>{
    console.log("getAll");
    return this.http.get<Persona>(this.url +'/getAll'); 
  }
}
