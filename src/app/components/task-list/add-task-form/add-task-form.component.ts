// add-task-form.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../../services/task.service';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.scss']
})
export class AddTaskFormComponent implements OnInit {

  addTaskForm: FormGroup | undefined;

  constructor(private route: Router, private fb: FormBuilder, private taskservice: TaskService) {}

  ngOnInit() {
    this.initializeForm();
  }

  private initializeForm() {
    this.addTaskForm = this.fb.group({
      name: ['', [Validators.required]],
      customer: ['', [Validators.required]],
      description: [''],
    });
  }

  public goList(): void {
    this.route.navigate(['/home']);
  }

  submitForm() {
      const formData = this.addTaskForm!.value;
      console.log(formData)
      this.taskservice.setTask(formData).subscribe(
        response => {
          console.log('Task added successfully:', response);
          this.route.navigate(['/home']);
        },
        error => {
          console.error('Error adding task:', error);
        }
      );
    }
}