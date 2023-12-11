import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../../modal/category.mode';
import { EventEmitterService } from '../event-emitter.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  public hideModal: boolean = false;
  @Input() public categoryEdit: Category = {
    id: -1,
    name : ''
  }
  @Output() categoryForEdit = new EventEmitter();

  constructor() {

  }

  editCategory() {
    console.log(this.categoryEdit);
    this.categoryForEdit.emit(this.categoryEdit);
  }

  showActive() {
    console.log(this.categoryEdit)
  }

  Close() {
    this.hideModal = !this.hideModal;
  }

}
