import { Component, OnInit } from '@angular/core';
import { Apiservice } from '../../services/apiservice';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from "../../pipes/search-pipe";

@Component({
  selector: 'app-all-recipes',
  imports: [FormsModule, SearchPipe],
  templateUrl: './all-recipes.html',
  styleUrl: './all-recipes.css',
})
export class AllRecipes implements OnInit {

  token: any=""
  recipes:any=[]
  cuisineType:any=[]//to hold all the cuisine
  dummyRecipe:any=[]
  nestedMealArray:any=[]
  singleMealArray:any=[]
  updatedMealArray:any=[]
  searchKey:string=''
  constructor(
    private api: Apiservice,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.token = sessionStorage.getItem('token');
    this.getRecipe();
  }

  getRecipe() {
    this.api.getRecipesAPI().subscribe({
      next: (res: any) => {
        console.log(res);
        this.recipes = res.response;
        //cuisine type filter
        this.dummyRecipe=res.response
        this.recipes.forEach((item:any)=>{
          !this.cuisineType.includes(item.cuisine)&&this.cuisineType.push(item.cuisine)
        })
        console.log(this.cuisineType);
        //meal type filter
        this.nestedMealArray=this.recipes.map((item:any)=>item.mealType)
        console.log(this.nestedMealArray);
        this.singleMealArray=this.nestedMealArray.flat()
        console.log(this.singleMealArray);
        this.singleMealArray.map((item:any)=>{
          !this.updatedMealArray.includes(item)&&this.updatedMealArray.push(item)
        })
        console.log(this.updatedMealArray);
        
      },
      error: (err) => {
        console.log('API error', err);
      }
    });
  }

  viewRecipe(id: any) {
    if (this.token !== null) {
      this.router.navigateByUrl(`/view-recipe/${id}`);
    } else {
      alert('Please login...');
    }
  }
  filterRecipe(key:any,value:any){
    this.recipes=this.dummyRecipe.filter((item:any)=>item[key].includes(value))
  }
 
}
