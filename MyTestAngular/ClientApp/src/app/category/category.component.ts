import { Component, Inject, Injectable, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventEmitterService } from './event-emitter.service';
import { Category } from '../modal/category.mode';
import { delay } from 'rxjs';

@Component({
  selector: 'category-data',
  templateUrl: './category.component.html'
})

  @Injectable({
    providedIn: 'root'
  })

export class CategoryComponent implements OnInit{
  categories: Category[] = [];
  private baseUrl: string = "";
  loading: boolean = false;
  http: HttpClient;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private eventEmitterService: EventEmitterService) {
    this.baseUrl = baseUrl;
    this.http = http;
    this.getCategory();
  }
    ngOnInit(): void {
      if (this.eventEmitterService.subsVar == undefined) {
        this.eventEmitterService.subsVar = this.eventEmitterService.
          invokeFirstComponentFunction.subscribe((name: string) => {
            console.log("ConsoleLOG" + this.eventEmitterService.category.id + this.eventEmitterService.category.name);
            this.addCategory(this.eventEmitterService.category);
          });
      } 
    }

  addCategory(category: Category) {
    this.loading = false;
    return this.http.post<Category>(this.baseUrl + 'Category/', category).subscribe(result => {
      console.log("ConsoleLOG" + result);
      this.getCategory();
    });
  }

  getCategory() {
    this.http.get<Category[]>(this.baseUrl + 'Category').subscribe(result => {
      this.categories = result;
      this.loading = true;
    }, error => console.error(error));
  }

  deleteCategory(id: number) {
    this.loading = false;
    return this.http.delete<Category[]>(this.baseUrl + 'Category/' + id).subscribe(result => {
      this.getCategory();
    });
  }

}

