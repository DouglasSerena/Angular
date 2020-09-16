import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models';

import { map } from 'rxjs/operators';

import { environment } from './../../environments/environment.local';

@Injectable({ providedIn: 'root' })
export class ClientService {
  constructor(private httpClient: HttpClient) {}

  index(): Observable<Client[]> {
    return this.httpClient
      .get<{ status: number; data: Client[] }>(
        environment.API + '/api/painel/cliente'
      )
      .pipe(map((res) => res.data));
  }

  getById(id: number): Observable<Client> {
    return this.httpClient
      .get<{ status: number; data: Client }>(
        `${environment.API}/api/painel/cliente/${id}`
      )
      .pipe(map((res) => res.data));
  }
}
