import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeEmit = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a test',
    // tslint:disable-next-line:max-line-length
    'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg'),
    new Recipe('Another test recipe', 'This is a test',
    // tslint:disable-next-line:max-line-length
    'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipeSelected: Recipe) {
    this.recipeEmit.emit(recipeSelected);
  }

}
