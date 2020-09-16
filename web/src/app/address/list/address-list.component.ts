import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Address } from 'src/app/models';

@Component({
  selector: 'app-address-list',
  templateUrl: 'address-list.component.html',
  styleUrls: ['./address-list.component.scss'],
})
export class AddressListComponent implements OnInit {
  @Output() addressId = new EventEmitter();
  @Input() addresses: Address[] = [];

  constructor() {}

  ngOnInit() {}
}
