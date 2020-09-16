import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputComponent } from './Input/input.component';
import { LoadingComponent } from './loading/loading.component';
import { ModalComponent } from './modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  exports: [InputComponent, LoadingComponent, ModalComponent, CommonModule],
  declarations: [InputComponent, LoadingComponent, ModalComponent],
  providers: [],
})
export class SharedModule {}
