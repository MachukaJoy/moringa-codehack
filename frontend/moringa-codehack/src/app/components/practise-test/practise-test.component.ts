import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practise-test',
  templateUrl: './practise-test.component.html',
  styleUrls: ['./practise-test.component.css']
})
export class PractiseTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let katadiv = document.querySelector('.code-editor') as HTMLDivElement;
    let katabtn = document.querySelector('#kataque') as HTMLButtonElement;
    let mcdiv = document.querySelector('.container1') as HTMLDivElement;
    let mcbtn = document.querySelector('#mcque') as HTMLButtonElement;

    katabtn.addEventListener('click', () => {
      mcdiv.style.display = 'none';
      katadiv.style.display='block';
    })
    mcbtn.addEventListener('click', ()=>{
      katadiv.style.display='none';
      mcdiv.style.display='block';
    })

  }
}
