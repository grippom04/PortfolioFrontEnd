import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})


export class EducacionServiceService {

  url:String ='http://localhost:8080/educacion';
  id! : number;

  constructor(private http:HttpClient) {}

  public getAllEducacion(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.url+'/getAll')
  }

  public getEducacion(id:number): Observable<Educacion>{
    return this.http.get<Educacion>(this.url + `/get/${id}`)
  }

  public setEducacion (e : Educacion)  : Observable<any>{
    return this.http.post<Educacion>(this.url + '/set', e)
  }

  public editEducacion(e : Educacion) : Observable<any>{
    return this.http.put<any>(this.url + '/edit',e)
  }

  public wipeEducacion(id : number) : Observable<any>{
    return this.http.delete<any>(this.url + `/delete/${id}`)
  }

  public setId(i: number): void {
    this.id = i;
    
  } 
  public getId(): number {
    return this.id;
  }
}
