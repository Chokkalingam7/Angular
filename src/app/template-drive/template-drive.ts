import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../user';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-template-drive',
  imports: [FormsModule,JsonPipe],
  templateUrl: './template-drive.html',
  styleUrl: './template-drive.css'
})
export class TemplateDrive implements OnInit {
  userObject : User={};
  onSubmit(userForm:NgForm){
    alert('Form is submitted');
  }
  ngOnInit(){
    this.userObject={
      // firstName:'Rahul',
      // lastName:'Humar',
      // email:'rahul@gmail.com',
      // pass:'Rahul',
      // isCheck:true

    }
  }

}
