import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions/questions.service';

@Component({
  selector: 'app-tm-landing',
  templateUrl: './tm-landing.component.html',
  styleUrls: ['./tm-landing.component.css'],
})
export class TmLandingComponent implements OnInit {
  constructor(private questions: QuestionsService) {}

  ngOnInit(): void {
    let titleWrapper = document.querySelector(
      '#sidebar-nav'
    ) as HTMLUListElement;
    let iconWrapper = document.querySelector(
      '#sidebar-nav-icons'
    ) as HTMLUListElement;
    let titleMenu = document.querySelector('#menu-toggle') as HTMLAnchorElement;
    let iconMenu = document.querySelector(
      '#menu-toggle-icons'
    ) as HTMLAnchorElement;
    let navWrapper = document.querySelector(
      '#sidebar-wrapper'
    ) as HTMLDivElement;
    let pageWrapper = document.querySelector(
      '#page-content-wrapper'
    ) as HTMLDivElement;

    titleMenu.addEventListener('click', () => {
      iconWrapper.style.display = 'block';
      titleWrapper.style.display = 'none';
      navWrapper.style.width = '3.5%';
      pageWrapper.style.paddingLeft = '3%';
    });
    iconMenu.addEventListener('click', () => {
      titleWrapper.style.display = 'block';
      iconWrapper.style.display = 'none';
      navWrapper.style.width = '13%';
      pageWrapper.style.paddingLeft = '13%';
    });

    // - - - - - - questions service pulling - - - - - - - //
    this.questions.get_questions().subscribe((response: any) => {
      console.log(response);
    });
  }
}
