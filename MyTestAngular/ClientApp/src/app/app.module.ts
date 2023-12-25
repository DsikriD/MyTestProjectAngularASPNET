import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { CategoryComponent } from './category/category.component';
import { ModalComponent } from './category/modal/modal.component';
import { EventEmitterService } from './category/event-emitter.service';
import { ApplicationTypeComponent } from './applicationtype/applicationtype.component';
import { LoadingComponent } from './loading/loading.component';
import { EditComponent } from './category/edit/edit.component';
import { AddtypeComponent } from './applicationtype/addtype/addtype.component';
import { EdittypeComponent } from './applicationtype/edittype/edittype.component';
import { ProductComponent } from './product/product.component';
import { ProducteditComponent } from './product/productedit/productedit.component';
import { ProductaddComponent } from './product/productadd/productadd.component';
import { HomeCardComponent } from './home/home-card/home-card.component';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    HomeCardComponent,
    EditComponent,
    CategoryComponent,
    LoadingComponent,
    ModalComponent,
    CounterComponent,
    AddtypeComponent,
    ProductComponent, 
    EdittypeComponent,
    ProductaddComponent,
    ProducteditComponent,
    FetchDataComponent,
    ApplicationTypeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'applicationtype', component: ApplicationTypeComponent },
      { path: 'product', component: ProductComponent }
    ])
  ],
  providers: [
  EventEmitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
