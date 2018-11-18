import { Injectable } from '@angular/core';
import {Pet} from '../models/Pet';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<Pet[]> {
    return this.http.get<Pet[]>(environment.apiUrl + '/api/pets');
  }

  getById(id: number): Observable<Pet> {
    return this.http.get<Pet>(environment.apiUrl + '/api/pets/' + id);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete(environment.apiUrl + '/api/pets/' + id);
  }

  add(pet: Pet): Observable<any> {
    return this.http.post(environment.apiUrl + '/api/pets', pet);
  }

  update(pet: Pet): Observable<any> {
    console.log(pet);
    return this.http.put(environment.apiUrl + '/api/pets/' + pet.id, pet);
  }
}
