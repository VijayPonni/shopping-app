import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

ingredients : Ingredient[] = [
  new Ingredient('apple',45),
  new Ingredient('orange',67),

];

  constructor() { }

  ngOnInit(): void {
  }

}
