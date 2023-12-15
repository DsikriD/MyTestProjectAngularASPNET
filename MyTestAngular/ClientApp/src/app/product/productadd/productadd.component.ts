import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { ApplicationType } from '../../modal/applicationtype.mode';
import { Category } from '../../modal/category.mode';
import { Product } from '../../modal/product.mode';

@Component({
  selector: 'app-productadd',
  templateUrl: './productadd.component.html',
  styleUrls: ['./productadd.component.css']
})
export class ProductaddComponent {
  hideModal: boolean = false;
  http: HttpClient;
  baseUrl: string;
  categorys: Category[] = [];
  types: ApplicationType[] = [];
  @Output() productToAdd = new EventEmitter();

  Aptype: ApplicationType = {
    id: 0,
    name: ''
  }
  category: ApplicationType = {
    id: 0,
    name: ''
  }

  selectedFile: File | undefined;

  onSelectFile(fileInput: any) {
    this.selectedFile = <File>fileInput.target.files[0];
  }

  testFile() {
    console.log(this.selectedFile);
  }

  product: Product = {
      id: 0,
      name: '',
      shortDes: '',
      description: '',
      image: '',
      price: 0,
      categoryId: 0,
      applicationTypeId: 0,
      tempCount: 1
  }

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string){
    this.http = http;
    this.baseUrl = baseUrl;

    this.http.get<Category[]>(this.baseUrl + 'Category').subscribe(result => {
      this.categorys = result;
    }, error => console.error(error));

    this.http.get<ApplicationType[]>(this.baseUrl + 'Type').subscribe(result => {
      this.types = result;
    });

  }

 



  isFillProduct() {
    if (this.product.name == '' || this.product.shortDes == '' || this.product.description == '' || this.product.image == '' || this.product.price<=0 )
      return false;
    return true;
  }

  AlertMessage() {
    alert("Пожалуйста, запролните все поля"); 
  }

  addProduct() {
    this.productToAdd.emit(this.product);
  }

  Close() {
    this.hideModal = !this.hideModal
  }

}
