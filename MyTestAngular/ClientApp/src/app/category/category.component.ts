import { Component, EventEmitter, Inject, Injectable, Input, OnInit, Output} from '@angular/core';
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
            this.addCategory(this.eventEmitterService.category);
          });
      } 
  }

  edit(category: Category) {
    console.log("NEEEEEED Edit!!!!" + category.name + category.id);
    this.loading = false;
    return this.http.put<Category>(this.baseUrl + 'Category/',category).subscribe(result => {
      this.getCategory();
    });
  }

  addCategory(category: Category) {
    this.loading = false;
        return this.http.post<Category>(this.baseUrl + 'Category/', category).subscribe(result => {
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

