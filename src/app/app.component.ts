import { Component } from '@angular/core';
import { NewDemandaService } from './components/dashboard/new-demanda/new-demanda.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'lawyer-app';
  constructor(private user: NewDemandaService) {
    this.user.getData().subscribe(data => {
      console.warn(data)
    })

  }
}
