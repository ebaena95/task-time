
// add-task-form.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { Task } from '../../interfaces/task';
import { take } from 'rxjs';

@Component({
  selector: 'app-time-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './time-list.component.html',
  styleUrl: './time-list.component.scss'
})
export class TimeListComponent {

  protected tasks:  Task[] = []

  constructor(private route: Router, private taskservice: TaskService) {
    this.taskservice.getTasksExtended().pipe(take(1)).subscribe(tasks=> {
      this.tasks = tasks;
    })
  }

  public goTaskList(): void {
    this.route.navigate(['/home']);
  }

  public timeFormatted(time: number):string {
    return this.taskservice.convertTaskTimeInHours(time);
  }

  public formatDate(date: string): string{
    const dateObject = new Date(date);
    return dateObject.toLocaleString();
  }
}

