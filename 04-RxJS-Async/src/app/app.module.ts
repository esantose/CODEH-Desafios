import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PromiseComponent } from './components/promise/promise.component';
import { ObservableComponent } from './components/observable/observable.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { dbData } from './dbData';

@NgModule({
  declarations: [AppComponent, PromiseComponent, ObservableComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(dbData),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
