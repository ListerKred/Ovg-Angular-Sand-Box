import { Component } from '@angular/core';
import { FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss']
})
export class UserSignupComponent {

  signup = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    email: ['', Validators.required],
    password: ['', Validators.required],
    // confirmPassword: ['', Validators.required],
    birthdate: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  onSubmit(): void { // Gerer la consequence.
    // const event: Event = this.signup.value;
  }
  // get name(): AbstractControl { return this.signup.get('username'); }

}
