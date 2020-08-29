import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  EditForm = new FormGroup({
    name:new FormControl (''),
    job_role:new FormControl (''),
    phone_number:new FormControl (''),
    work_location:new FormControl (''),
    status:new FormControl ('')
  })
  constructor(private route:ActivatedRoute,private apiService : AppService,private router:Router) { }

  ngOnInit(): void {
    this.getDataEdit()
  }

  getDataEdit(){
    this.apiService.getDataId(this.route.snapshot.params.id).subscribe((result)=>{
      this.EditForm = new FormGroup({
        name:new FormControl (result['name']),
        job_role:new FormControl (result['job_role']),
        phone_number:new FormControl (result['phone_number']),
        work_location:new FormControl (result['work_location']),
        status:new FormControl (result['status'])
      })
    })
  }

  editData(){
    this.apiService.editData(this.route.snapshot.params.id,this.EditForm.value).subscribe((result)=>{
      this.router.navigateByUrl('')
    })
  }

}
