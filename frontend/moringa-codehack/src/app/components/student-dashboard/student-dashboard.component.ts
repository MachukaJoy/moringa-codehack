import { Component, OnInit } from '@angular/core';
import { AuthenticatedUserService } from 'src/app/services/authenticated-user/authenticated-user.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {
  user!: any;
  userData!: any;
  constructor(private authentication: AuthenticatedUserService) {}

  ngOnInit(): void {
    this.authentication.getUser().subscribe((response) => {
      if (response.id) {
        this.user = response;
      }
      this.authentication
        .getStudentData(this.user.username)
        .subscribe((response: any) => {
          console.log(response);
          this.userData = response;
        });
    });
  }

  logOut() {
    this.authentication.logOut().subscribe((response) => {
      console.log(response);
      this.user = null;
    });
  }
}

