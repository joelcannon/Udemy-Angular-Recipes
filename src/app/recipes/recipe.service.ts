import { Subject } from 'rxjs';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
export class RecipeService {
  recipeSelected = new Subject<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Cheeseburger',
      'A cheeseburger is a hamburger topped with cheese. Traditionally, the slice of cheese is placed on top of the meat patty, but the burger can include many variations in structure, ingredients, and composition. The cheese is normally added to the cooking hamburger patty shortly before serving, which allows the cheese to melt.',
      'https://upload.wikimedia.org/wikipedia/commons/4/4d/Cheeseburger.jpg',
      [
        new Ingredient('ground beef', 1),
        new Ingredient('cheese', 1),
        new Ingredient('hamburger bun', 1),
      ]
    ),
    new Recipe(
      'Hotdog',
      'A hot dog is a food consisting of a grilled or steamed sausage served in the slit of a partially sliced bun. It can also refer to the sausage itself. The sausage used is a wiener (Vienna sausage) or a frankfurter (Frankfurter Würstchen, also just called frank). The names of these sausages also commonly refer to their assembled dish.',
      'https://upload.wikimedia.org/wikipedia/commons/f/fb/Hotdog_-_Evan_Swigart.jpg',
      [
        new Ingredient('weiner', 1),
        new Ingredient('mustard', 1),
        new Ingredient('relish', 1),
        new Ingredient('hotdog bun', 1),
      ]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.next(recipe);
  }
}
