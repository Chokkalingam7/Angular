import { Component, OnInit } from '@angular/core';
import { Crud } from '../crud';
import { Iuser } from '../iuser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crud',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './crud.html',
  styleUrl: './crud.css'
})
export class CrudComponent implements OnInit{
  apiData : Iuser[] = [];
  constructor(private crud:Crud){}
  getAllData(){
    this.crud.getData().subscribe(res=>{
      this.apiData = Array.isArray(res) ? res : [res];
    })
  }
  ngOnInit(): void {
      this.getAllData();
  }
}
