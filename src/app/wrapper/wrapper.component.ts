import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'app-wrapper',
  template: `
    <div class="card">
      <h3 class="card-header text-white bg-black text-center font-medium text-4xl py-8 rounded-t-lg">EVENT REGISTRATION FORM</h3>
      <div class="card-body border-2 rounded-b-lg bg-white drop-shadow-lg">
        <ng-container #fieldComponent></ng-container>
      </div>
    </div>
  `,  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent extends FieldWrapper {
}