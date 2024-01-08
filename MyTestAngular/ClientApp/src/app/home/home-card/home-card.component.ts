import { Component, Input, NgModule } from '@angular/core';
import { Product } from '../../modal/product.mode';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css']
})

export class HomeCardComponent {

  imagePath: string = "\\images\\product\\"

  @Input() public productCard: Product = {
    id: 0,
    name: "",
    shortDes: "",
    description: "",
    price: 0,
    image: "",
    categoryId: 0,
    applicationTypeId: 0,
    tempCount: 0
  }
}
