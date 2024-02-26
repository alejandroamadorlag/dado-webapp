import { Injectable } from '@angular/core';
import { ValidatorService } from './tools/validator.service';
import { ErrorsService } from './tools/errors.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const session_cookie_name = 'systemp-web-token';
const user_email_cookie_name = 'systemp-web-email';
const user_id_cookie_name = 'systemp-web-user_id';
const user_complete_name_cookie_name = 'systemp-web-user_complete_name';
const group_name_cookie_name = 'systemp-group_name';
const codigo_cookie_name = 'systemp-web-codigo';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {

  constructor(
    private http: HttpClient,
    public router: Router,
    private cookieService: CookieService,
    private validatorService: ValidatorService,
    private errorService: ErrorsService,
  ) { }

  //Funcion para validar login
  public validarLogin(username: String, password: String){
    var data = {
      "username": username,
      "password": password
    }
    console.log("Validando login... ", data);
    let error: any = [];

    if(!this.validatorService.required(data["username"])){
      error["username"] = this.errorService.required;
    }else if(!this.validatorService.max(data["username"], 40)){
      error["username"] = this.errorService.max(40);
    }else if (!this.validatorService.email(data['username'])) {
      error['username'] = this.errorService.email;
    }

    if(!this.validatorService.required(data["password"])){
      error["password"] = this.errorService.required;
    }

    return error;
  }



  destroyUser(){
    this.cookieService.deleteAll();
  }

  getUserEmail(){
    return this.cookieService.get(user_email_cookie_name);
  }

  getUserCompleteName(){
    return this.cookieService.get(user_complete_name_cookie_name);
  }

  getUserId(){
    return this.cookieService.get(user_id_cookie_name);
  }

  getUserGroup(){
    return this.cookieService.get(group_name_cookie_name);
  }


}