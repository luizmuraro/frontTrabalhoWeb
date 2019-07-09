import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAdicionarPacienteComponent } from './pagina-adicionar-paciente.component';

describe('PaginaAdicionarPacienteComponent', () => {
  let component: PaginaAdicionarPacienteComponent;
  let fixture: ComponentFixture<PaginaAdicionarPacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaAdicionarPacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaAdicionarPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
