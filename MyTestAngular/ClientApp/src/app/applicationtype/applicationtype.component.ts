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

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.http = http;
    this.baseUrl = baseUrl;
    http.get<ApplicationType[]>(baseUrl + 'Type').subscribe(result => {
      this.appTypes = result;
    });
  }
}


