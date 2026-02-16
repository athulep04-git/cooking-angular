import { Component, OnInit } from '@angular/core';
import { Sidebar } from "../sidebar/sidebar";
import { Apiservice } from '../../services/apiservice';

@Component({
  selector: 'app-download-list',
  imports: [Sidebar],
  templateUrl: './download-list.html',
  styleUrl: './download-list.css',
})
export class DownloadList implements OnInit{
  downloads:any=[]
constructor(private api:Apiservice){}
  ngOnInit(): void {
    this.getDownloads()
  }
  getDownloads(){
    this.api.getDownloadListAPI().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.downloads=res
      }
    })
  }

}
