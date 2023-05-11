import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule, ViewWillEnter } from '@ionic/angular';
import { Cliente } from '../models/cliente.model';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink],
})
export class HomePage implements ViewWillEnter{

  listaClientes: Cliente[] = [];

  constructor(private clientesService: ClientesService, private route: Router) {}

  ionViewWillEnter(): void {
    this.buscarClientes();
  }

  buscarClientes() {
    this.clientesService.getAll().subscribe((dados) => {
      this.listaClientes = dados;
    })
  }

  editarCliente(id: number) {
    this.route.navigateByUrl(`/alterar-cliente/${id}`);
  }

  excluirCliente(id: number) {
    if (confirm("Deseja excluir?")) {
      this.clientesService.delete(id).subscribe(() => this.buscarClientes());
    }
  }
}
