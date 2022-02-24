import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  registrationForm: any=FormGroup;
  isvalid: boolean=false;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.registrationForm=this.fb.group({
      username:['',Validators.required,Validators.compose([Validators.minLength(5),Validators.maxLength(10)])],
      password:['',Validators.required],
      confirmPassword:[''],
      city:[''],
      state:[''],
      pincode:['']
    })
  }
  Save(){
    if(this.registrationForm.invalid){
      this.isvalid=true;
    }
    console.log("Saved Login Details", this.registrationForm.value);
  }
  displayValues(){
   this.registrationForm.setValue({ //it follows strictly all the forms in registrationForm
  //  this.registrationForm.patchValue({
      username:'testUser',
      password:'testPassword',
      confirmPassword:'testPassword',
      city:'testCity',
      state:'testState',
      pincode:'testPincode'
    });
  }
}
