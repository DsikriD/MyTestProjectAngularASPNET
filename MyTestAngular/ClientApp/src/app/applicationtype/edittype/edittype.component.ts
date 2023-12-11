import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApplicationType } from '../../modal/applicationtype.mode';

@Component({
  selector: 'app-edittype',
  templateUrl: './edittype.component.html',
  styleUrls: ['./edittype.component.css']
})
export class EdittypeComponent {
  hideModal: boolean = false;
  @Input() type: ApplicationType ={
    id: -1,
    name: ''
  }

  @Output() typeForEdit = new EventEmitter();

  editType() {
    this.typeForEdit.emit(this.type);
  }

  Close() {
    console.log(this.hideModal);
    this.hideModal=!this.hideModal
  }
}
