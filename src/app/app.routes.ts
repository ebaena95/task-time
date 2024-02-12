import { Routes } from '@angular/router';
import { HomeComponent } from './controllers/home/home.component';
import { AddTaskFormComponent } from './components/task-list/add-task-form/add-task-form.component';
import { TimeListComponent } from './components/time-list/time-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'add-tasks', component: AddTaskFormComponent },
  { path: 'time-list', component: TimeListComponent },
];
