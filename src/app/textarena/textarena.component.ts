import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-textarena',
  template: `
    <textarea class="putt w-full text-xl border-2 border-gray-400 rounded-lg h-40" type="textarea" [formControl]="formControl" [formlyAttributes]="field"></textarea>
  `,
    styleUrls: ['./textarena.component.css']

  })
export class TextarenaComponent extends FieldType<FieldTypeConfig> {}