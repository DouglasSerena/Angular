import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { zipValidators } from './../../core/validators/zipValidator';

import { AddressService } from 'src/app/services/Address.service';
import { State } from './../../models';

import { ChangeAddressId, Delete, Store, Update } from './methods';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
})
export class AddressFormComponent implements OnInit, OnChanges {
  @Output() add = new EventEmitter();
  @Output() addAddress = new EventEmitter();
  @Output() delAddress = new EventEmitter();
  @Output() updAddress = new EventEmitter();

  @Input() addressId: number | null = null;
  @Input() clienteId: number;

  loading: boolean = false;
  modal: boolean = false;
  messageError: string;

  formAddress: FormGroup;
  states: Observable<State[]>;

  constructor(
    private fb: FormBuilder,
    private addressService: AddressService
  ) {}

  ngOnInit() {
    this.states = this.addressService.getStates();
    this.formAddress = this.fb.group({
      logradouro: ['', [Validators.required]],
      numero: ['', [Validators.required]],
      bairro: ['', [Validators.required]],
      cep: [
        '',
        {
          validators: [Validators.required],
          asyncValidators: [zipValidators(this.addressService)],
        },
      ],
      cidade: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      complemento: [''],
    });
  }

  handleZipDatas() {
    const cep = this.formAddress.value.cep as string;
    if (cep.match(/\d{8}/g))
      this.addressService.getDataWithZip(cep).subscribe((data) =>
        this.formAddress.patchValue({
          cidade: data.localidade,
          estado: data.uf,
        })
      );
  }

  handleReset() {
    this.formAddress.reset();
    this.formAddress.patchValue({ estado: '' });
  }

  handleSuccess() {
    this.loading = false;
    this.handleReset();
    this.add.emit();
  }

  // BINDS
  ngOnChanges(changes: SimpleChanges): void {
    ChangeAddressId.bind(this, changes)();
  }

  store() {
    Store.bind(this)();
  }

  updateAddress() {
    Update.bind(this)();
  }

  deleteAddress() {
    Delete.bind(this)();
  }
}
