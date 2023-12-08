import { Component } from '@angular/core';

@Component({
  
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']

 
})
export class NavMenuComponent {
  dummyData = [{
    id: 1,
    name: "Foo"
  }, {
    id: 2,
    name: "Bar"
  }]

  isExpanded = false;

  IsDrop = false;

  Drop() {
    this.IsDrop = !this.IsDrop;
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
