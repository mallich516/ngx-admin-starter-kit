import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  
    this.form = this.fb.group({
      sno: ['', [Validators.required]],
      name: ['', [Validators.required]],
      rollNo: ['', [Validators.required]],
      list: this.fb.array([
        this.addSkillsGroup()
      ])
    });

  }

  get f() {
    return this.form.controls;
  }
 
  get listArray(): FormArray {
      return <FormArray>this.form.get('list');
  }   

  addRow() {
    this.listArray.push(this.addSkillsGroup());
  }

  removeRow(index) {
    this.listArray.removeAt(index);
  }

  addSkillsGroup() : FormGroup {
    return this.fb.group({
          skills: ['', [Validators.required]],
          experience: ['', [Validators.required]],
          points: ['', [Validators.required]]
        });
  }

  saveFormDetails() {
    // console.log(this.form.getRawValue());
    let json = JSON.stringify(this.form.getRawValue())
    console.log(json)
    this.form.reset();
    this.form.setControl('list', this.fb.array([this.addSkillsGroup()]));
  }

}
