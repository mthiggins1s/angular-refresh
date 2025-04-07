import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  // void was added to the EventEmitter because NO data is being emitted to it.
  @Output() cancel = new EventEmitter<void>()
  // we are creating an EventEmitter that will submit an object, that will submit the title, summary, and date.
  @Output() add = new EventEmitter<NewTaskData>()
  // we don't need to add @Output here because it will only be used here and in its template.
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    });
  }
}
