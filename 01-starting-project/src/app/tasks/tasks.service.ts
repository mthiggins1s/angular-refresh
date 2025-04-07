// a Service is another class; performs operations and/or manages data that might be needed by one or more components. It needs to be private.

import { Injectable } from "@angular/core";
import { type NewTaskData } from "./task.model";

// Angular is now aware of this service and can create an instance when needed.
@Injectable({ providedIn: 'root' })
export class TasksService {
    private tasks = [
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

    // method to get the userId and returns all the tasks that belong to the user with said I.D.
    getUserTasks(userId: string) {
       return this.tasks.filter((task) => task.userId === userId);
    }

    // method to get an ID of the user who wants to add a task.
    addTask(taskData: NewTaskData, userId: string) {
        this.tasks.push({
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date
          })
    }

    // method to get an ID of the user whos task will be removed.
    removeTask(id: string) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
    }
}