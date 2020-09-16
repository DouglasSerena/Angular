import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { Address, State, Zip } from '../models';

import { environment } from './../../environments/environment.local';

@Injectable({ providedIn: 'root' })
export class AddressService {
  constructor(private httpClient: HttpClient) {}

  index(id: number): Observable<Address[]> {
    return this.httpClient
      .get<{ status: number; data: Address[] }>(
        `${environment.API}/api/painel/endereco/${id}`
      )
      .pipe(map((res) => res.data));
  }

  store(datas: Address) {
    console.log(datas);
    return this.httpClient.post(
      `${environment.API}/api/painel/endereco/${datas.clienteId}`,
      datas
    );
  }

  update(datas: Address) {
    console.log(datas);
    return this.httpClient.put(
      `${environment.API}/api/painel/endereco/${datas.clienteId}/${datas.id}`,
      datas
    );
  }

  delete(clientId: number, id: number) {
    return this.httpClient.delete(
      `${environment.API}/api/painel/endereco/${clientId}/${id}`
    );
  }

  getByIdClient(id: number, address_id: number): Observable<Address> {
    return this.httpClient
      .get<{ status: number; data: Address }>(
        `${environment.API}/api/painel/endereco/${id}/${address_id}`
      )
      .pipe(map((res) => res.data));
  }

  getStates(): Observable<State[]> {
    return this.httpClient.get<State[]>(
      'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
    );
  }

  getDataWithZip(zip: string): Observable<Zip> {
    return this.httpClient.get<Zip>(
      `http://viacep.com.br/ws/${zip.replace(/\D/g, '')}/json/`
    );
  }

  getZip(uf: string, city: string): Observable<string> {
    return this.httpClient
      .get(`https://viacep.com.br/ws/${uf}/${city}/Domingos/json`)
      .pipe(map((res) => res[0].cep));
  }
}
