import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // creating an object type with '{}'.
 @Input({required: true}) user!: User;
 @Input({required: true}) selected!: boolean;
 // EventEmitter object will allow us to emit custom values through the select property to any parent component thats interested.
 @Output() select = new EventEmitter();

 

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
