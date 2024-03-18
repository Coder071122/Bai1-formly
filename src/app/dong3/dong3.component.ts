import { Component, OnInit } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'app-dong3',
  template: `
  <div class="card flex my-16">
    <p class="text-start font-bold text-gray-600 py-2 w-1/6">Email</p>
    <div class="card-body w-5/6">
      <ng-container #fieldComponent></ng-container>
    </div>
  </div>
`,    styleUrls: ['./dong3.component.css']
})
export class Dong3Component extends FieldWrapper {
}