import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'https://oficines.glamsw.com/chrono-test';
  private token = '3GBWKoIHxXrI43r3hF0aVRC80IP1Q44rVr0w0O5Ikm0wUQdJcTbX60X1QBXorIjs';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token,
    });
  }

  getTasksExtended(): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get(`${this.apiUrl}/tasks?expanded=times`, { headers });
  }
  setTask(formData: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post(`${this.apiUrl}/tasks`, formData, { headers });
  }

  convertTaskTimeInHours(time: number): string{
    const hours = Math.floor(time);
    const remainingMinutes = (time - hours) * 60;
    const minutes = Math.floor(remainingMinutes);

    return `${hours} h, ${minutes} m`
  }

}
