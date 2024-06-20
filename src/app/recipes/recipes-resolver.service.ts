import { Observable, of } from 'rxjs';

import { Recipe } from './recipe.model'; // replace './recipe.model' with the actual path to the Recipe model
import { RecipeService } from './recipe.service';
import { DataStorageService } from '../shared/data-storage.service';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor(
    private recipeService: RecipeService,
    private dataStorageService: DataStorageService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Recipe[]> {
    const recipes = this.recipeService.getRecipes();

    if (recipes.length === 0) {
      return this.dataStorageService.fetchRecipes().pipe();
    } else {
      return of(recipes);
    }
  }
}
