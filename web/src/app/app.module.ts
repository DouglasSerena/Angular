import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ClientListComponent } from './client-list/client-list.component';

import { SharedModule } from './shared/shared.module';
import { AddressModule } from './address/address.module';
import { CoreModule } from './core/core.module';

import { ClientService } from './services/Client.service';
import { AddressService } from './services/Address.service';

@NgModule({
  declarations: [AppComponent, ClientListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    AddressModule,
    CoreModule,
  ],
  providers: [ClientService, AddressService],
  bootstrap: [AppComponent],
})
export class AppModule {}
