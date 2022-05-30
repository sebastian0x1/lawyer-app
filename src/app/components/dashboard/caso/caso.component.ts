
import { DataSource } from '@angular/cdk/collections';
import { Observable, ReplaySubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, SortDirection } from '@angular/material/sort';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Data } from '@angular/router';
import { CasoInterface } from './caso.interface';



/**
 * @fecha_asignada Adding and removing data when using an observable-based datasource.
 */
@Component({
  selector: 'app-caso',
  templateUrl: './caso.component.html',
  styleUrls: ['./caso.component.css'],
})
export class CasoComponent {
  displayedColumns: string[] = ['created_at', 'detalle', 'estado', 'Select'];
  dataSource = new MatTableDataSource([]);
  saveBtn = true;

  constructor(private route: ActivatedRoute) {
    var data = localStorage.getItem("dataCase");
    if (data) {
      var parsedData = JSON.parse(localStorage.getItem("dataCase")!);
      this.dataSource = new MatTableDataSource(parsedData);
    } else {
      localStorage.setItem("dataCase", JSON.stringify(ELEMENT_DATA));
      var parsedData = JSON.parse(localStorage.getItem("dataCase")!);
      this.dataSource = new MatTableDataSource(parsedData);
    }
  }
}

const ELEMENT_DATA: CasoInterface[] = [
  { created_at: '01/MAR', detalle: 'Homicidio en tijuana', id: 'DEM001', estado: 'disponible' },
  { created_at: '01/MAR', detalle: 'Violencia a un hombre timido', id: 'DEM002', estado: 'disponible' },
  { created_at: '01/MAR', detalle: 'acoso laboral', id: 'DEM003', estado: 'disponible' },
  { created_at: '01/MAR', detalle: 'Robo con intimidacion', id: 'DEM004', estado: 'disponible' },
  { created_at: '01/MAR', detalle: 'Parricidio', id: 'DEM005', estado: 'disponible' },
  { created_at: '01/MAR', detalle: 'Delito informatico', id: 'DEM006', estado: 'disponible' },
  { created_at: '01/MAR', detalle: 'Delito menor', id: 'DEM007', estado: 'disponible' },
  { created_at: '01/MAR', detalle: 'Robo en lugar habitado', id: 'DEM008', estado: 'disponible' },
  { created_at: '01/MAR', detalle: 'Malversasion de fondos', id: 'DEM009', estado: 'disponible' },
  { created_at: '01/MAR', detalle: 'Evasion de Impuestos', id: 'DEM010', estado: 'disponible' },
];
