import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { DemandaService } from '../../../common/service/demanda.service';
import { ComunaService } from '../../../common/service/comuna.service';



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
  constructor(private demandaService: DemandaService, private comunaService: ComunaService) {

  
  }

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
    

   

  
  }

  
   


  
  // constructor(public dialog: MatDialog) { }

  // openDialog() {
  //   const dialogRef = this.dialog.open(dialogDemanda);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }
}

@Component({
  selector: 'dialog-demanda',
  templateUrl: 'dialog-demanda.html',
})
export class dialog { }