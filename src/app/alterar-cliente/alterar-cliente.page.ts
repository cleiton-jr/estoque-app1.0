import { Cliente } from './../models/cliente.model';
import { ClientesService } from './../services/clientes.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-alterar-cliente',
  templateUrl: './alterar-cliente.page.html',
  styleUrls: ['./alterar-cliente.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AlterarClientePage implements OnInit{
  id = 0;
  nome = '';
  email = '';
  senha = '';
  confirmarSenha = '';

  constructor(
    private clienteService: ClientesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.clienteService.getOne(this.id).subscribe((dados) => {
      this.nome = dados.nome!;
      this.email = dados.email!;
    })
  }

  salvar() {
    let cliente: Cliente = {
      nome: this.nome,
      email: this.email,
      senha: this.senha
    };

    if (this.senha == this.confirmarSenha && this.senha != '') {
      this.clienteService.update(this.id, cliente).subscribe((dados) => {
        alert(`Cliente ${dados.nome} atualizado!`);
        this.router.navigateByUrl('/home');
      })
    } else {
      alert('As senhas não conferem!');
    }
  }
}
