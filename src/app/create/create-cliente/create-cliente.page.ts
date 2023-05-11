import { ClientesService } from './../../services/clientes.service';
import { Cliente } from './../../models/cliente.model';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.page.html',
  styleUrls: ['./create-cliente.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class CreateClientePage {
  nome = '';
  email = '';
  senha = '';
  confirmarSenha = '';

  constructor(private clienteService: ClientesService, private router: Router) { }

  salvar() {
    if ((this.nome, this.email, this.senha, this.confirmarSenha) == '') {
      alert('Não foi possível salvar, insira os dados corretamente!');
    } else if (this.senha == this.confirmarSenha) {
      const cliente: Cliente = {
        nome: this.nome,
        email: this.email,
        senha: this.senha
      };

      this.clienteService.create(cliente).subscribe((dados) => {
        alert('Cliente inserido: ' + dados.nome);
        this.router.navigateByUrl('/home');
      });
    } else {
      alert('Senhas não conferem');
    }
  }
}
