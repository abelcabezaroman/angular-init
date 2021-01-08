import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { InputButtonComponent } from './components/input-button/input-button.component';
import { InputHelloWorldComponent } from './components/input-hello-world/input-hello-world.component';
import { InputCardComponent } from './components/input-card/input-card.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { OverAgeComponent } from './exercises/exercise-4/over-age/over-age.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { CountriesListComponent } from './exercises/exercise-5/countries-list/countries-list.component';
import { CountriesFilteredListComponent } from './exercises/exercise-6/countries-filtered-list/countries-filtered-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ButtonComponent,
    CardComponent,
    InputButtonComponent,
    InputHelloWorldComponent,
    InputCardComponent,
    NgIfComponent,
    OverAgeComponent,
    NgForComponent,
    CountriesListComponent,
    CountriesFilteredListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
