import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { PaginaMedicoComponent } from './areaMedico/pagina-medico/pagina-medico.component';
import { PaginaPacienteComponent } from './areaMedico/pagina-paciente/pagina-paciente.component';

const routes: Routes = [
  // {path: '', component: LoginComponent},
  {path: '', component: PaginaMedicoComponent}
    //  {path: '', component: PaginaPacienteComponent}       
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
