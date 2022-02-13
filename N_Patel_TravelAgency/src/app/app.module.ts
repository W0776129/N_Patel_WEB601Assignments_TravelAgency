import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { YPipe } from './y.pipe';
import { YDirective } from './y.directive';
import { TypeFilterPipe } from './type-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    YPipe,
    YDirective,
    TypeFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
