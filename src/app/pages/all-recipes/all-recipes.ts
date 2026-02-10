import { Component, OnInit } from '@angular/core';
import { Header } from '../../header/header';
import { Footer } from '../../footer/footer';
import { Apiservice } from '../../services/apiservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-recipes',
  imports: [],
  templateUrl: './all-recipes.html',
  styleUrl: './all-recipes.css',
})
export class AllRecipes implements OnInit {

  token: string | null = null;
  recipes: any[] = [];

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
 
}
