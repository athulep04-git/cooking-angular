import { Component, OnInit } from '@angular/core';
import { Apiservice } from '../../services/apiservice';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit {

  constructor(private api: Apiservice) {}

  baseUrl:string = "http://localhost:3000";

  // user data
  userData:any={
    username:"",
    email:"",
    profilePic:""
  }


  downloadData:any=[]
  selectedFile:any=null;
  preview:string="";

  ngOnInit(): void {
    this.getUserData();
    this.getDownload();
  }
  // get user data
  getUserData(){
    this.api.getUserDetailsAPI().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.userData=res;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }


  // get downloads
  getDownload(){
    this.api.getdownloadRecipeAPI().subscribe({
      next:(res:any)=>{
        this.downloadData=res;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }


  deleteDownload(id:any){
    this.api.deleteDownloadRecipeAPI(id).subscribe({
      next:(res:any)=>{
        this.getDownload();
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  // handle image upload
  onFileChange(event:any){
    const file = event.target.files[0];
    if(file){
      this.selectedFile=file;
      this.preview=URL.createObjectURL(file);
    }
  }
  // update profile
  updateProfile(){
    const formData = new FormData();
    formData.append("username",this.userData.username);
    formData.append("email",this.userData.email);
    if(this.selectedFile){
      formData.append("profilePic",this.selectedFile);
    }
    this.api.updateUserDetailsAPI(formData).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.userData=res.updateUser;
        this.preview="";
        alert("Profile Updated Successfully");
      }
    })
  }
}
