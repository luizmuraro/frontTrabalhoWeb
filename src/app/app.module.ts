import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProntuarioComponent } from './prontuario/prontuario.component';
import { LoginComponent } from './login/login.component';
import { PaginaMedicoComponent } from './areaMedico/pagina-medico/pagina-medico.component';
import { PaginaPacienteComponent } from './areaMedico/pagina-paciente/pagina-paciente.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    ProntuarioComponent,
    LoginComponent,
    PaginaMedicoComponent,
    PaginaPacienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
