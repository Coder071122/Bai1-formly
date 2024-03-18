import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
})
export class MyFormComponent {
  form = new FormGroup({});
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: ' grid grid-cols-2 gap-5',
      wrappers: ['dong1'],
      fieldGroup: [
        {
          type: 'input1',
          key: 'firstName',
          props: {
            required: true,
          }
        },
        {
          type: 'input11',
          key: 'lastName',
          expressions: {
            'props.disabled': '!model.firstName',
          },
        },
        
      ],
    },
    {
      wrappers: ['dong2'],
      fieldGroup: [
        {
          type: 'input2',
          key: 'Company',
        },
        
      ],
    },
    {
      wrappers: ['dong3'],
      fieldGroup: [
        {
          type: 'input2',
          key: 'Email',
          props: {
            placeholder: 'example@email.com',
            label: 'Email',
            required: true,
          },
        },
      ],
    },
    { 
      fieldGroupClassName: 'flex flex-rows gap-6',
      wrappers: ['dong4'],
      fieldGroup: [
      { 
        className: 'w-1/6',
        type: 'input3',
        key: 'Area Code',
        props: {
          type: 'number',
        },
      },
      {
        className: 'w-5/6',
        type: 'input33',
        key: 'Phone Number',
        props: {
          type: 'number',
          max: 9999999,
          min: 0,
          pattern: '\\d{7}',
        },
      },
      ],
    },
    { 
      wrappers: ['dong5'],
      fieldGroup: [
        {
          key: 'Subject',
          type: 'input4',
          defaultValue: 'Choose Option',
          props: {
            options: [
              { label: 'Snickers', value: 'snickers' },
              { label: 'Baby Ruth', value: 'baby_ruth' },
              { label: 'Milky Way', value: 'milky_way' },
            ],
          },
        },
      ],
    },
    { 
      wrappers: ['dong6'],
      fieldGroupClassName:'flex',
      fieldGroup: [
        {
          type: 'input5',
          key: 'Yes',

        },
        {
          className: 'pl-24',
          type: 'input6',
          key: 'No',

        },
      ],
    },

  ];

  
  onSubmit() {
    const formData = this.form.value;
    alert(JSON.stringify(formData, null, 2));
  }
}
