import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css']
})
export class ListproductsComponent implements OnInit {

  constructor(private http:HttpClient,private toastrService: ToastrService) { }




  ngOnInit(): void { 
    
    this.getAllProducts();
  }
  products!:any;
  getAllProducts()
  {
    const url="http://localhost:8080/product/productlist";
    this.http.get(url).subscribe((res)=>{
      this.products = res;
    },err=>{
    }
    )
  }

  deleteProduct(id:any){
    let cfm = confirm("Do you want to delete ?");
    if(cfm){
      const url="http://localhost:8080/product/" + id;
      this.http.delete(url).subscribe((res)=>{
        console.log(res);
        this.toastrService.success('successfully deleted');
       // alert("Successfully Deleted");
        //refresh
        this.getAllProducts();
      },err=>{
        this.toastrService.error('invalid credentails')
      }
      )
    }
  }

    
}
