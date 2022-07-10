import { Component, OnInit  } from '@angular/core';
// import { IDropdownSettings, } from 'ng-multiselect-dropdown';


@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {
  // dropdownList:any = [];
  // dropdownSettings:IDropdownSettings={};

  constructor() { }

  ngOnInit(): void {
    
    let sendInvite = document.querySelector("#sendinvite") as HTMLDivElement;
    let inviteCheckbox = document.querySelector("#sendinvitecheckbox") as HTMLInputElement
    let assesmentCheckbox = document.querySelector("#createassesmentcheckbox") as HTMLInputElement
    let createassesment = document.querySelector("#createownassesment") as HTMLFormElement

    inviteCheckbox.addEventListener('change', function() {
      if (this.checked) {
        sendInvite.style.display='block'
      } else {
        sendInvite.style.display='none'
      }
    });

    assesmentCheckbox.addEventListener('change', function(){
      if (this.checked){
        createassesment.style.display='block'
      } else {
        createassesment.style.display='none'
      }
    });
  }
  

  

}
