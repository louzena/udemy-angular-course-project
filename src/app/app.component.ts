import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  feature : number = 0;

  updateDisplayFeature( feature: number ) : void {

    this.feature = feature;

  }
 
 
}
