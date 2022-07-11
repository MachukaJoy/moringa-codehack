import { Component, OnInit } from '@angular/core';
import { AnyForUntypedForms } from '@angular/forms';
import { KatasService } from 'src/app/katas.service';

@Component({
  selector: 'app-take-test',
  templateUrl: './take-test.component.html',
  styleUrls: ['./take-test.component.css'],
})
export class TakeTestComponent implements OnInit {
  code!: string;
  output!: string;
  simpleKata!: any;
  constructor(private kata: KatasService) {}

  ngOnInit(): void {
    this.kata.get_katas().subscribe((response: any) => {
      console.log(response[0]);
      this.simpleKata = response[0];
    });
  }
}
