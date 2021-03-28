import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DerslerComponent } from './dersler/dersler.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DerslerService } from './services/dersler.service';
import { HesaplamaPipe } from './pipes/hesaplama.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DerslerComponent,
    HesaplamaPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [DerslerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
