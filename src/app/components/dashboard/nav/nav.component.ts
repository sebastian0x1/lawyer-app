import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isExpanded: boolean = true;
  size = 300;

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


  constructor(private breakpointObserver: BreakpointObserver) { }

}
