import { Address } from './../../../models';
import { $geoLocation } from './GeoLocation';

export const $filter = async (values: any): Promise<Address> => {
  const { latitude, longitude } = await location();
  return {
    latitude,
    longitude,
    complemento: values.complemento,
    logradouro: values.logradouro,
    numero: values.numero,
    bairro: values.bairro,
    cidade: values.cidade,
    estado: values.estado,
  } as Address;
};

async function location(): Promise<{ latitude: number; longitude: number }> {
  try {
    return await $geoLocation();
  } catch (err) {
    return {
      latitude: -29.330263,
      longitude: -49.765697,
    };
  }
}
