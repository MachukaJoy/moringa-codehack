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
  katasList:any =[];
  multipleChoiceList:any = [];
  // dropdownSettings:IDropdownSettings={};

  constructor(private subjective:QuestionsService, private katas:QuestionsService, private multiple:QuestionsService) { }

  ngOnInit(): void {
    
    let sendInvite = document.querySelector("#sendinvite") as HTMLDivElement;
    let inviteCheckbox = document.querySelector("#sendinvitecheckbox") as HTMLInputElement
    let assesmentCheckbox = document.querySelector("#createassesmentcheckbox") as HTMLInputElement
    let createassesment = document.querySelector("#createownassesment") as HTMLFormElement
    let katascheck = document.querySelector("#katascheckbox") as  HTMLInputElement
    let subjectivecheck = document.querySelector("#subjectivecheckbox") as HTMLInputElement
    let multiplecheck = document.querySelector("#multiplechoicecheckbox") as HTMLInputElement
    let katasselect = document.querySelector("#katasquestions") as HTMLSelectElement
    let multipleselect = document.querySelector("#multiplechoicequestions") as HTMLSelectElement
    let subjectiveselect = document.querySelector("#subjectivequestions") as HTMLSelectElement

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

    katascheck.addEventListener('change', function(){
      if (this.checked){
        katasselect.style.display='block'
      } else{
        katasselect.style.display='none'
      }
    });

    multiplecheck.addEventListener('change', function(){
      if (this.checked){
        multipleselect.style.display='block'
      } else{
        multipleselect.style.display='none'
      }
    });

    subjectivecheck.addEventListener('change', function(){
      if (this.checked){
        subjectiveselect.style.display='block'
      } else{
        subjectiveselect.style.display='none'
      }
    });


    this.getSubjective()
    this.getkatas()
    this.getMultipleChoice()
  }
  getSubjective(){
    this.subjective.get_subjective().subscribe(response =>{
      console.log(response)
      this.dropdownList=response
    })
  }

  getkatas(){
    this.katas.get_katas().subscribe(response =>{
      console.log(response)
      this.katasList=response
    })
  }

  getMultipleChoice(){
    this.multiple.get_questions().subscribe(response =>{
      console.log(response)
      this.multipleChoiceList=response
    })
  }

}
