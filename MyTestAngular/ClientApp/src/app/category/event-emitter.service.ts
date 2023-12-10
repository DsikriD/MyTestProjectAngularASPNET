import { EventEmitter, Injectable } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { Category } from '../modal/category.mode';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {
  invokeFirstComponentFunction = new EventEmitter();
  invokeTwoComponentFunction = new EventEmitter();
  subsVar: Subscription | undefined;

  category: Category={
    id: 0,
    name: ''
  }

  constructor() {
    
  }

  onEditClick(category: Category) {
  this.category = category;
    this.invokeTwoComponentFunction.emit();
  }


  onButtonClick(category: Category) {
    this.category = category;
    this.invokeFirstComponentFunction.emit();
  }

}

