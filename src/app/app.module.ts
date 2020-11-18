import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { VariableComponent } from './variable/variable.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgClassFruitsComponent } from './ng-class-fruits/ng-class-fruits.component';
import { InputButtonComponent } from './input-button/input-button.component';
import { InputImgComponent } from './input-img/input-img.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgStyleBallComponent } from './ng-style-ball/ng-style-ball.component';
import { InputPersonComponent } from './input-person/input-person.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { CommonModule } from '@angular/common';
import { NgIfOverComponent } from './ng-if-over/ng-if-over.component';
import { NgForAvengersComponent } from './ng-for-avengers/ng-for-avengers.component';
import { NgForInputGalleryComponent } from './ng-for-input-gallery/ng-for-input-gallery.component';
import { NgForInputPersonComponent } from './ng-for-input-person/ng-for-input-person.component';
import { OutputButtonComponent } from './output-button/output-button.component';
import { ProMatchComponent } from './pro-match/pro-match.component';
import { ProMatchListComponent } from './pro-match-list/pro-match-list.component';
import { ProGalaxyComponent } from './pro-galaxy/pro-galaxy.component';
import { ProGalaxyListComponent } from './pro-galaxy-list/pro-galaxy-list.component';
import { NgModelComponent } from './ng-model/ng-model.component';
import { FormsModule } from '@angular/forms';
import { ProToDoComponent } from './pro-to-do/pro-to-do.component';
import { ProToDoListComponent } from './pro-to-do-list/pro-to-do-list.component';
import { ProToDoFormComponent } from './pro-to-do-form/pro-to-do-form.component';
import { ProGalaxyFormComponent } from './pro-galaxy-form/pro-galaxy-form.component';
import { ProMatchFormComponent } from './pro-match-form/pro-match-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ButtonComponent,
    CardComponent,
    VariableComponent,
    NgClassComponent,
    NgClassFruitsComponent,
    InputButtonComponent,
    InputImgComponent,
    NgStyleComponent,
    NgStyleBallComponent,
    InputPersonComponent,
    NgIfComponent,
    NgIfOverComponent,
    NgForAvengersComponent,
    NgForInputGalleryComponent,
    NgForInputPersonComponent,
    OutputButtonComponent,
    ProMatchComponent,
    ProMatchListComponent,
    ProGalaxyComponent,
    ProGalaxyListComponent,
    ProGalaxyFormComponent,
    NgModelComponent,
    ProToDoComponent,
    ProToDoListComponent,
    ProToDoFormComponent,
    ProMatchFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
