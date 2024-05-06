import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  collapsed = true;
  @Output() displayRecipesEvent = new EventEmitter<void>();
  @Output() displayShoppingListEvent = new EventEmitter<void>();

  onRecipesButtonClicked() {
    this.displayRecipesEvent.emit();
  }

  onShoppingListButtonClicked() {
    this.displayShoppingListEvent.emit();
  }
}
