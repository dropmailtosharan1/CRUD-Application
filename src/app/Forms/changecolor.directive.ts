import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangecolor]'
})
export class ChangecolorDirective {

  constructor(private _element:ElementRef) {
    this._element.nativeElement.style.color="red";
  }

  @HostListener('mouseenter')mouseEnter(){
    this.changeColor("blue");
  }
  @HostListener('mouseleave')mouseLeave(){
    this.changeColor("black");
  }
  changeColor(color: string){
    this._element.nativeElement.style.color=color;
  }
}
