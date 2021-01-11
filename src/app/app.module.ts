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
import { InputImgComponent } from './exercises/exercise-3/input-img/input-img.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgClassScoreComponent } from './exercises/exercise-7/ng-class-score/ng-class-score.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { ColorBallComponent } from './exercises/exercise-8/color-ball/color-ball.component';
import { ButtonClickComponent } from './components/button-click/button-click.component';
import { ThiefsComponent } from './exercises/exercise-9/thiefs/thiefs.component';
import { OutputFatherComponent } from './components/output-father/output-father.component';
import { OutputBabyComponent } from './components/output-baby/output-baby.component';
import { NgModelComponent } from './components/ng-model/ng-model.component';
import { FormsModule } from '@angular/forms';
import { ProMatchComponent } from './exercises/exercise-10/pro-match/pro-match.component';
import { ProMatchListComponent } from './exercises/exercise-10/pro-match-list/pro-match-list.component';
import { ProMatchFormComponent } from './exercises/exercise-10/pro-match-form/pro-match-form.component';
import { ProMatchFilterComponent } from './exercises/exercise-10/pro-match-filter/pro-match-filter.component';
import { NgContentComponent } from './components/ng-content/ng-content.component';
import { NgContainerComponent } from './components/ng-container/ng-container.component';

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
    CountriesFilteredListComponent,
    InputImgComponent,
    NgClassComponent,
    NgClassScoreComponent,
    NgStyleComponent,
    ColorBallComponent,
    ButtonClickComponent,
    ThiefsComponent,
    OutputFatherComponent,
    OutputBabyComponent,
    NgModelComponent,
    ProMatchComponent,
    ProMatchListComponent,
    ProMatchFormComponent,
    ProMatchFilterComponent,
    NgContentComponent,
    NgContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
