import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Apiservice {

    baseURL:string='http://localhost:3000'
    constructor(private http:HttpClient){

    }
    getRecipesAPI(){
      return this.http.get(`${this.baseURL}/api/allRecipes`)
    }

    registerUser(reqbody:any){
      return this.http.post(`${this.baseURL}/api/register`,reqbody)
    }

    loginUser(reqbody:any){
      return this.http.post(`${this.baseURL}/api/login`,reqbody)
    }
}
