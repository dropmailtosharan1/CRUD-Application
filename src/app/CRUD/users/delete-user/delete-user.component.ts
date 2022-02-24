import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  userId:string='';
  constructor(private activatedRoute:ActivatedRoute, 
    private userService:UserService,
    private _snackBar:MatSnackBar,
    private router:Router) { }
            
  ngOnInit(): void { 
    this.activatedRoute.params.subscribe(data=>{
      this.userId=data.id;
    });
    if(this.userId){
      this.userService.deleteUser(this.userId).subscribe(data=>{
        this._snackBar.open("User Deleted Successfully");
        this.router.navigate(['..','list-users']);
      }, err =>{
        this._snackBar.open("Unable to Delete the user");
      })
    }
  } 

}
