import { Address } from './Address.model';

export interface Client {
  id: number;
  nome: string;
  email: string;
  fone: string;
  senha: string | null;
  tokenDevice: string | null;
  codigoVerificacao: string;
  contaAtiva: boolean;
  wirecardId: null;
  cpf: null;
  dataCadastro: string;
  dataNascimento: null;
  dataUltimaCompra: string;
  enderecos: Address[];
}
