import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { User } from '../../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  user: User = new User();

  error: string;

  mostrarMalaSuerte = false;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {
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

  login(){
    this.user.email = this.form.get('emailCtrl').value;
    this.user.password = this.form.get('passwordCtrl').value;

    this.authService.login(this.user)
      .subscribe(data => {
        this.router.navigate(['/private']);
      }, (err) => {
        this.error = err.error.error.message;
      }
      );
  }

  malaSuerte(){
    this.mostrarMalaSuerte = true;
  }

}
