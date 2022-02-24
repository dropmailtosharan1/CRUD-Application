import { Component, OnInit } from '@angular/core';
import { FormRegisterService } from '../form-register.service';
import { User } from '../user';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {

  course=['Angular','React','Vue','Bootstrap','mongoDB'];
  userModel=new User('SKR','skrhelpline@gmail.com','9888797970','professor','male','default',true);
  courseHasError=true;
  submitted=false;
  errorMsg='';
  constructor(private _registerService:FormRegisterService) { }

  ngOnInit(): void {
  }
  ValidateCourse(value: string){
    if(value==='default'){
      this.courseHasError=true
    }
    else{
      this.courseHasError=false;
    }
  }
  onSubmit(myForm: any){
    console.log(myForm);    
    // console.log(this.userModel);   
    //this.submitted=true; 
    //this._registerService.enroll(this.userModel).subscribe(
   // data=>console.log('success...!',data),
   // error=> //console.error('Error..!',error)
    //this.errorMsg=error.statusText
   // )

  }

}
