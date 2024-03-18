import { Component, OnInit } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-input2',
  template: `
    <input  class="p-4 rounded-lg w-full bg-gray-200 " type="input" [formControl]="formControl" [formlyAttributes]="field">
  `,
  styleUrls: ['./input2.component.css']
})
export class Input2Component extends FieldType<FieldTypeConfig> {}

