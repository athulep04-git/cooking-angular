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
   getSavedRecipeAPI() {
    return this.http.get(`${this.baseURL}/api/viewsaved-recipe`,this.appendToken()
    );
    }
    deleteSavedRecipeAPI(id:any) {
    return this.http.delete(`${this.baseURL}/api/deletesaved-recipe/${id}`,this.appendToken()
    );
    }
     addDownloadRecipeAPI(id:any,reqBody:any){
    return this.http.post(`${this.baseURL}/api/addDownload/${id}`,reqBody,this.appendToken())
   }
   getdownloadRecipeAPI() {
    return this.http.get(`${this.baseURL}/api/getDownload`,this.appendToken()
    );
    }
    deleteDownloadRecipeAPI(id:any) {
    return this.http.delete(`${this.baseURL}/api/deleteDownload/${id}`,this.appendToken()
    );
    }
    getUserDetailsAPI() {
    return this.http.get(`${this.baseURL}/api/getUser`,this.appendToken()
    );
    }
    updateUserDetailsAPI(reqBody:any){
    return this.http.put(`${this.baseURL}/api/updateUser`,reqBody,this.appendToken()
    );
    }
    getAllUsersAPI() {
    return this.http.get(`${this.baseURL}/api/getAllUsers`,this.appendToken()
    );
    }
    getDownloadListAPI() {
    return this.http.get(`${this.baseURL}/api/getDownloadList`,this.appendToken()
    );
    }
    addTestimonyAPI(reqBody:any){
    return this.http.post(`${this.baseURL}/api/addTestimony`,reqBody,this.appendToken())
   }
   getAllTestimonyAPI() {
    return this.http.get(`${this.baseURL}/api/getAllTestimony`,this.appendToken()
    );
    }
    updateTestimonyAPI(id:any,status:any){
    return this.http.put(`${this.baseURL}/api/UpdateTestimony/${id}?status=${status}`,{}
    );
    }
    getApprovedTestimonyAPI() {
    return this.http.get(`${this.baseURL}/api/getApprovedTestimony`,this.appendToken()
    );
    }

    addRecipeAPI(reqBody:any){
      return this.http.post(`${this.baseURL}/api/addRecipe`,reqBody)
    }

    updateRecipeAPI(id:any,reqBody:any){
      return this.http.put(`${this.baseURL}/api/updateRecipe/${id}`,reqBody)
    }

    deleteRecipeAPI(id:any){
      return this.http.delete(`${this.baseURL}/api/deleteRecipe/${id}`)
    }
}
