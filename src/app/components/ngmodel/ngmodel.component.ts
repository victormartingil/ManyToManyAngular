import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ngmodel',
  templateUrl: './ngmodel.component.html',
  styleUrls: ['./ngmodel.component.css']
})
export class NgmodelComponent implements OnInit {

  text: string;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  crearFormulario(){
    this.form = this.fb.group({
      variableCtrl: [this.text],
    });
  }

  toUppercase(){
    this.text = this.text.toUpperCase();
  }

  toLowercase(){
    this.text = this.text.toLowerCase();
  }

  editarVariable(){
    this.text = this.form.get('variableCtrl').value;
  }

}
