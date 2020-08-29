import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AppService } from '../app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
value:number
  postForm = new FormGroup({
    name:new FormControl (''),
    job_role:new FormControl (''),
    phone_number:new FormControl (''),
    work_location:new FormControl (''),
    status:new FormControl (this.value)
  })
  constructor(private apiService : AppService,private router :Router) { }

  ngOnInit(): void {
  }

  saveData(){
    this.apiService.postData(this.postForm.value).subscribe((result)=>{
      this.router.navigateByUrl('')
    })
  }

}
