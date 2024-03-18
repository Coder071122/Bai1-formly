import { Component, OnInit } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'app-dong2',
  template: `
  <div class="card flex my-16">
    <p class="text-start font-bold text-gray-600 py-4 w-1/6">Companny</p>
    <div class="card-body w-5/6">
      <ng-container #fieldComponent></ng-container>
    </div>
  </div>
`,    styleUrls: ['./dong2.component.css']
})
export class Dong2Component extends FieldWrapper {
}