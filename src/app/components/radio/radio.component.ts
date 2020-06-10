import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {

  option: any;
  optionB: any;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.crearFormulario();
   }

  ngOnInit(): void {
  }

  crearFormulario(){
    this.form = this.fb.group({
      optionCtrl: [''],
      optionBCtrl: ['']
    });
  }

  guardar(){
    this.option = this.form.get('optionCtrl').value;
  }

  guardarB(){
    this.optionB = this.form.get('optionBCtrl').value;
  }

}
