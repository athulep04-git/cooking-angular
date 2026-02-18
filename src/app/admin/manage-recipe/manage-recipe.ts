import { Component, OnInit } from '@angular/core';
import { Sidebar } from "../sidebar/sidebar";
import { Apiservice } from '../../services/apiservice';
import { RecipeModel } from '../models/recipeModel';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-recipe',
  imports: [Sidebar,FormsModule],
  templateUrl: './manage-recipe.html',
  styleUrl: './manage-recipe.css',
})
export class ManageRecipe implements OnInit{

recipeDetails:RecipeModel={}
ingredientsArray:any=[]
cuisineArray:any=[]
mealTypeArray:any=[]
instructionsArray:any=[]
recipeId:string=""
recipes:any=[]
constructor(private api:Apiservice,private ar:ActivatedRoute){}

  ngOnInit(): void {
    this.getAllrecipes()
    this.ar.params.subscribe((res:any)=>{
      console.log(res);
      this.recipeId=res.id
    })
    console.log(this.recipeId);
    
  }


getAllrecipes(){
  this.api.getRecipesAPI().subscribe({
    next:(res:any)=>{
      console.log(res);
      this.recipes=res.response
      console.log(this.recipes);
      console.log(this.recipeId);
      
      
      if(this.recipeId){
        this.recipeDetails=this.recipes.find((item:any)=>item._id==this.recipeId)
        this.ingredientsArray=this.recipeDetails.ingredients
        this.instructionsArray=this.recipeDetails.instructions
        this.mealTypeArray=this.recipeDetails.mealType
      }
      res.response.forEach((item:any)=> {
        !this.cuisineArray.includes(item.cuisine)&&this.cuisineArray.push(item.cuisine)
        
      });
      console.log(this.cuisineArray);
      // const duplicateMealTypeArray=res.response.map((item:any)=>
      //   item.mealType
      // )
      // console.log(duplicateMealTypeArray);
      // const nestedMealTypeArray=duplicateMealTypeArray.flat()
      // console.log(nestedMealTypeArray);
      
      // nestedMealTypeArray.forEach((item:any)=> {
      //   !this.mealTypeArray.includes(item)&&this.mealTypeArray.push(item)
        
      // });
      // console.log(this.mealTypeArray);
      
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
}
addIngredients(ingredients:any){
  console.log(ingredients.value);
  if(ingredients.value){
    this.ingredientsArray.push(ingredients.value)
    ingredients.value=''
  }
  console.log(this.ingredientsArray);

  
}
addInstructions(instructions:any){
  console.log(instructions.value);
  if(instructions.value){
    this.instructionsArray.push(instructions.value)
    instructions.value=''
  }
  console.log(this.instructionsArray);
  
}

deleteIngredients(ingredients:any){
  this.ingredientsArray=this.ingredientsArray.filter((item:any,i:number)=>i!=ingredients)
}
deleteInstructions(instructions:any){
  this.instructionsArray=this.instructionsArray.filter((item:any,i:number)=>i!=instructions)
}
addMeal(meal:any){
  if(meal.value){
    this.mealTypeArray.push(meal.value)
  }
}
removeMeal(meal:any){
  this.mealTypeArray=this.mealTypeArray.filter((item:any)=>item!=meal)
}

addRecipe(){
  this.recipeDetails.ingredients=this.ingredientsArray
  this.recipeDetails.instructions=this.instructionsArray
  this.recipeDetails.mealType=this.mealTypeArray

  const {name,ingredients=[],instructions=[],prepTimeMinutes,cookTimeMinutes,servings,difficulty,cuisine,caloriesPerServing,image,mealType=[]}=this.recipeDetails
  this.api.addRecipeAPI(this.recipeDetails).subscribe({
    next:(res:any)=>{
      console.log(res);

    },
    error:(err)=>{
      console.log(err);
    }
  })
}
editRecipe(){
  this.recipeDetails.ingredients=this.ingredientsArray
  this.recipeDetails.instructions=this.instructionsArray
  this.recipeDetails.mealType=this.mealTypeArray

  const {name,ingredients=[],instructions=[],prepTimeMinutes,cookTimeMinutes,servings,difficulty,cuisine,caloriesPerServing,image,mealType=[]}=this.recipeDetails
  this.api.updateRecipeAPI(this.recipeId,this.recipeDetails).subscribe({
    next:(res:any)=>{
      console.log(res);

    },
    error:(err)=>{
      console.log(err);
    }
  })
}

}
