import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  // this ? tells TS that we know that this might NOT be SET. TS doesnt know if this value is initialized or not.
    // adding the | symbol creates a UNION type; tells TS that the type of value that can be store will be either type string OR type undefined.
  @Input() name: string | undefined;
}
