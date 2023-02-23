import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAplicacaoComponent } from './cadastro-aplicacao.component';

describe('CadastroAplicacaoComponent', () => {
  let component: CadastroAplicacaoComponent;
  let fixture: ComponentFixture<CadastroAplicacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroAplicacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroAplicacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
