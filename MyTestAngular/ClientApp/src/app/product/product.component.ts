import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { Form } from '@angular/forms';
import { Image } from '../modal/Image';
import { Product} from '../modal/product.mode';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  http: HttpClient;
  baseUrl: string = "";
  products: Product[] = [];
  loading: boolean = false;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.http = http;
    this.baseUrl = baseUrl;
    this.getProduct();
  }

  getProduct() {
    this.http.get<Product[]>(this.baseUrl + 'Product').subscribe(result => {
      this.products = result;
      console.log(this.products)
      this.loading = true;
    }, error => console.error(error));
  }

  addProduct(product: Product) {
    console.log(product);
    this.loading = false;

    this.http.post<Product>(this.baseUrl + 'Product/', product ).subscribe(result => {
      this.getProduct();
    });
  }

 

  deleteProduct(id: number) {
    this.loading = false;
    this.http.delete<Product>(this.baseUrl + 'Product/' +  id).subscribe(result => {
      this.getProduct();
    });
  }


}
