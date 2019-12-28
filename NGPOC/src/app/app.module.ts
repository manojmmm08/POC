import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateformComponent } from './createform/createform.component';
import { RouterModule,Routes  } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { FormUsingModelValidationComponent } from './form-using-model-validation/form-using-model-validation.component';
import {SelectRequiredDirective} from '../Shared/select-required-directive';
import { CallApiComponent } from './call-api/call-api.component';
import {DevService} from '../app/dev-service';
import { HttpModule } from '@angular/http';
import { GridBindPOCComponent } from './grid-bind-poc/grid-bind-poc.component';
import { Employee } from '../app/employee';
import { MiscComponent } from './misc/misc.component';

const routes: Routes = [
  { path: 'createform', component: CreateformComponent },
  { path: 'form-using-model-validation', component: FormUsingModelValidationComponent },
  { path: 'call-api', component: CallApiComponent },
  { path: 'grid-bind-poc', component: GridBindPOCComponent },
  {path:'misc' , component:MiscComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    CreateformComponent,
    FormUsingModelValidationComponent,
    SelectRequiredDirective,
    CallApiComponent,
    GridBindPOCComponent,
    MiscComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
   // DevService
  ],
  providers: [DevService],
  bootstrap: [AppComponent]
})
export class AppModule { }
