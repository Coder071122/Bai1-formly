import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { MyFormComponent } from './my-form/my-form.component';
import { InputComponent } from './input/input.component';
import { FormControl } from '@angular/forms';
import { TextarenaComponent } from './textarena/textarena.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { Dong1Component } from './dong1/dong1.component';
import { Dong2Component } from './dong2/dong2.component';
import { Input2Component } from './input2/input2.component';
import { Dong3Component } from './dong3/dong3.component';
import { Input3Component } from './input3/input3.component';
import { Dong4Component } from './dong4/dong4.component';
import { Dong5Component } from './dong5/dong5.component';
import { Input4Component } from './input4/input4.component';
import { Dong6Component } from './dong6/dong6.component';
import { Input5Component } from './input5/input5.component';
import { Input6Component } from './input6/input6.component';
import { Input11Component } from './input11/input11.component';
import { Input33Component } from './input33/input33.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    InputComponent,
    TextarenaComponent,
    WrapperComponent,
    Dong1Component,
    Dong2Component,
    Input2Component,
    Dong3Component,
    Input3Component,
    Dong4Component,
    Dong5Component,
    Input4Component,
    Dong6Component,
    Input5Component,
    Input6Component,
    Input11Component,
    Input33Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormlyModule.forRoot(),
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      types: [
        { name: 'input1', component: InputComponent},
        { name: 'input2', component: Input2Component},
        { name: 'input3', component: Input3Component},
        { name: 'input4', component: Input4Component},
        { name: 'input5', component: Input5Component},
        { name: 'input6', component: Input6Component},
        { name: 'input11', component: Input11Component},
        { name: 'input33', component: Input33Component},

        { name: 'textarea', component: TextarenaComponent},
      ],
      wrappers: [
        { name: 'panel', component: WrapperComponent },
        { name: 'dong1', component: Dong1Component },
        { name: 'dong2', component: Dong2Component },
        { name: 'dong3', component: Dong3Component },
        { name: 'dong4', component: Dong4Component },
        { name: 'dong5', component: Dong5Component },
        { name: 'dong6', component: Dong6Component },

      ],

    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
