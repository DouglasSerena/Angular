import { async } from 'rxjs/internal/scheduler/async';
import { Address } from '../../../models';
import { $filter } from '../functions/Filter';

export async function Update() {
  const datas = await $filter(this.formAddress.getRawValue());
  this.loading = true;
  this.addressService
    .update({
      ...datas,
      clienteId: this.clienteId,
      id: this.addressId,
    })
    .subscribe(
      (res: { status: number; data: {} }) => {
        this.handleSuccess();
        this.updAddress.emit(res.data as Address);
      },
      (err) => {
        this.messageError =
          'Houve um erro na Atualização do endereço. Tente novamente';
        this.loading = false;
      }
    );
}
