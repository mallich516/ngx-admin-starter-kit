import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { sign } from "crypto";

@Component({
  selector: "ngx-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: [
        "",
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(12),
        ],
      ],
      confirmPassword: [
        "",
        [
          Validators.required
        ],
      ],
    });
  }

  get f() {
    return this.signupForm.controls;
  }

  submit() {
    let formData = this.signupForm.getRawValue();
    let json = JSON.stringify(formData);
    // console.log(json);
    this.saveInLocalStorage();
    this.signupForm.reset();
  }

  saveInLocalStorage() {
    localStorage.setItem('userName', this.signupForm.controls.firstName.value);
    localStorage.setItem('lastName', this.signupForm.controls.lastName.value);
    localStorage.setItem('email', this.signupForm.controls.email.value);
    localStorage.setItem('passWord', this.signupForm.controls.password.value);
    localStorage.setItem('cpassWord', this.signupForm.controls.confirmPassword.value);
    let firstName = localStorage.getItem('userName');
    let lastName = localStorage.getItem("lastName");
    let email = localStorage.getItem("email");
    let passWord = localStorage.getItem("passWord");
    let cpassWord = localStorage.getItem("cpassWord");    
    console.log(`${firstName} ${lastName} ${email} ${passWord} ${cpassWord}`);
  }

}
