import { Component, EventEmitter, Output } from '@angular/core';
import { ApplicationType } from '../../modal/applicationtype.mode';

@Component({
  selector: 'app-addtype',
  templateUrl: './addtype.component.html',
  styleUrls: ['./addtype.component.css']
})
export class AddtypeComponent {
  hideModal: boolean = false;
  type: ApplicationType = {
    id: 0,
    name :''
  }

  @Output() typeForAdd = new EventEmitter();

  addType() {
    this.typeForAdd.emit(this.type);
  }

  Close(){
    this.hideModal = !this.hideModal;
  }
}
