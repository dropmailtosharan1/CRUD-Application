import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  myNumber: any=25;
  isVisible:boolean=true;
  constructor() { }

  ngOnInit(): void {  }
  get counter(){  return this.myNumber;  }  
  set counter(value){  this.myNumber=value;  }
  increment(){  this.counter++;  }  
  decrement(){  this.counter--;  }
  switchVisibility(){  this.isVisible=!this.isVisible; }
}
