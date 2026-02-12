import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Apiservice } from '../../services/apiservice';

@Component({
  selector: 'app-view-recipe',
  imports: [RouterLink],
  templateUrl: './view-recipe.html',
  styleUrl: './view-recipe.css',
})
export class ViewRecipe implements OnInit {
  recipeId: any=""
  recipe:any={};
  cuisine:string="";
  relatedRecipe:any=[];
  constructor(private ar:ActivatedRoute,private api:Apiservice){}
  ngOnInit(): void {
    this.ar.params.subscribe((res:any)=>{
      console.log(res);
      this.recipeId=res.id
      console.log(this.recipeId);
      this.viewARecipe()
    })

  }
  viewARecipe(){
    this.api.viewRecipeAPI(this.recipeId).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.recipe=res
        this.cuisine=res.cuisine
        this.getRelatedRecipe()
      },
      error(err:any){
        console.log("API error",err);
        
      }
    })
  }
  getRelatedRecipe(){
    this.api.relatedRecipeAPI(this.cuisine).subscribe({
    next:(res:any)=>{
      console.log(res);
      this.relatedRecipe=res
      
    },
     error(err:any){
        console.log("API error",err);
      }
    })
    
  }
  addSavedRecipe(){
    this.api.addSavedRecipe(this.recipeId,this.recipe).subscribe({
      next:(res:any)=>{
        console.log(res);
        alert(res.message)
        
      },
      error(err:any){
        console.log("API error",err);
        alert(err.error.message)
      }
    })
  }
}
