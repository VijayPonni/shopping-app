import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 recipes : Recipe[] = [
    new Recipe('A test recipe','It is my test recipe',''),
    new Recipe('A Second test recipe','It is my test recipe','')

  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipeEl:Recipe){
  this.recipeWasSelected.emit(recipeEl);
  }
}
