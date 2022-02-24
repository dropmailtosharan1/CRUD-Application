import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  template: ` <br> <br>
    <h1>
      Welcome to Admin Page
    </h1>
  `,
  styles: [`
  h1{    text-align: center; color: red; font-size: 50px;         }
  `]
})
export class AdminHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
