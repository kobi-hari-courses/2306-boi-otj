import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMMON_MODULES } from './app.config';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { available, lowercase } from './my-validators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, COMMON_MODULES],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  group = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3), lowercase], available()), 
    email: new FormControl('', [Validators.required, Validators.email, lowercase])
  });

  readonly username = this.group.controls['username'];

  constructor() {
    const val = this.group.getRawValue();
  }

}
