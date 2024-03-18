import { Component, OnInit } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'app-dong1',
  template: `
  <div class="card flex my-16 w-full">
    <p class="text-start font-bold text-gray-600 py-4 w-1/6 ">Name</p>
    <div class="put card-body w-5/6">
      <ng-container #fieldComponent></ng-container>
    </div>
  </div>
`,    styleUrls: ['./dong1.component.css']
})
export class Dong1Component extends FieldWrapper {
}