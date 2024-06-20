import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { Observable, map } from 'rxjs';
import { tap } from 'rxjs/operators';

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

  fetchRecipes(): Observable<Recipe[]> {
    return this.http
      .get<
        Recipe[]
      >('https://ng-course-recipe-book-d831a-default-rtdb.firebaseio.com/recipes.json')
      .pipe(
        map((recipes) => {
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap((fetchedRecipes) => {
          this.recipeService.setRecipes(fetchedRecipes);
        })
      );
  }
}

// https://ng-course-recipe-book-d831a-default-rtdb.firebaseio.com/
