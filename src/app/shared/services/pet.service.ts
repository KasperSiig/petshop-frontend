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
    return this.http.get<Pet[]>(environment.apiUrl + '/pets');
  }

  getById(id: number): Observable<Pet> {
    return this.http.get<Pet>(environment.apiUrl + '/pets/' + id);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete(environment.apiUrl + '/pets/' + id);
  }

  add(pet: Pet): Observable<any> {
    return this.http.post(environment.apiUrl + '/pets', pet);
  }

  update(pet: Pet): Observable<any> {
    console.log(pet);
    return this.http.put(environment.apiUrl + '/api/pets/' + pet.id, pet);
  }
}
