import { Component, OnInit } from '@angular/core';
import { TeleMedServiceService } from '../tele-med-service.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pagina-adicionar-paciente',
  templateUrl: './pagina-adicionar-paciente.component.html',
  styleUrls: ['./pagina-adicionar-paciente.component.css']
})
export class PaginaAdicionarPacienteComponent implements OnInit {

  pacienteForm: FormGroup;
  constructor(private teleMedService: TeleMedServiceService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.pacienteForm = this.formBuilder.group( {
      nome: [''],
      cpf: [''],
      email: [''],
      telefone: [''],
      anamnese: [''],
      diagnostico: [''],
      tratamento: ['']

    });
  }

}
