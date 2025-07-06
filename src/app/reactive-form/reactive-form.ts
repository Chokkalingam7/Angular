import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css'
})
export class ReactiveForm {
  reactiveForm:FormGroup;
  constructor(private fb:FormBuilder){
    // this.reactiveForm = new FormGroup({
    //   firstname:new FormControl(""),
    //   lastname: new FormControl(""),
    //   email: new FormControl(""),
    //   password : new FormControl(),
    //   isChecked : new FormControl(),
    //   address : new FormGroup({
    //     city:new FormControl(""),
    //     street:new FormControl(''),
    //     pincode:new FormControl(),
    //   })
    // })
    this.reactiveForm = this.fb.group({
      firstname:['',[Validators.required,Validators.pattern("^[a-zA-Z]+$")]],
      lastname:['',[Validators.required,Validators.minLength(10)]],
      email:['',[Validators.required,Validators.maxLength(15),Validators.email]],
      password:['',[Validators.required]],
      isChecked:[''],
      address:this.fb.group({
        city:[''],
        street:[''],
        pincode:[''],
      }),
      skills:this.fb.array([])
    })
  }
  get skills(): FormArray{
    return this.reactiveForm.get("skills") as FormArray
  }
  newSkill(): FormGroup{
    return this.fb.group({
    skill:''
    })
  }
  addSkill(){
    this.skills.push(this.newSkill());
  }
  deleteSkill(i:number){
    this.skills.removeAt(i);
  }
  onSubmit(){
    alert('Form Submitted');
  }
}
