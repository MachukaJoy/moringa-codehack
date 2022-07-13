import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  constructor(private http: HttpClient) {}

  get_mcquestions() {
    return this.http.get(
      'https://api-moringa-codehack.herokuapp.com/api/mcquestions/'
    );
  }
  get_subjective() {
    return this.http.get(
      'https://api-moringa-codehack.herokuapp.com/api/squestions/'
    );
  }
  get_katas() {
    return this.http.get(
      'https://api-moringa-codehack.herokuapp.com/api/kata/'
    );
  }
  get_assesments() {
    return this.http.get('http://localhost:8000/api/assessments/');
  }

  add_intive(data: any) {
    return this.http.post('http://localhost:8000/api/add_invite/', {
      assessment: data.assessment,
      users: data.emails,
      message: data.message,
    });
  }

  add_assessment(data: any) {
    return this.http.post<object>('http://localhost:8000/api/add_assessment/', {
      name: data.name,
      topic: data.topic,
      difficulty: data.difficulty,
      pass_mark: data.pass_mark,
      time_limit: data.time_limit,
      category: data.category,
      s_questions: data.s_questions,
      kata_questions: data.kata_questions,
      multiple_choice: data.multiple_choice,
    });
  }
}
