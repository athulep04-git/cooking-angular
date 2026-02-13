import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Apiservice } from '../../services/apiservice';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

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
        console.log("error",err);
        alert(err.error.message)
      }
    })
  }
  addDownloadRecipe(){
    this.api.addDownloadRecipeAPI(this.recipeId,this.recipe).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.generatePDF()
        alert(res.message)
        
      },
      error(err:any){
        console.log("error",err);
      }
    })
  }
  generatePDF(){
    //create pdf object
    const pdf = new jsPDF()
    //For styling
    pdf.setFontSize(16)
    pdf.setTextColor("red")
    pdf.text(this.recipe.name,10,10)
    pdf.setFontSize(12)
    pdf.setTextColor("black")
    //pdf contents
    pdf.text(`Cuisine : ${this.recipe.cuisine}`,10,20)
    pdf.text(`Servings : ${this.recipe.servings}`,10,25)
    pdf.text(`Mode of Cooking : ${this.recipe.difficulty}`,10,30)
    pdf.text(`Total Preparation Time : ${this.recipe.prepTimeMinutes} Minutes`,10,35)
    pdf.text(`Total Cooking Time : ${this.recipe.cookTimeMinutes} Minutes`,10,40)
    pdf.text(`Total Calorie Per Servings : ${this.recipe.caloriesPerServing}`,10,45)
    //Table creation
    let head = [['Ingredients Needed','Cooking Instructions']]
    let body = []

    body.push([this.recipe.ingredients,this.recipe.instructions])
    //table generation
    autoTable(pdf,{head,body,startY:50})

    pdf.output('dataurlnewwindow')
    pdf.save('download-recipe.pdf')
  }
}
