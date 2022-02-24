import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  userId:any;
  userDetails:any;
  constructor(private userService:UserService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.userId=data;
      // console.log(this.userId);      
    })
    this.userService.viewUsers(this.userId).subscribe(data=>{
      // console.log(data);      
      this.userDetails=data;
    })
  }

}
