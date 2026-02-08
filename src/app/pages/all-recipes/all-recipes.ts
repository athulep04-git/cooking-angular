import { Component, OnInit } from '@angular/core';
import { Header } from '../../header/header';
import { Footer } from '../../footer/footer';
import { Apiservice } from '../../services/apiservice';

@Component({
  selector: 'app-all-recipes',
  imports: [Header,Footer],
  templateUrl: './all-recipes.html',
  styleUrl: './all-recipes.css',
})
export class AllRecipes  implements OnInit{
  recipes:any=[]

  constructor(private api:Apiservice){}
  ngOnInit(): void {
    this.getRecipe()
  }
getRecipe(){
  this.api.getRecipesAPI().subscribe({
    next:(res:any)=>{
      console.log(res);
      this.recipes=res.response
    },
    error:(err)=>{
      console.log("Api error "+err);
      
    }
  })
}
}
