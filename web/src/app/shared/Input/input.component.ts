import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})
export class InputComponent implements OnInit {
  @Input() name: string;
  @Input() label: string;

  constructor() {}

  ngOnInit() {}
}
