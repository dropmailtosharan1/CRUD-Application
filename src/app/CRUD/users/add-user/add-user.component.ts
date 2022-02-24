import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addUserForm:FormGroup=new FormGroup({});
  constructor(private formBuilder:FormBuilder,
   private userService:UserService,
   private _snackbar:MatSnackBar
   ) { }

  ngOnInit(): void {
    this.addUserForm=this.formBuilder.group({
      'username':new FormControl(''),
      'email':new FormControl(''),
      'phone':new FormControl(''),
      'company':new FormControl('')
    })
  }
  
  createUser(){
    // console.log(this.addUserForm.value); 
    this.userService.addUser(this.addUserForm.value).subscribe(data=>{
      // console.log("User Created");  
      this._snackbar.open("User data created successfully with ID");  
    }, err=>{
      // console.log(err);   
      this._snackbar.open("Unable to create user data");    
    })
  }

}
