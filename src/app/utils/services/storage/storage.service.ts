import { Injectable } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';
import { Menu } from '../../../modules/controle-acesso/login/interfaces/login-response';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  obterUsuario(): Usuario | null {
    const usuarioStorage = localStorage.getItem('usuario');
    return (usuarioStorage !== null) ? JSON.parse(usuarioStorage) as Usuario : null;
  }

  obterToken(): string {
    return localStorage.getItem('token') ?? '';
  }

  obterMenu(): Menu[]{
    const menuStorage = localStorage.getItem('menu');
    return JSON.parse(menuStorage ?? '') as Menu[];
  }

  gravarItem(item: string, valor: any): void {
    localStorage.setItem(item, JSON.stringify(valor));
  }
}
