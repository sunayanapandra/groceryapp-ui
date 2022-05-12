import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {

  constructor(private http:HttpClient,private toastrService: ToastrService) { }




  ngOnInit(): void { 
    this.toastrService.success('completed..');
    // this.getAllProducts();
    let items= localStorage.getItem("CART_ITEMS")
    this.products = items != null ? JSON.parse(items):[];
  }
  products!:any;
  placeOrder()
  {
    for(let product of this.products) {
        const url="http://localhost:8080/orders/save";
        
        let data =  {"userId":7,"productId": product.id,"purchasedOn": "2022-06-03","status":"process","price": product.price
    }
        this.http.post(url,data).subscribe((res)=>{
          //alert("Order placed");
        },err=>{
        }
        )

  }
  localStorage.removeItem("CART_ITEMS");
  this.products = [];
  }
}
