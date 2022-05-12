import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-updateproducts',
  templateUrl: './updateproducts.component.html',
  styleUrls: ['./updateproducts.component.css']
})
export class UpdateproductsComponent implements OnInit {

    id!: number;
  

    product:any;
  
  
    constructor(private http:HttpClient, private route:ActivatedRoute,private toastrService: ToastrService) { 
      this.id = this.route.snapshot.params["id"];
    }
  
    ngOnInit(): void {

      this.getProduct();
  
      
  
    }
    products!:any;
    updateProducts()
    {
      // const userObj={"id":this.id,"name":this.name,"brand":this.brand,"category":this.category,"price":this.price};
      const url="http://localhost:8080/product/"+this.id;
      this.http.put(url,this.product).subscribe((res)=>{
        console.log(res);
        this.toastrService.success('successfully updated');
      },(err)=>{
        console.log(err);
        this.toastrService.error('invalid credentails')
      });

    }

      getProduct()
      {
        const url="http://localhost:8080/product/"+this.id;
        this.http.get(url).subscribe((res)=>{
          this.product = res;
        
      });
    }
   
  }
     