import { Component, Input } from '@angular/core';

import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { type NewTaskData } from './task.model';

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

  // all tasks must be assigned to a user, so you must add a userId property to the object.
  tasks = [
    {
      id: 't1',
      userId: 'ul',
      title: 'Master Angular',
      summary: 'Learn all the basics of Angular',
      dueDate: '2025-12-31'
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  // .filter takes an arrow function. This condition will check if the userId is equal to this.id.
  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  // this will check if the complete box was selected.
  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    })

    this.isAddingTask = false;
  }
}
