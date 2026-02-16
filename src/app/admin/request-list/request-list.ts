import { Component, OnInit } from '@angular/core';
import { Sidebar } from "../sidebar/sidebar";
import { Apiservice } from '../../services/apiservice';

@Component({
  selector: 'app-request-list',
  imports: [Sidebar],
  templateUrl: './request-list.html',
  styleUrl: './request-list.css',
})
export class RequestList implements OnInit{
 testimony:any=[]
constructor(private api:Apiservice){}
  ngOnInit(): void {
    this.getAllTestimony()
  }
  getAllTestimony(){
    this.api.getAllTestimonyAPI().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.testimony=res
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
  updateTestimonyStatus(id:any,status:any){
    this.api.updateTestimonyAPI(id,status).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.getAllTestimony()
      }
    })
  }
}
