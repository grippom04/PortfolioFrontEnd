import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';
import { Switch } from '../model/switch';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  perURL = Switch.url+'/persona';

  constructor(private http:HttpClient) {}

  public getPerson():Observable<Persona>{
    console.log(this.perURL);
    return this.http.get<Persona>(this.perURL +'/getAll'); 
  }
}
