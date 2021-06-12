import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe('Test Recipe', 'First Recipe', 
    'https://images.immediate.co.uk/production/volatile/sites/2/2018/11/OnePotPasta-47b5b0a.jpg?quality=45&resize=768,574'),
    new Recipe('Test Recipe 2', 'This is a test recipe', 
    'https://www.compassandfork.com/wp-content/uploads/2016/03/Serving-How-to-Cook-Greek-Lamb-to-Enjoy-at-Easter.jpg'),
    
    
  ];

  @Output() selectionChanged = new EventEmitter<Recipe>();

  //currentlySelectedItem : Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  listItemSelected( recipe : Recipe ) : void {

    console.log('Recipe List '); 
    //this.currentlySelectedItem = recipe;
    this.selectionChanged.emit(recipe);
  }

}
