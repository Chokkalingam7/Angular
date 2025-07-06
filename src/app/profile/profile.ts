import { Component, Inject, OnInit } from '@angular/core';
import { SharedData } from '../shared-data'; // Update the path as needed
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile implements OnInit{
  dummyData:any;
  isEligible:boolean | undefined;
  apiData:any;
  constructor(@Inject(SharedData) private _sharedData: SharedData) {
    this.dummyData = this._sharedData.userData;
    this.isEligible = this._sharedData.isEligibleForSubscription();
  }
  ngOnInit(): void {
      this.getData();
  }
  getData(){
    this._sharedData.getUserData().subscribe((res)=>{
      this.apiData=res;
    })
  }
}
