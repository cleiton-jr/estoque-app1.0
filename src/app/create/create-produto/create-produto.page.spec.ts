import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateProdutoPage } from './create-produto.page';

describe('CreateProdutoPage', () => {
  let component: CreateProdutoPage;
  let fixture: ComponentFixture<CreateProdutoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateProdutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
