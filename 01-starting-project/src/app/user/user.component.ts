import { Component, computed, signal } from '@angular/core';
// Signals; special values that tell Angular when they CHANGE.
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // signal for this; a contain that contains a value and when you change the value, Angular will be notified and will identify all the places where the value is being used, and will update the value in those places.
  selectedUser = signal(DUMMY_USERS[randomIndex]);
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)
  

  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar
  // }

  onSelectUser() { // draws a new random user everytime the button is clicked. We can also now CALL this function in the html file.
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // updated the signal here:
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
