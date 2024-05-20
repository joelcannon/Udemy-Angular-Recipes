import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://photos-cdn.catchmyparty.com/BLC/uploads/2018/02/fried-rice-14.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'https://photos-cdn.catchmyparty.com/BLC/uploads/2018/02/fried-rice-14.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
