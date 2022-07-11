import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  constructor(private http: HttpClient) {}

  get_questions() {
    return this.http.get(
      'https://api-moringa-codehack.herokuapp.com/api/mcquestions/'
    );
  }
  get_subjective() {
    return this.http.get(
      'https://api-moringa-codehack.herokuapp.com/api/squestions/'
    )
    }
}
  

