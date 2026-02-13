import { Component, OnInit } from '@angular/core';
import { Apiservice } from '../../services/apiservice';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit {
  constructor(private api:Apiservice){}
  downloadData:any=[]
  ngOnInit(): void {
    this.getDownload()
  }
  getDownload(){
    this.api.getdownloadRecipeAPI().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.downloadData=res
        console.log(this.downloadData);
      }
    })
  }
  deleteDownload(id:any){
    this.api.deleteDownloadRecipeAPI(id).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.getDownload()
      }
    })
  }
}
