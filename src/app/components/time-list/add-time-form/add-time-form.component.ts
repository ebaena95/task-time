import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../../../services/task.service';
import { CommonModule } from '@angular/common';
import { Time } from '../../../interfaces/task';

@Component({
  selector: 'app-add-time-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-time-form.component.html',
  styleUrl: './add-time-form.component.scss'
})
export class AddTimeFormComponent {

  addTimeForm: FormGroup | undefined;

  @Input()
  public taskId: string | undefined = undefined;

  public visibleForm = false;

  constructor(private route: Router, private fb: FormBuilder, private taskservice: TaskService) {}
  ngOnInit() {
    this.initializeForm();
  }

  private initializeForm() {
    this.addTimeForm = this.fb.group({
      description: ['', [Validators.required]],
      begin_date: ['', [Validators.required]],
      end_date: ['', [Validators.required]],
    });
  }

  submitForm() {
    const formData : Time = this.addTimeForm!.value;
    formData.begin_date = this.parseDateTime(formData.begin_date);
    formData.end_date = this.parseDateTime(formData.end_date)
    this.taskservice.addTime(formData, this.taskId!).subscribe(
      response => {
        console.log('Task added successfully:', response);
      },
      error => {
        console.error('Error adding task:', error);
      }
    );
  }

  parseDateTime(date: string) {
    var parsedDate = new Date(date);
    return  parsedDate.toISOString().slice(0, 19);
  }

  toggleFormVisibility(){
    this.visibleForm = !this.visibleForm;
  }


}
