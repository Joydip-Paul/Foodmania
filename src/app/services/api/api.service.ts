import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from './../../shared/models/Products';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAll(): Products[] {
    return [

    ]
  }
}
