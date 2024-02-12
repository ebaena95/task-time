import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { Task } from '../../interfaces/task';
import { take } from 'rxjs';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TimerComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {

  protected tasks:  Task[] = []
  constructor(private taskservice: TaskService){

    this.taskservice.getTasksExtended().pipe(take(1)).subscribe(tasks=> {
      this.tasks = tasks;
    })

  }

  public getTaskTime(task: Task): string {
    let time: number = 0;
    if (task.times) {
      task.times.forEach(times => {
        time += times.spent_time;
      });
    }
    return this.taskservice.convertTaskTimeInHours(time);
  }
  

}
