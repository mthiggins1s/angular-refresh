import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';

@Component({ // comes from the Angular framework (being imported).
  selector: 'app-root', // tells Angular what elements it should replace with this components markup.
  standalone: true,
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.component.html', // current component markup.
  styleUrl: './app.component.css', // current component styles.
})
export class AppComponent { // creates a custom HTML element; not just a class, contains a decorator of information that adds metadata to this class.

  // how to expose the data of DUMMY_USERS to this component so we can use it in the users template.
  users = DUMMY_USERS;


  // We expect to return the id when we click on a user button. This is being passed through the select property in the template. We use the $event variable will hold the value that was emitted by the event we are listening to.
  onSelectUser(id: string) {
    console.log('Selected user with id ' + id)
  }
}
