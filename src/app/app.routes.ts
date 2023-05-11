import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'listar-produtos',
    pathMatch: 'full',
  },
  {
    path: 'listar-produtos',
    loadComponent: () => import('./listar-produtos/listar-produtos.page').then( m => m.ListarProdutosPage)
  },
  {
    path: 'create-cliente',
    loadComponent: () => import('./create/create-cliente/create-cliente.page').then( m => m.CreateClientePage)
  },
  {
    path: 'alterar-cliente/:id',
    loadComponent: () => import('./alterar-cliente/alterar-cliente.page').then( m => m.AlterarClientePage)
  },
  {
    path: 'create-produto',
    loadComponent: () => import('./create/create-produto/create-produto.page').then( m => m.CreateProdutoPage)
  },
  {
    path: 'alterar-produto/:id',
    loadComponent: () => import('./alterar-produto/alterar-produto.page').then( m => m.AlterarProdutoPage)
  },




];
