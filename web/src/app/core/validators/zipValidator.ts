import { FormControl } from '@angular/forms';
import { timer } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { AddressService } from './../../services/Address.service';

export const zipValidators = (
  addressService: AddressService,
  time: number = 1000
) => {
  return (input: FormControl) => {
    return timer(time).pipe(
      switchMap(() => addressService.getDataWithZip(input.value)),
      map((res) => {
        return !res['erro'] ? null : { zipInvalid: true };
      })
    );
  };
};
