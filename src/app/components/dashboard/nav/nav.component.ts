import { Component, AfterContentInit, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NgStyle } from '@angular/common';
import { AuthService, } from '../../../common/service/auth.service';
import { ProfileService } from '../../../common/service/profile.service';
import { ProfileComponent } from '../profile/profile.component'
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isExpanded: boolean = true;
  size = 300;
  name: string;
  lastname: string;
  constructor(private breakpointObserver: BreakpointObserver, public authService: AuthService, private profileService: ProfileService) {
    this.changeText = false;
  }
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  Toggle() {
    this.isExpanded = !this.isExpanded;
    if (!this.isExpanded) {

      this.size = 300;
    } else {
      this.size = 30;
    }
  }
  //HOVER
  changeText: boolean;

  ngOnInit() {
    const userInfo = JSON.parse(localStorage.getItem("userInfo") || '{"name": "Katherine", "lastname": "cespedes"}')
    this.name = userInfo.name;
    this.lastname = userInfo.lastname

    this.profileService.getNavChangeEmitter().subscribe(() => {
      const userInfo = JSON.parse(localStorage.getItem("userInfo") || '{"name": "Katherine", "lastname": "cespedes"}')
      this.name = userInfo.name;
      this.lastname = userInfo.lastname
    })
  }





}
