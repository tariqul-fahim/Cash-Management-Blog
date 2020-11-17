import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PartOneComponent } from './home/part-one/part-one.component';
import { PartTwoComponent } from './home/part-two/part-two.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PartOneComponent,
    PartTwoComponent

  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
