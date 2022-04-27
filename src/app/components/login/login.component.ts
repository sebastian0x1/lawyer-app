import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { AuthService } from '../../common/service/auth.service';

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
  //
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router, private authService: AuthService) {

    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  ingresar() {
    const user = {
      username: this.form.value.username,
      password: this.form.value.password
    }
    this.loadingSpinner = true;

    // llamada a la api con los datos del formulario
    this.authService.signIn(user).subscribe(
      res => {
        this.router.navigate(['/dashboard']);
        this.fakeLoading();
        localStorage.setItem('token', res.token)

      },
      err => {
        this.error()
        this.form.reset()
      }

    )

    // if (user.username == 'hola' && user.password == 'chao') {
    //   this.router.navigate(['/dashboard']);
    // } else if (user.username == 'chao' && user.password == 'hola') {
    //   this.router.navigate(['/dashboard-admin']);
    // } else {
    //   this.error();
    //   this.form.reset();
    // }

  }

  error() {
    this._snackBar.open('Usuario o contrasenna incorrecto', '', {
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
    this.fakeLoading();
  }

  fakeLoading() {
    this.loadingSpinner = false;
    setTimeout(() => {
    }, 1);
  }

}
