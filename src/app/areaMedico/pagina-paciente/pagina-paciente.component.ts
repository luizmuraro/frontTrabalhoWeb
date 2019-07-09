import { PacientesService } from './../shared/pagina-medico/pacientes.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pagina-paciente',
  templateUrl: './pagina-paciente.component.html',
  styleUrls: ['./pagina-paciente.component.css']
})
export class PaginaPacienteComponent implements OnInit {

  pacientes: Array<any>;

  constructor(private pacientesService: PacientesService) { }

  ngOnInit() {
    this.pacientesService.getAll().subscribe(data => {
      this.pacientes = data;
    })
  }

}
