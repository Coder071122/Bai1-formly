import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-input',
  template: `
  <div class="put">
    <input  class=" p-4 rounded-lg w-full bg-gray-200 " type="input" [formControl]="formControl" [formlyAttributes]="field">
  </div>
  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent extends FieldType<FieldTypeConfig> {}


