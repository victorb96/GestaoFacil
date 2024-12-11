import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { StorageService } from './utils/services/storage/storage.service';
import { Menu } from './modules/controle-acesso/login/interfaces/login-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'GestaoFacil';

  logado: boolean = false

  menu: Menu[] = [];

  constructor(private _storageServ: StorageService, private _router: Router) { }
  ngOnInit(): void {
    this.logado = this._storageServ.obterUsuario() !== null
    if (!this.logado)
      this._router.navigate(['/login']);

    this._router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        this.logado = this._storageServ.obterUsuario() !== null;
        
        if(this.logado){
          this.menu = this._storageServ.obterMenu();
          this.menu.map(m => m.expanded = false)
        }
      }
    })
  }
}
