import { Component } from '@angular/core';
import { TaskListComponent } from "../../components/task-list/task-list.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [TaskListComponent]
})
export class HomeComponent {

  constructor(private route :Router){}

  public redirectToAddTask(): void {
    this.route.navigate(['/add-tasks/'])
  }
  public redirectToTimeList(): void {
    this.route.navigate(['/time-list/'])
  }


}
