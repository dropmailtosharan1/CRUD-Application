import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { reject } from 'lodash';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  results=[];
  url='https://restcountries.eu/rest/v2/name/';
  promise:Promise<{}> | undefined
  constructor(private _http:HttpClient) {
    // this.promise=this.getPromise();
  }
  ngOnInit(): void { 
     // let promise=new Promise((res)=>{
      //   console.log("Promise is Running.....!");  
      //   res("Success Call...!")    
      // })
      // promise.then(value=>{
      //   console.log(value);      
      // })
    //  let observable=new Observable((res)=>{
    //    console.log("Observable is Running...!");
    //    res.next("Success");
    //  })
    //  observable.subscribe(value=>{
    //    console.log(value);      
    //  })
      // let promise =new Promise((x)=>{
      //   x("SKR");  x("SBR");  x("SDR");  x("SVR");
      // })
      // promise.then(value=>{
      //   console.log(value);      
      // })
    // let observable=new Observable((x)=>{
    //   x.next("SKR");  x.next("SBR");  x.next("SDR");  x.next("SVR");
    // })
    // observable.subscribe(value=>{
    //   console.log(value);      
    // })
      // let obs=new Observable((x)=>{
      //   setTimeout(() => {
      //     console.log("Calling Next");
      //     x.next("First Call");
      //   }, 5000);
      // })
      // let subscribe=obs.subscribe(value=>{
      //   console.log(value);
      //   });
      // subscribe.unsubscribe();
   }
  search(country:any){
    console.log(country);
    this._http.get(this.url+country).toPromise().then((data:any)=>{
      console.log(data); 
      this.results=data;      
    })
  }
  getPromise(){
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        
      }, 3000);
    })
  }


}
