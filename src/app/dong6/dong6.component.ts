import { Component, OnInit } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'app-dong6',
  template: `
  <div class="card  my-16">
    <p class="text-start font-bold text-gray-600 py-2 ">Are you an existing customer</p>
    <div class="card-body">
      <ng-container #fieldComponent></ng-container>
    </div>
  </div>
`,    styleUrls: ['./dong6.component.css']
})
export class Dong6Component extends FieldWrapper {
}