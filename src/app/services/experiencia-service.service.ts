import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experiencia } from '../model/experiencia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
  
})
export class ExperienciaServiceService {

  url:String ='http://localhost:8080/experiencia';
  id! : number;

  constructor(private http:HttpClient) {}

    public getAllExperiencia(): Observable<Experiencia[]>{
      return this.http.get<Experiencia[]>(this.url+'/getAll')
    }

    public getExperiencia(id:number): Observable<Experiencia>{
      return this.http.get<Experiencia>(this.url + `/get/${id}`)
    }

    public setExperiencia (e : Experiencia)  : Observable<any>{
      return this.http.post<Experiencia>(this.url + '/set', e)
    }

    public editExperiencia(e : Experiencia) : Observable<any>{
      return this.http.put<any>(this.url + '/edit',e)
    }

    public wipeExperiencia(id : number) : Observable<any>{
      return this.http.delete<any>(this.url + `/delete/${id}`)
    }

    public setId(i: number): void {
      this.id = i;
      
    } 
    public getId(): number {
      return this.id;
    }


  }