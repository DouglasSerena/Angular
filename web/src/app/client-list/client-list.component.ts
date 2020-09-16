import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientService } from '../services/Client.service';

import { Client } from './../models';

@Component({
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
})
export class ClientListComponent implements OnInit {
  clients: Observable<Client[]>;
  clienteId: number | null = null;
  selectClient: Client;

  constructor(private ClientService: ClientService) {}

  ngOnInit() {
    this.clients = this.ClientService.index();
  }

  handleCloseAddress() {
    this.clienteId = null;
  }

  handleAddresses(id: number) {
    this.clienteId = id;
  }
}
