import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../../utils/services/http/http.service';
import { LoginResponse } from './interfaces/login-response';
import { StorageService } from '../../../utils/services/storage/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('')
  });

  constructor(private _http: HttpService, private _storage: StorageService, private _router: Router){}

  login(){
    this._http.postRequest<LoginResponse>('SignIn', this.form.value)
      .subscribe(resp => {
        this._storage.gravarItem('usuario', resp.usuario);
        this._storage.gravarItem('token', resp.token);
        this._storage.gravarItem('menu', resp.menu);
        
        this._router.navigate(['/home']);
      });
  }

}
