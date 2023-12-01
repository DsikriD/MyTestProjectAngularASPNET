import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { Category } from '../../modal/category.mode';
import { EventEmitterService } from '../event-emitter.service';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  public category: Category = {
  id:0,
  name:''
  };

  public hideModal: boolean = false;

  constructor(private eventEmitterService: EventEmitterService) {
  }

  public addCategory() {
      this.eventEmitterService.onButtonClick(this.category);
      this.Close();
  }

  Close() {
    this.hideModal = !this.hideModal;
  }
 
}

