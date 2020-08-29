import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  DetailForm = new FormGroup({
    name:new FormControl (''),
    job_role:new FormControl (''),
    phone_number:new FormControl (''),
    work_location:new FormControl (''),
    status:new FormControl ('')
  })
  constructor(private route:ActivatedRoute,private apiService : AppService,private router:Router) { }

  ngOnInit(): void {
    this.getDataDetail()
  }

  getDataDetail(){
    this.apiService.getDataId(this.route.snapshot.params.id).subscribe((result)=>{
      this.DetailForm = new FormGroup({
        name:new FormControl (result['name']),
        job_role:new FormControl (result['job_role']),
        phone_number:new FormControl (result['phone_number']),
        work_location:new FormControl (result['work_location']),
        status:new FormControl (result['status'])
      })
    })
  }
}
