
import { DataSource } from '@angular/cdk/collections';
import { Observable, ReplaySubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ViewChild, AfterViewInit, AfterContentInit, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, SortDirection } from '@angular/material/sort';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Data } from '@angular/router';
import { DemandaService } from '../../../common/service/demanda.service';
import { DemandaInterface } from './demanda.interface';
import { MatSnackBar } from '@angular/material/snack-bar';



/**
 * @fecha_asignada Adding and removing data when using an observable-based datasource.
 */
@Component({
  selector: 'app-demanda',
  templateUrl: './demanda.component.html',
  styleUrls: ['./demanda.component.css'],
})
export class DemandaComponent implements AfterContentInit {
  displayedColumns: string[] = ['fecha', 'seguimiento', 'id', 'tipo_demanda_id', 'Editar', 'Eliminar'];
  dataSource;
  saveBtn = true;
  x: any;
  xParse: any;
  @ViewChild(MatTable) table: MatTable<any>;
  ELEMENT_DATA: DemandaInterface[] = [
    { fecha: new Date("01-04-2000").toDateString(), hora: '', detalle: '', caso_id: '', usuario_id: '', seguimiento: 'asd5ad7d', id: 'aasdasd', tipo_demanda_id: 'Asalto' },
    { fecha: new Date("01-05-2000").toDateString(), hora: '', detalle: '', caso_id: '', usuario_id: '', seguimiento: 'asa31d7d', id: 'aasdasd', tipo_demanda_id: 'Robo' },
    { fecha: new Date("01-06-2000").toDateString(), hora: '', detalle: '', caso_id: '', usuario_id: '', seguimiento: 'a35ad71d', id: 'aasdasd', tipo_demanda_id: 'Asalto' },
    { fecha: new Date("01-07-2000").toDateString(), hora: '', detalle: '', caso_id: '', usuario_id: '', seguimiento: 'asd5ad7d', id: 'aasdasd', tipo_demanda_id: 'Robo' },
    { fecha: new Date("01-08-2000").toDateString(), hora: '', detalle: '', caso_id: '', usuario_id: '', seguimiento: 'sdf234fd', id: 'aasdasd', tipo_demanda_id: 'Robo ' },
    { fecha: new Date("01-14-2000").toDateString(), hora: '', detalle: '', caso_id: '', usuario_id: '', seguimiento: 'sdf2fsff', id: 'aasdasd', tipo_demanda_id: 'Asalto' },
    { fecha: new Date("01-15-2000").toDateString(), hora: '', detalle: '', caso_id: '', usuario_id: '', seguimiento: 'sfsdf442', id: 'aasdasd', tipo_demanda_id: 'Asalto' },
    { fecha: new Date("01-16-2000").toDateString(), hora: '', detalle: '', caso_id: '', usuario_id: '', seguimiento: 'asjyjhdd', id: 'aasdasd', tipo_demanda_id: 'Robo ' },
    { fecha: new Date("01-17-2000").toDateString(), hora: '', detalle: '', caso_id: '', usuario_id: '', seguimiento: 'adfg5add', id: 'aasdasd', tipo_demanda_id: 'Asalto' },
    { fecha: new Date("01-18-2000").toDateString(), hora: '', detalle: '', caso_id: '', usuario_id: '', seguimiento: '', id: 'aasdasd', tipo_demanda_id: 'Robo ' },

  ];


  constructor(private route: ActivatedRoute, public ds: DemandaService, public _snackBar: MatSnackBar) {

    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);


  }

  ngAfterContentInit() {

    this.ds.getDemandaChangeEmitter().subscribe((dataItem) => {
      const newDemadaTableFormat =
      {
        fecha: dataItem.fecha,
        hora: dataItem.hora,
        detalle: '',
        caso_id: '',
        usuario_id: '',
        seguimiento: dataItem.seguimiento,
        id: 'UID-3114',
        tipo_demanda_id: dataItem.tipo_demanda
      }
      console.log(newDemadaTableFormat)
      this.ELEMENT_DATA.push(newDemadaTableFormat)
    })

  }

  type(ele: any, value: any, val: any) {
    console.log(value);
    console.log(ele["val"]);
    ele[val] = value;

    console.log(this.dataSource);
  }
  save() {
    this.saveBtn = true;
    localStorage.setItem("data", JSON.stringify(this.dataSource.data));
    console.log(this.dataSource);
  }

  edit() {

    this.saveBtn = false;
  }
  get() {
    this.route.snapshot.paramMap.get('seguimiento');
  }
  delete(element: number) {
    const data = this.dataSource.data;
    data.splice(element, 1);
    this.dataSource.data = data;
    this._snackBar.open('Demanda eliminada correctamente', '', {
      duration: 1000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }
  getinfo() {
  }

  get fecha() {
    return this.xParse.seguimiento
  }
}

//INSERT DATA FROM FORM TO LOCALSTORAGE WITH THIS FORMAT----

