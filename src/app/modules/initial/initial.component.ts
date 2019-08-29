import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.scss']
})
export class InitialComponent implements OnInit {
  emailForm: FormGroup;

  constructor(
    private databaseService: DatabaseService,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.emailForm = this.fb.group({
      email: ['', Validators.required]
    });
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.emailForm.controls[controlName].hasError(errorName);
  }

  resetForm() {
    this.emailForm.reset();
    Object.keys(this.emailForm.controls).forEach(key => {
      this.emailForm.controls[key].setErrors(null);
    });
  }

  submitEmail() {
    if (this.emailForm.valid) {
      this.databaseService.addEmail(this.emailForm.value);
      this.resetForm();
    }
  }

}
