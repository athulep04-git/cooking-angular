import { Component } from '@angular/core';
import { Header } from '../../header/header';
import { Footer } from '../../footer/footer';

@Component({
  selector: 'app-all-recipes',
  imports: [Header,Footer],
  templateUrl: './all-recipes.html',
  styleUrl: './all-recipes.css',
})
export class AllRecipes {

}
