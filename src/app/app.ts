import { CommonModule } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, Pipe } from '@angular/core';
import { Router,RouterOutlet } from '@angular/router';
import { of } from 'rxjs';
import { CustomPipe } from './custom-pipe';
import { PurePipe } from './pure-pipe';
import { ImpurePipe } from './impure-pipe';
import { TemplateDrive } from './template-drive/template-drive';
import { ReactiveForm } from './reactive-form/reactive-form';
import { Profile } from './profile/profile';
import { Crud } from './crud';
import { CrudComponent } from './crud/crud';
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,CrudComponent, CommonModule, CustomPipe, PurePipe, ImpurePipe, TemplateDrive, ReactiveForm, Profile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
  protected title = 'life-cycle-hooks';
  mobileNumber:any=null;
  constructor(private router :Router){
    console.log('Constructor called');
  }
  ngOnChanges() {
  console.log('ngOnChanges called');
}
ngOnInit() {
  console.log('ngOnInit called');
}
ngDoCheck() {
  console.log('ngDoCheck called');
}
ngAfterContentInit() {
  console.log('ngAfterContentInit called');
}
ngAfterContentChecked() {
  console.log('ngAfterContentChecked called');
}
ngAfterViewInit() {
  console.log('ngAfterViewInit called');
}
ngAfterViewChecked() {
  console.log('ngAfterViewChecked called');
}
ngOnDestroy() {
  console.log('ngOnDestroy called');
}
angularPipes:string = "use pipes to format data in angular templates";
personData ={
  name:'John',age:30,city:'Mumbai'
}
currentDate:Date=new Date();
items=of(['Apple','Banana','Cherry']);
}
