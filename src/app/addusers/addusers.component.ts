import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.css']
})
export class AddusersComponent implements OnInit {
  name!: String;
  email!: String;
  password!: String;
  mobile!: String;

  constructor(private http:HttpClient,private toastrService: ToastrService) { }

  ngOnInit(): void {

    

  }
  users!:any;
  getAddUsers()
  {
    const userObj={"name":this.name,"email":this.email,"password":this.password,"mobile":this.mobile};
    const url="http://localhost:8080/user/save";
    this.http.post(url,userObj).subscribe((res)=>{
      console.log(res);
      this.toastrService.success('successfully added');
    },(err)=>{
      console.log(err);
      this.toastrService.error('invalid credentails')
    });
 }
}
   