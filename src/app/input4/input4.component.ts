import { Component, OnInit } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { FormlyFormOptions} from '@ngx-formly/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-input4',
  template: `
    <select class="put p-4 border-none rounded-lg w-full bg-gray-200" [formControl]="formControl">
      <option *ngFor="let option of options$ | async" [value]="option.value">{{ option.label }}</option>
    </select>
  `,
  styleUrls: ['./input4.component.css']
})
export class Input4Component extends FieldType<FieldTypeConfig> {
  options$: Observable<any[]> | undefined; 

  ngOnInit() {
    this.options$ = this.to.options as Observable<any[]>; 
  }
}