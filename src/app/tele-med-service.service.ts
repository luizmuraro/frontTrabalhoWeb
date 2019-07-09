import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeleMedServiceService {

  
  constructor(private http: HttpClient) { }

  adicionarPacinete(nome: string, cpf: string, telefone: string, email: string, anamnese: string, diagnostico: string, tratamento: string): 
  Observable<HttpEvent<{}>> {

console.log(nome)
console.log(cpf)
console.log(telefone)
console.log(email)
console.log(anamnese)
console.log(diagnostico)
console.log(tratamento)
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    

    const formdata: FormData = new FormData();

    formdata.append('nome', nome);
    formdata.append('cpf', cpf);
    formdata.append('telefone', telefone);
    formdata.append('email', email);
    formdata.append('anamnese', anamnese);
    formdata.append('diagnostico', diagnostico);
    formdata.append('tratamento', tratamento);

    const req = new HttpRequest('POST', 'http://localhost:8081/pacientes', formdata, {
      headers: headers
    })
     
    return this.http.request(req);
  } 


}
