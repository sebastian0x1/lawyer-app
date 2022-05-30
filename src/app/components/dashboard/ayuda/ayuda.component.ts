import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, SortDirection } from '@angular/material/sort';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.component.html',
  styleUrls: ['./ayuda.component.css']
})
export class AyudaComponent {
  contacto: FormGroup;
  constructor(private _snackBar: MatSnackBar, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.contacto = this.formBuilder.group({
      fname: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(10), Validators.pattern('[a-zA-Z]+')]),
      lname: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
      a: new FormControl('', [Validators.required]),
      a2: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      p: new FormControl('', [Validators.required]),

    });
  }
  // If the user changes the sort order, reset back to the first page.


  get fname() {
    return this.contacto.get('fname')
  }
  get lname() {
    return this.contacto.get('lname')
  }
  get a() {
    return this.contacto.get('a')
  }
  get a2() {
    return this.contacto.get('a2')
  }
  get city() {
    return this.contacto.get('city')
  }
  get state() {
    return this.contacto.get('state')
  }
  get p() {
    return this.contacto.get('p')
  }


  enviar() {

    this._snackBar.open('Formulario enviado correctamente', '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
    this.contacto.reset;
  }


}

