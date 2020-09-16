export interface Address {
  enderecoCompleto: string;
  latitude: number;
  longitude: number;
  valorFrete: number;
  complemento: string;
  desativado: boolean;
  distancia: number;
  cliente: string | number;
  clienteId: number;
  dataCadastro: string;
  logradouro: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  loja: string | null;
  lojaId: number;
  id: number;
}
