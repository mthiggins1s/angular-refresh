// Wants an Angular Component; will look for the component in the HTML file, and replaces the tag of the custom component with its custom markup.
import { bootstrapApplication } from '@angular/platform-browser';

// Being passed to bootstrapApplication.
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err));
