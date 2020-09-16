import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxMaskModule } from 'ngx-mask';

import { AddressComponent } from './address.component';
import { AddressFormComponent } from './form/address-form.component';
import { AddressListComponent } from './list/address-list.component';

import { SharedModule } from '../shared/shared.module';

import { AddressService } from '../services/Address.service';
import { ClientService } from '../services/Client.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ],
  declarations: [AddressFormComponent, AddressListComponent, AddressComponent],
  exports: [AddressComponent],
  providers: [AddressService, ClientService],
})
export class AddressModule {}
