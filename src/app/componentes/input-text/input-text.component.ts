import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {


  @Input() controlName: any;
  @Input() form: FormGroup;
  @Input() descricao: String;


  control:AbstractControl;

  constructor() { }

  ngOnInit() {
    this.control = this.form.get(this.controlName);
  }

}
