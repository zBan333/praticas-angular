import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DataBindingModule } from './data-binding/data-binding.module';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { DiretivaNgifComponent } from './diretivas/diretiva-ngif/diretiva-ngif.component';
import { FilhoComponent } from './diretivas/diretiva-ngif/filho/filho.component';

@NgModule({
  declarations: [
    AppComponent,
    DiretivasComponent,
    DiretivaNgifComponent,
    FilhoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataBindingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
