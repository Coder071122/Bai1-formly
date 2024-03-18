import { Component, OnInit } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'app-dong5',
  template: `
  <div class="card flex my-16">
    <p class="text-start font-bold text-gray-600 py-4 w-1/6">Subject</p>
    <div class="card-body w-5/6">
      <ng-container #fieldComponent></ng-container>
    </div>
  </div>
`,    styleUrls: ['./dong5.component.css']
})
export class Dong5Component extends FieldWrapper {
}