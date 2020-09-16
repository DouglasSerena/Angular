import { SimpleChanges } from '@angular/core';

export function ChangeAddressId(changes: SimpleChanges) {
  if (changes.addressId && this.addressId) {
    this.addressService
      .getByIdClient(this.clienteId, this.addressId)
      .subscribe((data) => {
        this.formAddress.patchValue({
          logradouro: data.logradouro,
          numero: data.numero,
          bairro: data.bairro,
          cidade: data.cidade,
          estado: data.estado,
          complemento: data.complemento,
        });
        this.addressService
          .getZip(data.estado, data.cidade)
          .subscribe((cep) => this.formAddress.patchValue({ cep }));
      });
  }
}
