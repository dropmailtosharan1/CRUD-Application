import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() myNumber='';

  constructor() { }

  ngOnChanges(changes:SimpleChanges){
    const newNumberChange:SimpleChange=changes.myNumber;
    console.log("ngOnChanges() -> Previous Value:", newNumberChange.previousValue);
    console.log("ngOnChanges() -> Current Value:", newNumberChange.currentValue);
  }
  ngOnInit() {
    console.log("ngOnChanges() -> value:", this.myNumber);    
  }
  ngDoCheck(){
    console.log("ngDoCheck() -> value:", this.myNumber); 
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit() -> Only Executes one time",this.myNumber);    
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked() -> value:", this.myNumber);    
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit() -> It gets called once after ngAfterContentChecked()",this.myNumber);    
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked() -> It gets called once after ngAfterViewInit()",this.myNumber);    
  }
  ngOnDestroy(){
    console.log("Component has been DESTROYED....!");    
  }
  

}
