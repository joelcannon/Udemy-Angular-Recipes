import { Component } from '@angular/core';
import { Recipe } from './recipe.model'; // import your Recipe model

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent {
  selectedRecipe: Recipe;

  onRecipeSelected(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }
}
