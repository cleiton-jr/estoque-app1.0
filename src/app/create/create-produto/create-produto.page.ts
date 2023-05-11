import { Produto } from './../../models/produto.model';
import { Router } from '@angular/router';
import { ProdutosService } from './../../services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-create-produto',
  templateUrl: './create-produto.page.html',
  styleUrls: ['./create-produto.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CreateProdutoPage {

  titulo = '';
  descricao = '';
  preco = 0;
  imagem = '';

  constructor(
    private produtoService: ProdutosService,
    private router: Router
  ) { }

  salvar() {
    if ((this.titulo, this.descricao, String(this.preco), this.imagem) == '') {
      alert('Não foi possível cadastrar. Insira as informações necessárias!');
    } else {
      const produto: Produto = {
        titulo: this.titulo,
        descricao: this.descricao,
        preco: this.preco,
        nome_imagem: this.imagem
      };

      this.produtoService.create(produto).subscribe((dados) => {
        alert(`Produto ${dados.titulo} criado com sucesso!!!`);
        this.router.navigateByUrl('/listar-produtos');
      })
    }
  }

}
