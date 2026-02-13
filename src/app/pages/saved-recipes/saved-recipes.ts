import { Component, OnInit } from '@angular/core';
import { Apiservice } from '../../services/apiservice';

@Component({
  selector: 'app-saved-recipes',
  imports: [],
  templateUrl: './saved-recipes.html',
  styleUrl: './saved-recipes.css',
})
export class SavedRecipes implements OnInit{
  savedRecipe:any=[]
  constructor(private api:Apiservice){}
  ngOnInit(): void {
    this.getSavedRecipe()
  }

  getSavedRecipe(){
    this.api.getSavedRecipeAPI().subscribe({
     next:(res:any)=>{
      console.log(res);
      this.savedRecipe=res
      console.log(this.savedRecipe);
     },
     error:(err)=>{
      console.log(err);
     } 
    })
  }

  deleteSavedRecipe(id:any){
    this.api.deleteSavedRecipeAPI(id).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.getSavedRecipe()
      },
       error:(err)=>{
      console.log(err);
     } 
    })
  }
}
