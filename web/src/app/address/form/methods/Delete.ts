export function Delete() {
  if (this.addressId) {
    this.loading = true;
    this.addressService.delete(this.clienteId, this.addressId).subscribe(
      (res) => {
        this.handleSuccess();
        this.delAddress.emit(this.addressId);
      },
      (err) => {
        this.messageError =
          'Houve um erro ao deletar o endereço. Tente novamente';
        this.loading = false;
      }
    );
  }
}
