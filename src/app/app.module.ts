import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from '../login/login.component';
import { CrudServicoComponent } from '../crud-servico/crud-servico.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CrudServicoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
