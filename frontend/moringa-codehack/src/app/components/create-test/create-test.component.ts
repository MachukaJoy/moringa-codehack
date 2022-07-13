import { Component, OnInit, ViewChild  } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions/questions.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';


@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {
  subjectiveList:any = [];
  katasList:any =[];
  multipleChoiceList:any = [];
  assessmentList:any = [];
  @ViewChild("assessmentcategory") category:any;
  
 

  constructor(private subjective:QuestionsService, private katas:QuestionsService, private multiple:QuestionsService, private assessments:QuestionsService,private http: HttpClient) { }

  response!: any;
  message!: string;

    

  ngOnInit(): void {
    console.log(this.category)
    let sendInvite = document.querySelector("#sendinvite") as HTMLDivElement;
    let inviteCheckbox = document.querySelector("#sendinvitecheckbox") as HTMLInputElement
    // let assesmentCheckbox = document.querySelector("#createassesmentcheckbox") as HTMLInputElement
    // let createassesment = document.querySelector("#createownassesment") as HTMLFormElement
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

    // assesmentCheckbox.addEventListener('change', function(){
    //   if (this.checked){
    //     createassesment.style.display='block'
    //   } else {
    //     createassesment.style.display='none'
    //   }
    // });

    katascheck.addEventListener('click', function(){
      // console.log(this.checked)
      if (this.checked){
        katasselect.style.display='block'
        // console.log(this.value)
        multipleselect.style.display='none'
        subjectiveselect.style.display='none'
      } else{
        katasselect.style.display='none'
      }
    });

    multiplecheck.addEventListener('click', function(e){
      if (this.checked){
        multipleselect.style.display='block'
        katasselect.style.display='none'
        subjectiveselect.style.display='none'
      } else{
        multipleselect.style.display='none'
      }
    });

    subjectivecheck.addEventListener('click', function(e){
      if (this.checked){
        subjectiveselect.style.display='block'
        katasselect.style.display='none'
        multipleselect.style.display='none'
      } else{
        subjectiveselect.style.display='none'
      }
    });


    this.getSubjective()
    this.getkatas()
    this.getMultipleChoice()
    this.getAssessments()
  }


  getSubjective(){
    this.subjective.get_subjective().subscribe(response =>{
      console.log(response)
      this.subjectiveList=response
    })
  }

  getkatas(){
    this.katas.get_katas().subscribe(response =>{
      console.log(response)
      this.katasList=response
    })
  }

  getMultipleChoice(){
    this.multiple.get_mcquestions().subscribe(response =>{
      console.log(response)
      this.multipleChoiceList=response
    })
  }

  getAssessments(){
    this.assessments.get_assesments().subscribe(response =>{
      console.log(response)
      this.assessmentList=response
    })
  }

  submit(assessmentName: string, assessmentTopic: string, assessmentDifficulty: string, assessmentPassmark: string,
    assessmentTimelimit: string, assessmentCategory:any): void{
      let assesmentform = document.querySelector("#createownassesment") as HTMLFormElement
      console.log(assesmentform)

      this.http
      .post<object>('https://api-moringa-codehack.herokuapp.com/api/assessments/', {
        name: assessmentName,
        topic: assessmentTopic,
        difficulty: assessmentDifficulty,
        pass_mark: assessmentPassmark,
        time_limit: assessmentTimelimit,
        category: assessmentCategory.value
        
      })
      .subscribe((res) => {
        console.log(res);
        this.response = res;
        this.message = this.response.message;
        
      });
      
  }

}
