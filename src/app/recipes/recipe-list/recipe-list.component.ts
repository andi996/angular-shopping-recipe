import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      '1 a test recipe',
      '1 this is a test recipe',
      'https://i.dummyjson.com/data/products/1/thumbnail.jpg'
    ),
    new Recipe(
      '2 a test recipe',
      '2 this is a test recipe',
      'https://i.dummyjson.com/data/products/2/thumbnail.jpg'
    ),
    new Recipe(
      '3 a test recipe',
      '3 this is a test recipe',
      'https://i.dummyjson.com/data/products/4/thumbnail.jpg'
    ),
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
