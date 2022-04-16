import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit {
  hide = true;
  centered = true;
  form: FormGroup;
  loadingSpinner = false;
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {

    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  ingresar() {
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    if (usuario == 'hola' && password == 'chao') {
      this.fakeLoading();
    } else {
      this.error();
      this.form.reset();
    }
  }
  error() {
    this._snackBar.open('Usuario o contrasenna incorrecto', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  fakeLoading() {
    this.loadingSpinner = false;
    setTimeout(() => {
      this.router.navigate(['dashboard']);

    }, 1);
  }
}
