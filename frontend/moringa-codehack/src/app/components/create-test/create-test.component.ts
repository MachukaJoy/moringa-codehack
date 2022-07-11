import { Component, OnInit  } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions/questions.service';
// import { IDropdownSettings, } from 'ng-multiselect-dropdown';


@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {
  dropdownList:any = [];
  // dropdownSettings:IDropdownSettings={};

  constructor(private subjective:QuestionsService) { }

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
    this.getSubjective()
  }
  getSubjective(){
    this.subjective.get_subjective().subscribe(response =>{
      console.log(response)
      this.dropdownList=response
    })
  }

  

}
