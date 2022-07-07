import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticatedUserService } from '../../services/authenticated user/authenticated-user.service';
import { User } from '../../classes/user/user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  message = 'Please login or signup';
  pattern!: RegExp
  constructor(
    private service: AuthenticatedUserService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.http
      .get<User>(
        'http://localhost:8000/api/authenticated_user/',

        { withCredentials: true }
      )
      .subscribe((res) => {
        if(/@([a-z\S]+)/.exec(res.email)){
          if(/@([a-z\S]+)/.exec(res.email)![1] == 'student.moringaschool.com'){
            this.router.navigate(['/student-dashboard']);
          }else{
            this.router.navigate(['/tmlanding']);
          }
        }
      });
  }
}
