import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
 @Input({required: true}) avatar!: string;
 @Input({required: true}) name!: string;
 @Input({required: true}) id!: string;
 // EventEmitter object will allow us to emit custom values through the select property to any parent component thats interested.
 @Output() select = new EventEmitter();

 

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {
    this.select.emit(this.id);
  }
}
