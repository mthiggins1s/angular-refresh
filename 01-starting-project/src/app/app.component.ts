import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

@Component({ // comes from the Angular framework (being imported).
  selector: 'app-root', // tells Angular what elements it should replace with this components markup.
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html', // current component markup.
  styleUrl: './app.component.css', // current component styles.
})
export class AppComponent { // creates a custom HTML element; not just a class, contains a decorator of information that adds metadata to this class.

  // how to expose the data to this component so we can use it in the users template.
  users = DUMMY_USERS;
  selectedUserId = 'u1';

  // this finds the user from the users array above.

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  // We expect to return the id when we click on a user button. This is being passed through the select property in the template. We use the $event variable will hold the value that was emitted by the event we are listening to.
  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
