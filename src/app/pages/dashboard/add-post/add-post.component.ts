import { Component, OnInit } from "@angular/core";
import { Validators } from "@angular/forms";
import { FormBuilder, FormGroup } from "@angular/forms";
import { NbToastrService } from "@nebular/theme";
import { NetworkserviceService } from "../../../services/networkservice.service";
import { Post } from "../../../services/networkservice.service";

@Component({
  selector: "ngx-add-post",
  templateUrl: "./add-post.component.html",
  styleUrls: ["./add-post.component.scss"],
})
export class AddPostComponent implements OnInit {
  postForm: FormGroup;
  post: Post;

  constructor(
    private fb: FormBuilder,
    private service: NetworkserviceService,
    private toastr: NbToastrService
  ) {}

  ngOnInit(): void {
    this.postForm = this.fb.group({
      userId: ["", Validators.required],
      id: ["", Validators.required],
      title: ["", Validators.required],
      body: ["", Validators.required],
    });
  }

  get f() {
    return this.postForm.controls;
  }

  submit() {
    let json = JSON.stringify(this.postForm.getRawValue());
    console.log(json)
    this.service.sendPost(json).subscribe((response) => {
      response;
      this.toastr.success(`Post added with Id : ${response.id}`, "Success");
      this.postForm.reset();
    });
  }
}
