import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
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

  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
