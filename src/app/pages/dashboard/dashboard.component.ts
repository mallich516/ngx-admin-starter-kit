import { Component } from "@angular/core";
import { resetFakeAsyncZone } from "@angular/core/testing";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "ngx-dashboard",
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent {
  locations = [
    { id: 0, location: "New York" },
    { id: 1, location: "Sydney" },
    { id: 2, location: "Ottawa" },
    { id: 3, location: "Willington" },
  ];

  checkBoxes = [
    { id: 0, box: "New York" },
    { id: 1, box: "Sydney" },
    { id: 2, box: "Ottawa" },
    { id: 3, box: "Willington" },
  ];

  radioBtns = [
    { id: 0, radio: "First" },
    { id: 1, radio: "Second" },
    { id: 2, radio: "Third" },
    { id: 3, radio: "Forth" },
  ];

  loginForm: FormGroup;
  alertMessage = "You have been successfully saved!";
  formSubmit = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(4)]],
      email: ["", [Validators.required, Validators.email]],
      password: [
        "",
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(8),
          Validators.pattern,
        ],
      ],
      location: ["", Validators.required],
      checkBox: ["", [Validators.required, Validators.requiredTrue]],
      radioBtn: ["", Validators.required],
      acceptOrReject: [false, [Validators.requiredTrue]],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  save() {
    this.formSubmit = true;
    let jsonData = this.loginForm.getRawValue();
    let json = JSON.stringify(jsonData);
    console.log(json);
    this.formSubmit = false;
    this.loginForm.reset()
  }

  changed(acceptOrReject: boolean) {
    // console.log(acceptOrReject);
  }

  reset() {
    this.formSubmit = false;
    this.loginForm.reset();
  }

  selectedLocation(location: string) {
    // console.log(location);
  }

}
