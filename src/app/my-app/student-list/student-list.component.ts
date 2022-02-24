import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  template: `
    <h2> Student-List components  </h2>
    <!-- <h2> {{errMsg}} </h2>
    <ul *ngFor="let x of students">
      <li>{{x.name}}</li>
    </ul> -->
  `,
  styles: [`
  h2{ color:blue; text-align:center; font-family:play; font-weight:bold; font-size:30px }
  `]
})
export class StudentListComponent implements OnInit {

  students:any=[  //{"id":1,"name":"Rama","course":"Angular"},{"id":2,"name":"Sita","course":"React"},
  //{"id":3,"name":"Lakshman","course":"Vue"},{"id":4,"name":"Ravana","course":"Bootstrap"}
  ];
  errMsg:any;
  constructor(private _stdService:StudentService) { }

  ngOnInit(): void {  // this.students=
    this._stdService.getStudents().subscribe(data=>
    this.students=data, error=>this.errMsg=error );
  }

}
