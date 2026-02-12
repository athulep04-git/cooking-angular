import { HttpClient, HttpHeaders } from '@angular/common/http';
import id from '@angular/common/locales/id';
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
    appendToken(){
      let headers=new HttpHeaders()
      let token=sessionStorage.getItem('token')
      if (token){
        headers=headers.append('Authorization',`Bearer ${token}`)
      }
      return {headers}
    }
    viewRecipeAPI(id:any){
      return this.http.get(`${this.baseURL}/api/view-recipe/${id}`,this.appendToken())
    }
    relatedRecipeAPI(cuisine:any){
    return this.http.get(`${this.baseURL}/api/related-recipe?cuisine=${cuisine}`,this.appendToken())
  }
  addSavedRecipe(id:any,reqBody:any){
    return this.http.post(`${this.baseURL}/api/addsaved-recipe/${id}`,reqBody,this.appendToken())
  }
}
