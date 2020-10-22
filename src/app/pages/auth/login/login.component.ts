import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';

@Component({
  selector: "ngx-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
  private email = '';
  private password = ''; 

  constructor(private fb: FormBuilder, private router: Router, private toastr: NbToastrService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
    });

    this.email = localStorage.getItem('email');
    this.password = localStorage.getItem('passWord');
    console.log(`${this.email} ${this.password}`)
  }

  get f() {
    return this.loginForm.controls;
  }

  submit() {
    let formData = this.loginForm.getRawValue();
    let json = JSON.stringify(formData);
    let email = this.loginForm.controls.email.value;
    let password = this.loginForm.controls.password.value;
    if (email == this.email && password == this.password) {
      localStorage.setItem("loginStatus", "true");
      console.log(`From Loginpage ${localStorage.getItem("loginStatus")}`)
        this.router.navigate(['/pages/dashboard']);
    } else {
      this.toastr.danger("Invalid Email or Password", "Alert", {
          position: NbGlobalPhysicalPosition.BOTTOM_RIGHT
        });
    }
    console.log(json);
    this.loginForm.reset();
  }
}
