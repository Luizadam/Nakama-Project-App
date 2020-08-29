import { Component, OnInit } from '@angular/core';
import { AppService } from "../app.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
data:{}
  constructor(private apiService:AppService,private router : Router) { }

  ngOnInit(): void {
    this.geData()
  }

  geData(){
    this.apiService.getData().subscribe((res)=>{
      this.data  = res
    })
  }

  deleteData(id){
    this.apiService.deleteData(id).subscribe((result)=>{
      this.geData()
    })
  }
  detail(id){
    this.router.navigateByUrl(`detail/${id}`)
  }

}
