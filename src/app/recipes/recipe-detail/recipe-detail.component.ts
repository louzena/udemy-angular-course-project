import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe : Recipe;

  // @Input() description : string;
  // @Input() ingredients : string;
  // @Input() name : string;

  constructor() { }

  ngOnInit(): void {
  }

}
