import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output()
  toggleSidenav = new EventEmitter<boolean>();
  toggleSide() {
    this.toggleSidenav.emit();
  }
  constructor() { }

  ngOnInit(): void {
  }

}

