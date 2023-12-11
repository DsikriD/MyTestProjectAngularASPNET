import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApplicationType } from '../modal/applicationtype.mode';


@Component({
  selector: 'applicationtype-data',
  templateUrl: './applicationtype.component.html'
})
export class ApplicationTypeComponent {
  public appTypes: ApplicationType[] = [];
  http: HttpClient;
  baseUrl: string = "";
  loading: boolean = false;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.http = http;
    this.baseUrl = baseUrl;
    this.getType();
  }

  getType() {
    this.http.get<ApplicationType[]>(this.baseUrl + 'Type').subscribe(result => {
      this.appTypes = result;
      this.loading = true;
    });
  }

  deleteType(id: number) {
    this.loading = false;
    this.http.delete<ApplicationType>(this.baseUrl + 'Type/' + id).subscribe(result => {
      this.getType();
    })
  }

  editType(type: ApplicationType) {
    this.loading = false;
    return this.http.put<ApplicationType>(this.baseUrl + 'Type/', type).subscribe(result => {
      this.getType();
    });
  }

  addType(type: ApplicationType) {
    this.loading = false;
    return this.http.post<ApplicationType>(this.baseUrl + 'Type/', type).subscribe(result => {
      this.getType();
    });
  }


}


