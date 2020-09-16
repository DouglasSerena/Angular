import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() title: string;

  @Output() yes = new EventEmitter();
  @Output() no = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
