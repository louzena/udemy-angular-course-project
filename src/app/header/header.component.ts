import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() onTabSelected = new EventEmitter<number>();
  @Input() currentTabIndex : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onTabClicked(tabIndex : number) {   

    this.currentTabIndex = tabIndex;    
    this.onTabSelected.emit( tabIndex );

  }

}
