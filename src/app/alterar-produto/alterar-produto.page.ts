import { Produto } from './../models/produto.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from './../services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-alterar-produto',
  templateUrl: './alterar-produto.page.html',
  styleUrls: ['./alterar-produto.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AlterarProdutoPage implements OnInit {
  id = 0
  titulo = '';
  descricao = '';
  preco = 0;
  imagem = ''

  constructor(
    private produtoService: ProdutosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.produtoService.getOne(this.id).subscribe((dados) => {
      this.titulo = dados.titulo!;
      this.descricao = dados.descricao!;
      this.preco = dados.preco!;
      this.imagem = dados.nome_imagem!;
    })
  }

  salvar() {
    if ((this.titulo, this.descricao, this.preco, this.imagem) !== '') {
      const produto: Produto = {
        titulo: this.titulo,
        descricao: this.descricao,
        preco: this.preco,
        nome_imagem: this.imagem
      };

      this.produtoService.update(this.id, produto).subscribe((dados) => {
        alert(`Produto ${dados.titulo} atualizado com sucesso!!!`);
        this.router.navigateByUrl('/listar-produtos');
      })
    } else {
      alert('Insira as informações corretamente!')
    }
  }

}
