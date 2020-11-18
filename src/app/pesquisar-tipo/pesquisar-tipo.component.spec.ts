import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisarTipoComponent } from './pesquisar-tipo.component';

describe('PesquisarTipoComponent', () => {
  let component: PesquisarTipoComponent;
  let fixture: ComponentFixture<PesquisarTipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesquisarTipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisarTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
