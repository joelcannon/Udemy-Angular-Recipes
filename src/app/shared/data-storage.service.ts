import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService
  ) {}

  storeRecipes() {
    this.http
      .put(
        'https://ng-course-recipe-book-d831a-default-rtdb.firebaseio.com/recipes.json',
        this.recipeService.getRecipes()
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchRecipes() {
    this.http
      .get<
        Recipe[]
      >('https://ng-course-recipe-book-d831a-default-rtdb.firebaseio.com/recipes.json')
      .subscribe((recipes) => {
        this.recipeService.setRecipes(recipes);
        console.log(recipes);
      });
  }
}

// https://ng-course-recipe-book-d831a-default-rtdb.firebaseio.com/
