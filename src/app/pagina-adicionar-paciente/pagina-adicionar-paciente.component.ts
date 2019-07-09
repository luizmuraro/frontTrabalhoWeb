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
  adicionarPaciente() {
    console.log(this.pacienteForm.get('nome').value)
    this.teleMedService.adicionarPacinete(this.pacienteForm.get('nome').value, this.pacienteForm.get('cpf').value, this.pacienteForm.get('telefone').value, this.pacienteForm.get('email').value, this.pacienteForm.get('anamnese').value, this.pacienteForm.get('diagnostico').value, this.pacienteForm.get('tratamento').value)
      .subscribe(event => {
        console.log(event);
      })
  }
}
