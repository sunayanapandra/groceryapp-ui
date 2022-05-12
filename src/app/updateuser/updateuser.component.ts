import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})



export class UpdateuserComponent implements OnInit {

  

  

    id!: number;
  

    user:any;
  
  
    constructor(private http:HttpClient, private route:ActivatedRoute,private toastrService: ToastrService) { 
      this.id = this.route.snapshot.params["id"];
    }
  
    ngOnInit(): void {

      this.getUser();
  
      
  
    }
    users!:any;
    updateUsers()
    {
     // const userObj={"id":this.id,"name":this.name,"brand":this.email,"category":this.password,"price":this.mobile};
      const url="http://localhost:8080/user/"+this.id;
      this.http.put(url,this.user).subscribe((res)=>{
        console.log(res);
        this.toastrService.success('successfully updated');
      },(err)=>{
        console.log(err);
        this.toastrService.error('invalid credentails')
      });

    }

      getUser()
      {
        const url="http://localhost:8080/user/"+this.id;
        this.http.get(url).subscribe((res)=>{
          this.user = res;
        
      });
    }
   
  }
     
  


