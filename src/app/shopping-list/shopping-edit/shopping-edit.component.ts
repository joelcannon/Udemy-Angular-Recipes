import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from '../../shared/ingredient.model'; // Add this import statement
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent implements OnInit {
  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {
    let dummy: number = 1; // resolve lint error
  }

  onSubmit(form: NgForm) {
    console.log(form.value); // {name: ..., amount: ...}
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.slService.addIngredient(newIngredient);
  }

  onDelete(event: Event) {
    event.preventDefault();
    // Add code here to delete an ingredient
  }

  onClear(event: Event) {
    event.preventDefault();
    // Add code here to delete an ingredient
  }
}
