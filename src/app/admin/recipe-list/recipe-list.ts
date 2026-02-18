import { Component, OnInit } from '@angular/core';
import { Sidebar } from "../sidebar/sidebar";
import { RouterLink } from '@angular/router';
import { Apiservice } from '../../services/apiservice';

@Component({
  selector: 'app-recipe-list',
  imports: [Sidebar,RouterLink],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList implements OnInit{
  recipes:any=[]
constructor(private api:Apiservice){}
  ngOnInit(): void {
    this.getAllRecipes()
  }
  getAllRecipes(){
    this.api.getRecipesAPI().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.recipes=res.response
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
  deleteRecipe(id:any){
    this.api.deleteRecipeAPI(id).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.getAllRecipes()
      }
    })
  }
}
