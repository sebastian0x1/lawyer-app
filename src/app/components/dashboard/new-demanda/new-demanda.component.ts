import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
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
  form : FormGroup;
  comunas: any;
  tiposDemanda: any;

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

  constructor(private demandaService: DemandaService, 
             private comunaService: ComunaService, 
             private casosService: CasosService,
             private router: Router
             ) {}
  

   ngOnInit(): void {
     this.comunaService.getComunas().subscribe(
      res => {
         this.comunas = res.comunas  
      }
    )

    this.demandaService.getTipoDemandas().subscribe(
      res => {
        this.tiposDemanda = res.tDemanda
      }
    )
    this.comunasControl = new FormControl();
    this.tipoDemandaControl= new FormControl();
    this.form = new FormGroup({
      comumna: this.comunasControl,
      tipoDemanda: this.tipoDemandaControl,
    });
    //Set case from local storage
    this.dataDemandaForm.demanda.caso = this.casosService.getCaseOfLocalStorage();

  
  }

  
   
  loga(){
    
    this.dataDemandaForm.demandado.comuna =
      this.comunaService.findIdOfComunabyName(
        this.comunas,
        this.dataDemandaForm.demandado.comuna 
    );
    
    this.dataDemandaForm.demandante.comuna =
    this.comunaService.findIdOfComunabyName(
      this.comunas,
      this.dataDemandaForm.demandado.comuna 
    );

    this.dataDemandaForm.demanda.tipo_demanda =
      this.demandaService.findIdOfTipoDemandabyName(
        this.tiposDemanda,
        this.dataDemandaForm.demanda.tipo_demanda
    );
    
    this.demandaService.createDemanda(this.dataDemandaForm).subscribe(
       res => {
          // this.router.navigate(["demanda"])
          console.log(res)
       },
       err => {
         console.log(err)
       } 
     )

  }

  

}

@Component({
  selector: 'dialog-demanda',
  templateUrl: 'dialog-demanda.html',
})
export class dialog { }