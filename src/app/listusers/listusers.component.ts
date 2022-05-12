import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {

  constructor(private http:HttpClient,private toastrService: ToastrService) { }

  ngOnInit(): void {

    this.getAllUsers();
  }
  users!:any;
  getAllUsers()
  {
    const url="http://localhost:8080/user/userlist";
    this.http.get(url).subscribe((res)=>{
      this.toastrService.success('successfully listedusers');
      this.users = res;
    },err=>{
      this.toastrService.error('invalid credentails')
    }
    )
  }
  deleteUser(id:any){
    let cfm = confirm("Do you want to delete ?");
    if(cfm){
      const url="http://localhost:8080/user/" + id;
      this.http.delete(url).subscribe((res)=>{
        console.log(res);
        this.toastrService.success('successfully deleted');
       // alert("Successfully Deleted");
        //refresh
        this.getAllUsers();
      },err=>{
        this.toastrService.error('invalid credentails')
      }
      )
    }
  }

    
}

    

  


