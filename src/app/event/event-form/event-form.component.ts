import { Component } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent {

  color = new FormControl('');

  myForm = this.fb.group({color: ['', Validators.required]});

  constructor(private fb: FormBuilder) { }

  onSubmit(): void { // Gerer la consequence.
    const event: Event = this.myForm.value;
  }
  get name(): AbstractControl { return this.myForm.get('color'); }



}
