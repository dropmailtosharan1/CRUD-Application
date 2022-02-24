import { ObserversModule } from '@angular/cdk/observers';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  results=[];
  // url='https://restcountries.eu/rest/v2/name/';
  country=new FormControl();
  constructor(private _http:HttpClient) { } 

  ngOnInit() { 
    // this.country.valueChanges.pipe(debounceTime(1000)).subscribe(country=>{
    //   console.log(country);
    //   this._http.get(this.url+country).subscribe((data:any)=>{
    //     console.log(data);
    //     this.results=data;        
    //   });
    // });
        // Multicasting Observable Method();
        const numbers=[1,2,3,4,5,6,7,8,9,0];
        const object={name:"SKR", Gender:"Male"};
        let nameArray=['Nagarjuna','Chiru','Venky','Balaiah'];
        let obserable=of(25,numbers,object,'SKR Helpline',nameArray,{});
        // obserable.subscribe(data=>{ console.log(data); })
        // setTimeout(() => { obserable.subscribe(data=>{ console.log(data); }) }, 5000);
        const sequence=new Observable(this.multipleSubscriber());
        // const sequence=new Observable(this.multiCastSubscriber());
        sequence.subscribe({
          next(number){
            console.log("1st Subscriber:"+number);            
          },
          complete(){
            console.log("1st Finished.");            
          }
        });
        setTimeout(() => {
          sequence.subscribe({
            next(number){
              console.log("2nd Subscriber:"+number);
            },
            complete(){
              console.log("2nd Finished.");              
            }
          });
        }, 3000);
  }
  multipleSubscriber(){
    const Array=[10,20,30,40,50];
    return (observer:any)=>{
      this.run(observer,Array,0);
      return {
        unsubscribe(){}
      }
    }
  }
    run(observer:any,Array:any,index:any){
      return setTimeout(() => {
        observer.next(Array[index]);
        if(index===Array.length-1){
          observer.complete();
        }else{
          this.run(observer,Array,++index)
        }
      }, 1000);
    }
 
//     multiCastSubscriber(){
//       const arr=[100,200,300,400,500];
//       const observers: any[]=[];
//       let timeoutId: NodeJS.Timeout;
//       return (observer:any)=>{
//         observers.push(observer);
//         if(observers.length===1){
//           timeoutId=this.run({
//             next(val: any){
//               observers.forEach(obserable=>obserable.next(val));
//             }
//           }, complete(){
//            observers.slice(0).forEach((obserable: { complete: () => any; })=>obserable.complete())
//           }, arr,0);
//           return {
//             unsubscribe(){
//               observers.splice(observers.indexOf(observer),1);
//               if(observers.length===0){
//                 clearTimeout(timeoutId);
//               }
//             }
//           }
//         }
//       }
//     }

}

// function complete(): any {
//   throw new Error('Function not implemented.');
// }

