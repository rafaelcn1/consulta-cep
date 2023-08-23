import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';

import { ToastrModule } from 'ngx-toastr';

import { ConsultaComponent } from './componentes/consulta/consulta.component';
import { ResultadoComponent } from './componentes/resultado/resultado.component';


@NgModule({
  declarations: [
    AppComponent,
    ConsultaComponent,
    ResultadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule, 
    MatInputModule, 
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule,
    MatTableModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      closeButton: true,
      progressBar: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
