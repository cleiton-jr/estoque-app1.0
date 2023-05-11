import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlterarClientePage } from './alterar-cliente.page';

describe('AlterarClientePage', () => {
  let component: AlterarClientePage;
  let fixture: ComponentFixture<AlterarClientePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlterarClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
