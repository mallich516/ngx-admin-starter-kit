import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NbToastrService } from '@nebular/theme';
import { NetworkserviceService } from '../../../services/networkservice.service';
import { Post } from "../../../services/networkservice.service"

@Component({
  selector: "ngx-view-post",
  templateUrl: "./view-post.component.html",
  styleUrls: ["./view-post.component.scss"],
})

export class ViewPostComponent implements OnInit {
  post: Post
  loading = false;
  success = false;

  // @Input() post: Post;

  constructor(
    private route: ActivatedRoute, 
    private service: NetworkserviceService, 
    private toastr: NbToastrService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.loading = true;
    
    let id = this.route.snapshot.paramMap.get("id");    
    this.service.getPost(id).subscribe((response) => {
      this.loading = false;
      this.post = response.body
      this.success = true;
      this.toastr.success("Received Post!", "Success")
    }, (error: HttpErrorResponse) => {
      this.loading = false;
      this.toastr.danger(error.message, "Error!")
    })
    // this.post = this.service.getLocalPost();
    // console.log(this.post)
  }

  goBack() {
    this.router.navigate(["pages/view-allposts"]);
  }

}
