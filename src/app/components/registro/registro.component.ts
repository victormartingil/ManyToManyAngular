import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  form: FormGroup;

  user: User = new User();

  error: string;

  constructor(private fb: FormBuilder,
              private authService: AuthService) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  buildForm(){
    this.form = this.fb.group({
      emailCtrl : ['', [Validators.required, Validators.email]],
      passwordCtrl : ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get emailNoValido(){
    return  this.form.get('emailCtrl').invalid && this.form.get('emailCtrl').touched;
  }

  get passwordNoValido(){
    return  this.form.get('passwordCtrl').invalid && this.form.get('passwordCtrl').touched;
  }

  register(){
    this.user.email = this.form.get('emailCtrl').value;
    this.user.password = this.form.get('passwordCtrl').value;

    this.authService.register(this.user)
      .subscribe(data => {
           console.log(data);
      }, (err) => {
        this.error = err.error.error.message;
      }
      );
  }

}
