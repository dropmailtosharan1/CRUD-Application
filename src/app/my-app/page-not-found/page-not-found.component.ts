import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <h2> Page Not Found --- 404 Error! </h2>
  `,
  styles: [`
  h2{ color:blue; text-align:center; font-family:play; font-weight:bold; font-size:30px }
  `]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
