import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { rubricaModel } from './models/models';
import { Indirizzo } from './models/models';
@Injectable({
  providedIn: 'root'
})
export class RubricaService {

  constructor(private http:HttpClient) { }


  getRubrica(): Observable<rubricaModel[]> {
return this.http.get<rubricaModel[]>("http://localhost:3000/users")
  }
}

