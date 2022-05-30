import { Component, getNgModuleById, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DemandaService } from '../../../common/service/demanda.service';
import { ComunaService } from '../../../common/service/comuna.service';
import { CasosService } from '../../../common/service/casos.service';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';


@Component({
  selector: 'app-new-demanda',
  templateUrl: './new-demanda.component.html',
  styleUrls: ['./new-demanda.component.css']
})



export class NewDemandaComponent implements OnInit {

  comunasControl: FormControl;
  tipoDemandaControl: FormControl;
  telefono: FormControl;
  form: FormGroup;
  comunas: any;
  tiposDemanda: any;
  formerrors: any;
  dataDemandaForm = {
    demanda: {
      fecha: "",
      hora: "",
      seguimiento: "",
      detalle: "",
      tipo_demanda: "",
      caso: ""
    },
    demandado: {
      nombre: "",
      apaterno: "",
      comuna: "",
      rut: "",
      telefono: ""
    },
    demandante: {
      nombre: "",
      apaterno: "",
      comuna: "",
      rut: "",
      telefono: ""

    }

  }
  myForm: FormGroup;
  demanda = {
    seguimiento: '',
    detalle: '',
    tipo_demanda: '',
  }
  constructor(private ds: DemandaService,
    private comunaService: ComunaService,
    private casosService: CasosService,
    private route: Router,
    private formBuilder: FormBuilder
  ) { }


  ngOnInit(): void {

    this.comunasControl = new FormControl();
    this.tipoDemandaControl = new FormControl();


    this.form = this.formBuilder.group({
      seguimiento: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(10), Validators.pattern('[a-zA-Z]+')]),
      fecha: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
      hora: new FormControl('', [Validators.required]),
      tipo_demanda: new FormControl('', [Validators.required]),
      detalle: new FormControl('', [Validators.required]),
      r_demandado: new FormControl('', [Validators.required]),
      n_demandado: new FormControl('', [Validators.required]),
      a_demandado: new FormControl('', [Validators.required]),
      t_demandado: new FormControl('', [Validators.required]),
      c_demandado: new FormControl('', [Validators.required]),
      r_demandante: new FormControl('', [Validators.required]),
      n_demandante: new FormControl('', [Validators.required]),
      a_demandante: new FormControl('', [Validators.required]),
      t_demandante: new FormControl('', [Validators.required]),
      c_demandante: new FormControl('', [Validators.required]),
    });



  }

  get seguimiento() {
    return this.form.get('seguimiento')
  }
  get fecha() {
    return this.form.get('fecha')
  }

  get hora() {
    return this.form.get('hora')
  }

  get tipo_demanda() {
    return this.form.get('tipo_demanda')
  }

  get detalle() {
    return this.form.get('detalle')
  }

  get r_demandado() {
    return this.form.get('r_demandado')
  }

  get n_demandado() {
    return this.form.get('n_demandado')
  }
  get a_demandado() {
    return this.form.get('a_demandado')
  }
  get t_demandado() {
    return this.form.get('t_demandado')
  }
  get c_demandado() {
    return this.form.get('c_demandado')
  }
  get r_demandante() {
    return this.form.get('r_demandante')
  }
  get n_demandante() {
    return this.form.get('n_demandante')
  }
  get a_demandante() {
    return this.form.get('a_demandante')
  }
  get t_demandante() {
    return this.form.get('t_demandante')
  }
  get c_demandante() {
    return this.form.get('c_demandante')
  }


  SaveDemanda() {
    localStorage.setItem('form-data', JSON.stringify(this.form.value));
    localStorage.getItem('form-data')
    this.ds.setDemandas(this.form.value)
    this.ds.emitDemandaCreateEvent(this.form.value);
    this.route.navigate(['dashboard/demanda']);
  }

}

@Component({
  selector: 'dialog-demanda',
  templateUrl: 'dialog-demanda.html',
})
export class dialog { }