import { Address } from '../../../models';
import { $filter } from '../functions/Filter';

export async function Store() {
  const datas = await $filter(this.formAddress.getRawValue());
  this.loading = true;
  this.addressService
    .store({
      clienteId: this.clienteId,
      ...datas,
    })
    .subscribe(
      (res: { status: number; data: {} }) => {
        this.handleSuccess();
        this.addAddress.emit(res.data as Address);
      },
      (err) => {
        this.messageError =
          'Houve um erro ao cadastrar do endereço. Tente novamente';
        this.loading = false;
      }
    );
}
