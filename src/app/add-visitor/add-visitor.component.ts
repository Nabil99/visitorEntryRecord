import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControlName, Validators } from '@angular/forms';
import { VisitorserviceService } from '../service/visitorservice.service';


@Component({
  selector: 'app-add-visitor',
  templateUrl: './add-visitor.component.html',
  styleUrls: ['./add-visitor.component.css']
})
export class AddVisitorComponent implements OnInit {
  visitorForm:FormGroup;

  visitor: any = {}; //create variable  to store form data


  constructor(private _fb:FormBuilder, private _visitorService:VisitorserviceService){
    this.visitorForm = this._fb.group({
      visitorName: ['', Validators.required],
      email: ['', Validators.required],
      typeOfVisit: ['', Validators.required],
      personToVisit: ['', Validators.required],
      currentDate: ['', Validators.required],
      timeOfEntry: ['', Validators.required],
      timeOfExit: ['', Validators.required]
    })
  }

  ngOnInit(){

  }

  submitFormData(){
    //console.log(this.visitorForm.value);
    this.visitor = Object.assign(this.visitor, this.visitorForm.value); //assin form data in visitor and call service function add Visitor data in localstorage
    var res = this._visitorService.addVisitor(this.visitor);
    if(res){
      this.visitorForm.reset();
      alert("Visitor added succesfully ):-");
    }
  }

  get vlog(){ return this.visitorForm.controls;}

}
