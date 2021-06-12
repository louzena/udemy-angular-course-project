import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {


  @ViewChild('nameInput',  {static: true}) nameInputEl : ElementRef;
  @ViewChild('amountInput',  {static: true}) amountInputEl : ElementRef;

  @Output() onIngredientsAdded = new EventEmitter<Ingredient>();

  @Input() ingredientName : string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddButtonClicked() : void { 

    let nameInputValue : string = this.nameInputEl.nativeElement.value;
    let amountInputValue : number = this.amountInputEl.nativeElement.value;

    let ingredient : Ingredient = new Ingredient(nameInputValue, amountInputValue);

    this.onIngredientsAdded.emit(ingredient);

  }

  isNameInputEmpty() : boolean { 
    
    return this.ingredientName ? false : true;   
   
  }

 
}
