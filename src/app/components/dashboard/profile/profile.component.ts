import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProfileService } from 'src/app/common/service/profile.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild('form') profileForm: NgForm;
  name: string;
  lastname: string;
  constructor(private profileService: ProfileService, private _snackBar: MatSnackBar) { }


  ngOnInit(): void {


  }

  saveChanges() {
    localStorage.setItem("userInfo", JSON.stringify(this.profileForm.value));

    this.profileService.emitNavChangeEvent(this.profileForm.value);
    this._snackBar.open('Informacion cambiada correctamente', '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

}
