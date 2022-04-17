import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-user-demanda',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  ngOnInit(): void {
  }
  form: FormGroup;
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
  cars: Car[] = [
    { value: 'volvo', viewValue: 'Volvo' },
    { value: 'saab', viewValue: 'Saab' },
    { value: 'mercedes', viewValue: 'Mercedes' },
  ];
  foodControl = new FormControl(this.foods[2].value);
  carControl = new FormControl(this.cars[1].value);

  constructor() {
    this.form = new FormGroup({
      food: this.foodControl,
      car: this.carControl,
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

// @Component({
//   selector: 'dialog-demanda',
//   templateUrl: 'dialog-demanda.html',
// })
// export class dialog { }