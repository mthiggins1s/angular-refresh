import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string
  // void was added to the EventEmitter because NO data is being emitted to it.
  @Output() close = new EventEmitter<void>()

  // we don't need to add @Output here because it will only be used here and in its template.
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  // adding the Service to add a new task with the inject() function.
  private tasksService = inject(TasksService);


  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
  }, this.userId
);
this.close.emit()
  }
}
