import { Component } from '@angular/core';
import { Sidebar } from "../sidebar/sidebar";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  imports: [Sidebar,RouterLink],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {

}
