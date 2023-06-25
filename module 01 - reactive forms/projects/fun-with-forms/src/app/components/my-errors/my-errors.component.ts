import { FormControl } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-errors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-errors.component.html',
  styleUrls: ['./my-errors.component.scss']
})
export class MyErrorsComponent {
  @Input({required: true})
  formControl!: FormControl;

}
