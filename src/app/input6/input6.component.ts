import { Component, OnInit } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-input6',
  template: `
  <div class="flex">
    <input style="color: green;" class="rounded-full my-auto" type="checkbox" [formControl]="formControl" [formlyAttributes]="field" >
    <p class="pl-4 text-gray-500 font-medium">No</p>
  </div>
  `,
  styleUrls: ['./input6.component.css']
})
export class Input6Component extends FieldType<FieldTypeConfig> {}