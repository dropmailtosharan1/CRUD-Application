import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <!--  <p> Welcome to {{name}} </p>
    <p> {{" Welcome to : "  +  name}}</p>
    <p> {{name.length}} </p>
    <p> {{name.toUpperCase()}} </p>
    <p> {{userName()}}</p>
    <p> {{myUrl}} </p>
    <br> <br> --> 
    <div>Course :  <input [id]="courseId" type="text" value="Angular 12"> </div> &nbsp; <br> 
    <button class="btn btn-success" (click)="onSubmit()"> Submit </button>
    <br> <br>
    <div>Course :  <input [disabled]="isDisabled" id={{courseId}} type="text" value="Angular 12"> </div>
    <h2> SKR Helpline </h2>
    <h2 class="TextColor"> SKR Helpline </h2>
    <h2 [class]="myText"> SKR Helpline </h2>
    <h2 [class]="myText1"> SKR Helpline </h2>
    <h2 [class]="myText2"> SKR Helpline </h2>
    <h2 [class.TextSize]="required"> SKR Helpline </h2>
    <h2 [ngClass]="Group"> SKR Helpline </h2>
    <h2 [style.color]="'blue'"> SKR Style Binding </h2>
    <h2 [style.color]="myColor"> SKR Style Binding Mycolor </h2>
    <h2 [style.color]="required ? 'green' : 'red'"> SKR Style Binding </h2>
    <h2 [ngStyle]="myStyles"> SKR Style Binding </h2>
    <br> <br>
    <button (click)="onClick()" type="button">On Click Me </button>
    <h2>{{greetings}}</h2>  
    <br> <br>
    <input #msg type="text"> &nbsp;
    <button (click)="message(msg.value)" type="button">Welcome</button> &nbsp;
    <input [(ngModel)]="data" type="text"> &nbsp;
    <button type="button"> Click Me </button> <br> <br>
    <p>{{data}}</p>
    <h2 *ngIf="status; then trueBlock else elseBlock">  </h2>
    <ng-template #elseBlock> <h2> Goodbye to False part </h2> </ng-template>
    <ng-template #trueBlock> <h2> Welcome to True part </h2> </ng-template>
    <div [ngSwitch]="myChoice"> 
      <div class="switchCase">
        <div *ngSwitchCase="'one'">This is First Block</div>
        <div *ngSwitchCase="'two'">This is Second Block</div>
        <div *ngSwitchCase="'three'">This is Third Block</div>
        <div *ngSwitchDefault>This is Invalid Block</div>
      </div> <br> <br> 
    </div>
    <div *ngFor="let x of subjects; odd as e">
      <h2> {{e}} ---> {{x}} </h2>
    </div> 
    <h1> {{parent}} </h1>
    <button (click)="fireEvent()">Click Me</button>
    <br> <br> 
    <h2> {{name}} </h2>
    <h2> {{name | lowercase}} </h2>
    <h2> {{name | uppercase}} </h2>  
    <h2> {{msg1 | titlecase}} </h2>
    <h2> {{name | slice:3:6}} </h2>
    <h2> {{person | json}} </h2>
    <h2> {{5.678 | number: '1.2-3'}} </h2>
    <h2> {{5.678 | number: '3.4-5'}} </h2>
    <h2> {{5.678 | number: '3.1-2'}} </h2>
    <h2> {{0.25 | percent}} </h2>
    <h2> {{0.25 | currency}} </h2>
    <h2> {{0.25 | currency : 'INR'}} </h2>
    <h2> {{date}} </h2>
    <h2> {{date | date:'short'}} </h2>
    <h2> {{date | date:'shortDate'}} </h2>
    <h2> {{date | date:'shortTime'}} </h2>
    <h2> {{date | date:'medium'}} </h2>
    <h2> {{date | date:'mediumDate'}} </h2>
    <h2> {{date | date:'mediumTime'}} </h2>
    <h2> {{date | date:'long'}} </h2>
    <h2> {{date | date:'longDate'}} </h2>
    <h2> {{date | date:'longTime'}} </h2>

  `,
  styles: [`
  p{    color:blue;    text-align:center;    font-size:30px;    padding:10px;  }
  h2{    text-align:center;    font-size:30px;  }
  .TextColor{    color:green;  }
  .TextSize{   font-size:60px   }
  .TextStyle{  font-style:italic }
  .switchCase{ font-size:60px;  color:blue;  font-width:bold;  text-align:center;}
  `
  ]
})
export class TestComponent implements OnInit {
  name = "SKR Helpline"; myUrl = window.location.href; courseId = ''; isDisabled = true;
  myText = "TextColor"; myText1 = "TextSize"; myText2 = "TextStyle"; required = false;
  Group = { "TextColor": this.required, "TextSize": this.required, "TextStyle": this.required }
  myColor = "orange"; myStyles = { color: "gold", fontStyle: "italic", fontSize: "50px" }
  greetings = ""; data = ""; status = false;
  myChoice = "three"; subjects = ["Angular", "React", "Vue", "HTML", "CSS", "Bootstrap"];
  msg1 = "Welcome to SKR Helpline"; person = { "firstName": "SKR", "secondName": "Helpline" }
  date = new Date();

  //@Input() fromParent:any; 
  @Input('fromParent') parent: any;
  @Output() childInfo = new EventEmitter();
  constructor() { }

  ngOnInit(): void { }
  onSubmit() { console.log("Angular"); }
  userName() { return "Welcome: " + this.name; }
  onClick() {    //console.log("Welcome to SKR helpline");
    this.greetings = "Welcome to SKR helpline";
  }
  message(message: any) { console.log(message); }
  fireEvent() { this.childInfo.emit("This is From Child"); }
}
