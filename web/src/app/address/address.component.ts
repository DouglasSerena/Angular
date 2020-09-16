import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Address } from '../models/Address.model';
import { AddressService } from '../services/Address.service';
import { ClientService } from '../services/Client.service';
import { Client } from './../models';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {
  @Output() close = new EventEmitter();
  @Input() clienteId: number;

  addresses: Address[] = [];
  addressId: number | null = null;
  client: Client;

  constructor(
    private clientService: ClientService,
    private addressService: AddressService
  ) {}

  ngOnInit() {
    this.clientService
      .getById(this.clienteId)
      .subscribe((client) => (this.client = client));
    this.addressService
      .index(this.clienteId)
      .subscribe((addresses) => (this.addresses = addresses));
  }

  handleUpdate(addressId: number) {
    this.addressId = addressId;
  }

  newAddress(address: Address) {
    this.addresses = this.addresses.concat(address);
  }

  updateAddress(updateAddress: Address) {
    this.addresses = this.addresses.map((address) => {
      if (address.id === updateAddress.id) {
        return updateAddress;
      }
      return address;
    });
  }

  deleteAddress(addressId: number) {
    this.addresses = this.addresses.filter(
      (address) => address.id !== addressId
    );
  }

  handleClose() {
    this.close.emit();
  }
}
