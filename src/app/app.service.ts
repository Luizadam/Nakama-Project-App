import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private api:HttpClient) { }

  getData(){
    return this.api.get("http://127.0.0.1:8000/api/v1/nakama/")
  }
  getDataId(id){
    return this.api.get(`http://127.0.0.1:8000/api/v1/nakama/${id}`)
  }
  postData(data){
    return this.api.post("http://127.0.0.1:8000/api/v1/nakama/",data)
  }
  deleteData(id){
    return this.api.delete(`http://127.0.0.1:8000/api/v1/nakama/${id}`)
  }
  editData(id,data){
    return this.api.put(`http://127.0.0.1:8000/api/v1/nakama/${id}`,data)
  }
}
