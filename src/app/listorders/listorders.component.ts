import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listorders',
  templateUrl: './listorders.component.html',
  styleUrls: ['./listorders.component.css']
})
export class ListordersComponent implements OnInit {

  constructor(private http:HttpClient,private toastrService: ToastrService) { }




  ngOnInit(): void { 
    
    this.getAllOrders();
  }
  orders!:any;
  getAllOrders()
  {
    const url="http://localhost:8080/orders/orderlist";
    this.http.get(url).subscribe((res)=>{
      this.orders = res;
    },err=>{
    }
    )
  }

  /*deleteProduct(id:any){
    let cfm = confirm("Do you want to delete ?");
    if(cfm){
      const url="http://localhost:8080/product/" + id;
      this.http.delete(url).subscribe((res)=>{
        console.log(res);
        this.toastrService.success('successfully deleted');
       // alert("Successfully Deleted");
        //refresh
        this.getAllOrders();
      },err=>{
        this.toastrService.error('invalid credentails')
      }*/
    
    }
  

    

