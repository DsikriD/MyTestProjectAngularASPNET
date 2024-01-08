import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { Product } from '../modal/product.mode';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  baseUrl: string;
  http: HttpClient;
  loading: boolean = false;
  products: Product[] = [];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
    this.http = http;
    this.getProduct();
  }

  getProduct() {
    this.http.get<Product[]>(this.baseUrl + 'Product').subscribe(result => {
      this.products = result;
      this.loading = true;
    }, error => console.error(error));
  }
}
