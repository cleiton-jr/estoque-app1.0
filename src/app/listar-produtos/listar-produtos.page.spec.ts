import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarProdutosPage } from './listar-produtos.page';

describe('ProdutosPage', () => {
  let component: ListarProdutosPage;
  let fixture: ComponentFixture<ListarProdutosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListarProdutosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
