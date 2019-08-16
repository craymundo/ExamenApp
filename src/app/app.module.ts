import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{RouterModule, Routes}   from '@angular/router';
import{HttpModule}   from '@angular/http';
import{FormsModule}   from '@angular/forms';

import { AppComponent } from './app.component';
import { UsuarioListComponent } from './componentes/usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './componentes/usuario-form/usuario-form.component';

import { DataService } from './services/data.service';


const appRoutes:Routes=[
  {path:'', component:UsuarioListComponent},
  {path:'op', component:UsuarioFormComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    UsuarioFormComponent,
    UsuarioListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DataService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
