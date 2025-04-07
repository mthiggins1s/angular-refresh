import { Component, Input } from '@angular/core';

import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { type NewTaskData } from './task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  // this ? tells TS that we know that this might NOT be SET. TS doesnt know if this value is initialized or not.
    // adding the | symbol creates a UNION type; tells TS that the type of value that can be store will be either type string OR type undefined.
  @Input({required: true}) userId!: string
  @Input({required: true}) name!: string;
  isAddingTask = false;


  // Instantiate this TasksService via Injection (a constructor can be added to any class and will be executed when the TasksComponent class is executed).
  // With Dependency Injection, you TELL angular which type of value you need and Angular creates it and provides it as an argument.
  constructor(private tasksService: TasksService) {
}

  // .filter takes an arrow function. This condition will check if the userId is equal to this.id.
  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
