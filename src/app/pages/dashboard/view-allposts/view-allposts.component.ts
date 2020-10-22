import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NbSpinnerService, NbToastrService } from "@nebular/theme";
import { from } from "rxjs";
import { NetworkserviceService, Product, Products } from "../../../services/networkservice.service";
import { Post } from "../../../services/networkservice.service";

@Component({
  selector: "ngx-view-allposts",
  templateUrl: "./view-allposts.component.html",
  styleUrls: ["./view-allposts.component.scss"],
})
export class ViewAllpostsComponent implements OnInit {
  
  posts: Array<Post>;
  products: Products;

  alertType: 1;
  alertMessage: "Hello World!";
  loading = false;

  productList : object [];

  constructor(
    private apiService: NetworkserviceService,
    private toastr: NbToastrService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.apiService.getAllPosts().subscribe((response) => {
      this.posts = response.body;
      this.loading = false;
      // const keys = response.headers.keys();
      // const headers = keys.map((key) => `${key}: ${response.headers.get(key)}`);
      // console.log(response.status);
      if (response.status != 200) {
        this.toastr.danger(response.statusText, "Danger");
        return;
      }
      this.toastr.success(response.statusText, "Success");
    }, (error:HttpErrorResponse) => {
      this.loading = false;
      this.toastr.danger(`Error Message : ${error.message}`, `Error Status Code: ${error.status}`)
    });
    
    
    this.apiService.getAllProducts().subscribe((response) => {
      // this.products = response.body;
      this.productList = response.body;
      console.log(response.body["product"]);
      this.loading = false;
      if (response.status != 200) {
        this.toastr.danger(response.statusText, "Danger");
        return;
      }
      this.toastr.success(response.statusText, "Success");
    }, (error:HttpErrorResponse) => {
      this.loading = false;
      this.toastr.danger(`Error Message : ${error.message}`, `Error Status Code: ${error.status}`)
    })
  }

  selectedPost(post: Post) {
    // this.apiService.setLocalPost(post);
    this.router.navigate(["pages/view-post", post.id]);
  }
}
