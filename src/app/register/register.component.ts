import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name!: String;
  email!: String;
  password!: String;
  mobile!: String;


  constructor(private http:HttpClient,private toastrService: ToastrService) { }

  ngOnInit(): void {
  }
  register(){  
    const userObj={"name":this.name,"email":this.email,"password":this.password,"mobile":this.mobile};
    const url="http://localhost:8080/user/save";
    this.http.post(url,userObj).subscribe((res)=>{
      console.log(res);
      alert("successfully Registered");
    this.toastrService.success('registered in');
    },(err)=>{
      console.log(err);
      alert(err.error.message);
      // alert("Please re-enter your Details");
    });
 }
}
  

