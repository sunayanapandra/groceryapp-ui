import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {
  name!: String;
  brand!: String;
  category!: String;
  price!: String;
  image!:String


  constructor(private http:HttpClient,private toastrService: ToastrService) { }

  ngOnInit(): void {

    

  }
  products!:any;
  getAddProducts()
  {
    const userObj={"name":this.name,"brand":this.brand,"category":this.category,"price":this.price,"image":this.image};
    const url="http://localhost:8080/product/save";
    this.http.post(url,userObj).subscribe((res)=>{
      console.log(res);
      this.toastrService.success('successfully added');
    },(err)=>{
      console.log(err);
      this.toastrService.error('invalid credentails')
    });
 }
}
   