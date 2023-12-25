import { HttpClient, HttpEvent } from '@angular/common/http';
import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ApplicationType } from '../../modal/applicationtype.mode';
import { Category } from '../../modal/category.mode';
import { Image } from '../../modal/Image';
import { Product} from '../../modal/product.mode';

@Component({
  selector: 'app-productadd',
  templateUrl: './productadd.component.html',
  styleUrls: ['./productadd.component.css']
})
export class ProductaddComponent {
  hideModal: boolean = false;
  http: HttpClient;
  selectedFile: File | undefined;
  baseUrl: string;
  categorys: Category[] = [];
  types: ApplicationType[] = [];
  @Output() productToAdd = new EventEmitter();

  onFileSelected(event:any) {
    this.selectedFile = <File>event.target.files[0];
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile, this.selectedFile?.name);
      this.addImage(formData);
    }
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

  addImage(imageFile: FormData) {
    console.log(imageFile.getAll + ": addImage");
    this.http.put<Image>(this.baseUrl + 'Image/', imageFile).subscribe(result => {
      this.product.image = result.name as string;
    });
  }

  isFillProduct() {
    if (this.product.name == '' || this.product.shortDes == '' || this.product.description == '' || this.product.image == '' || this.product.price )
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
